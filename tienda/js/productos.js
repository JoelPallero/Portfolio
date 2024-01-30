(function () {

    document.addEventListener('DOMContentLoaded', function () {
        const urlParams = new URLSearchParams(window.location.search);
        const categoria = urlParams.get('id');
        const mainSection = document.querySelector('.main-section');


        async function obtenerDatos() {
            // Ruta del archivo JSON local
            const urlJson = '/tienda/JSON/productos.json';
        
            try {
                const response = await fetch(urlJson);
        
                if (!response.ok) {
                    throw new Error(`Error al realizar la solicitud. Código HTTP: ${response.status}`);
                }
        
                const datos = await response.json();
                

                // Verificar si la categoría deseada existe en los datos
                if (datos.hasOwnProperty(categoria)) {
                    // Obtener solo los datos de la categoría deseada
                    const datosCategoria = datos[categoria];
        
                    datosCategoria.forEach(producto => {
                        //container element of every product
                        let article = document.createElement("article");
                        article.classList.add("article");
                        console.log(article)

                        //internal section of img
                        let picture = document.createElement('picture');
                        let imageProduct = document.createElement('img')
                        imageProduct.src = producto.img;
                        imageProduct.classList.add('product-img');
                        imageProduct.loading = 'lazy';
                        picture.appendChild(imageProduct);

                        //internal section of product info
                        let infoContainer = document.createElement('div');
                        infoContainer.classList.add('art-info-container');

                        //internal elements of the product info
                        let title =  document.createElement('h3');
                        title.classList.add('art-title');
                        title.textContent = producto.name;                        
                        

                        let subtitle =  document.createElement('h2');
                        subtitle.textContent = producto.model;
                        console.log(subtitle);

                        let info = document.createElement('p');
                        info.classList.add('art-info');
                        info.innerHTML= `${producto.description}<br> Colores: ${producto.color} <br>  Precio: ${producto.price}`;

                        let contactForm = document.createElement('a');
                        contactForm.classList.add('product-link');
                        contactForm.setAttribute('href', `#consult-form`);
                        contactForm.innerHTML = 'Consultar';

                        //container append
                        infoContainer.appendChild(title);
                        infoContainer.appendChild(subtitle);
                        infoContainer.appendChild(info);
                        infoContainer.appendChild(contactForm);


                        //Lets append all the article in the main section
                        article.appendChild(imageProduct);
                        article.appendChild(infoContainer);
                        
                        mainSection.appendChild(article);
                    });

                } else {
                    console.error(`No se encontró la categoría ${categoria} en los datos`);
                }
            } catch (error) {
                console.error('Error al realizar la solicitud:', error);
            }
        }
        
        // Llamar a la función obtenerDatos
        obtenerDatos();
    });
})();