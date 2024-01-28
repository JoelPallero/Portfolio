(function(){
    const tocados = [{
        name: 'Tocados',
        model:  'Corona',
        img: {
            src:'img/corona1.jpg',
            src: 'img/corona2.jpg',
        },
        description: '',
        color: 'a elección',
        price: 'A consultar',
    },{
        name: 'Tocados',
        model: 'Media corona',
        img: '',
        description: '',
        color: 'a elección',
        price: 'A consultar',
    },{
        name: 'Tocados',
        model: 'Aplique',
        img: '',
        description: '',
        color: 'a elección',
        price: 'A consultar',
    },];

    const ramos = [{
        name: 'Ramos',
        model: 'Tela',
        img: '',
        description: '',
        color: 'a elección',
        price: 'A consultar',
    },{
        name: 'Ramos',
        model: 'Foami',
        img: '',
        description: '',
        color: 'a elección',
        price: 'A consultar',
    },];

    const portaAnillos = [{
        name: 'Porta anillos para bodas',
        model:  'Canasta',
        img: '',
        medidas: {
            largo: '20cm',
            ancho: '17cm',
        },
        description: '',
        price: 'A consultar',
    },{
        name: 'Porta anillos para bodas',
        model: 'Almohadilla',
        img: '',
        medidas: {
            diámetro: '40cm',
        },
        description: '',
        price: 'A consultar',
    },];

    const botonier = [{
        name: 'Botonier',
        img: '',
        description: '',
        price: 'A consultar',
    },];

    const bouquete = [{
        name: 'Bouquete para torta',
        img: '',
        description: '',
        price: 'A consultar',
    },];

    const colaDeNovia = [{
        name: 'Cola de novia',
        img: '',
        description: 'Se alquila o se hacen colas a medida. Consultar precios para ambos casos',
        price: 'A consultar',
    },];

    const pulseras = [{
        name: 'Pulseras para dama de honor',
        img: '',
        description: '',
        price: 'A consultar',
    },];
    
    const btnHearddress = document.getElementById('product-headdresses');
    const btnBridalBouquet = document.getElementById('product-bridal-bouquet');
    const btnBridalTail = document.getElementById('product-bridal-tail');
    const btnRingHolder = document.getElementById('product-ring-holder');
    const btnCakeBouquet = document.getElementById('product-cake-bouquet');
    const btnBotonier = document.getElementById('product-botonier');
    const btnBracelet = document.getElementById('product-bracelet');


    
})();



/* <p class="model">Modelo: <span class="model-span"></span></p>
<p class="medidas">
    Alto: <span class="sizes"></span><br>
    Ancho: <span class="sizes"></span><br>
    Diámetro: <span class="sizes"></span>
</p>
<p class="description"></p>
<p class="price"></p> */