(function () {    
    async function getProducts(urlProduct, urlDescriptionProduct,category){

        try {
            const responseP = await fetch(urlProduct);
            const responseDp = await fetch(urlDescriptionProduct);

            if (!responseP.ok) {
                throw new Error(`Error al realizar la solicitud. Código HTTP: ${responseP.status}` + error.message);
            }

            if (!responseDp.ok) {
                throw new Error(`Error al realizar la solicitud. Código HTTP: ${responseDp.status}` + error.message);
            }

            const products = await responseP.json();
            const description = await responseDp.json();
            createProductElement(products, description, category);
        }
        catch (error) {
            console.error('Error al realizar la solicitud:', error.message);
        }
    }

    function createProductElement(products, description, category) {
        
        //get the main section to append every element created here.
        const mainSection = document.querySelector('.main-section');
        
        if(description.hasOwnProperty(category)){
            const dataDescription = description[category];
            const descriptionSubtitle =  document.createElement('h2');
            descriptionSubtitle.classList.add('product-title');
            const descriptionPar =  document.createElement('p');
            descriptionPar.classList.add('product-description');
            
            descriptionPar.innerHTML = dataDescription;

            switch(category){
                case 'headdresses':
                    descriptionSubtitle.innerText = 'Tocados';
                    break;
                case 'bridal-bouquet':
                    descriptionSubtitle.innerText = 'Ramo de novia';
                    break;
                case 'ring-holder':
                    descriptionSubtitle.innerText = 'Porta Anillos';
                    break;
                case 'botonier':
                    descriptionSubtitle.innerText = 'Botonier';
                    break;
                case 'cake-bouquet':
                    descriptionSubtitle.innerText = 'Bouquete para Torta';
                    break;
                case 'bridal-tail':
                    descriptionSubtitle.innerText = 'Cola de Novia';
                    break;
                case 'bracelets':
                    descriptionSubtitle.innerText = 'Pulseras';
                    break;
            }
            

            mainSection.appendChild(descriptionSubtitle);
            mainSection.appendChild(descriptionPar);

        }

        if (products.hasOwnProperty(category)) {
            //get the category of the products
            const datacategory = products[category];
            

            datacategory.forEach(product => {
                //container element of every product
                const article = document.createElement("article");
                article.classList.add("article");

                const imageProducContainer = document.createElement('div');
                const imageProduct = document.createElement('img');
                imageProduct.classList.add('product-img');
                imageProduct.loading = 'lazy';
                
                let gallery = product.img;

                if (Array.isArray(gallery) && gallery.length > 0) {

                    //all img container
                    const imagesContainer = document.createElement('div');
                    imagesContainer.classList.add('img-container');

                    // // gallery container
                    const galleryContainer = document.createElement('div');
                    galleryContainer.classList.add('img-gallery');
                    
                    imageProduct.src = gallery[0];
                    
                    for (let i = 1; i < gallery.length; i++) {
                        const miniImg = document.createElement('img');
                        miniImg.classList.add('mini-img');
                        miniImg.src = gallery[i];

                        //managment of the click  event on each thumbnail
                        miniImg.addEventListener('click', createClickHandler(miniImg));

                        galleryContainer.appendChild(miniImg);
                    }  

                    imageProducContainer.appendChild(imageProduct);
                    imagesContainer.appendChild(imageProducContainer);
                    imagesContainer.appendChild(galleryContainer);
                    article.appendChild(imagesContainer);                
                }
                else{
                    
                    //If only 1 img
                    imageProduct.src = gallery;
                    imageProducContainer.appendChild(imageProduct);
                    
                    // Append el imageProducContainer al article
                    article.appendChild(imageProducContainer);
                }

                //internal section of product info
                let infoContainer = document.createElement('div');
                infoContainer.classList.add('art-info-container');

                //internal elements of the product info
                let title = document.createElement('h3');
                title.classList.add('art-title');
                title.textContent = product.name;

                let subtitle = document.createElement('h2');
                subtitle.classList.add('art-subtitle');
                subtitle.textContent = product.model;

                let info = document.createElement('p');
                info.classList.add('art-info');
                info.innerHTML = `${product.description}<br> Colores: ${product.color}`;

                if (product.medidas) {
                    for (const medidaNombre in product.medidas) {
                        const medidaValor = product.medidas[medidaNombre];
                        info.innerHTML += `<br>${medidaNombre}: ${medidaValor}`;
                    }
                }

                info.innerHTML += `<br> Precio: ${product.price}`;

                let contactForm = document.createElement('a');
                contactForm.classList.add('product-link');
                contactForm.setAttribute('href', `#consult-form`);
                contactForm.innerHTML = 'Consultar';

                //container append
                infoContainer.appendChild(title);
                infoContainer.appendChild(subtitle);
                infoContainer.appendChild(info);
                infoContainer.appendChild(contactForm);

                // Append el infoContainer al article
                article.appendChild(infoContainer);

                // Append el article al mainSection
                mainSection.appendChild(article);
            });

        } else {
            console.error(`No se encontró la categoría ${category} en los datos`);
        }
    }

    //function to handle the change of the main img
    function createClickHandler(miniImg) {
        return function () {
            //Get the main img
            const productImg = document.querySelector('.product-img');
    
            //exchanging the main img
            const temp = productImg.src;
            productImg.src = miniImg.src;
            miniImg.src = temp;
        };
    }

    
    document.addEventListener('DOMContentLoaded', function () {
        const urlParams = new URLSearchParams(window.location.search);

        //category to search it at the json file
        const category = urlParams.get('id');
        //Json local Path
        const urlProduct = '/tienda/JSON/products.json';
        const urlDescriptionProduct = '/tienda/JSON/productDescription.json';
        
        getProducts(urlProduct, urlDescriptionProduct, category);

    });


})();