(function(){

    document.querySelectorAll('.product-link').forEach(article => {
        article.addEventListener('click', e => {
            let idArticle = e.id;
            window.location.href = "/tienda/productos.html?id=" + idArticle;
        });
    });


})();