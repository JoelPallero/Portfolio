(function(){

    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.product-link').forEach(article => {
            article.addEventListener('click', e => {
                e.preventDefault();

                // Obtener el ID del artículo desde el atributo data-id
                let idArticle = e.target.id;

                // Verificar si se encontró el ID del artículo
                if (idArticle) {
                    // Redirigir a la nueva URL con el ID
                    window.location.href = `/tienda/productos/producto.html?id=${idArticle}`;
                } else {
                    console.error('No se pudo obtener el ID del artículo');
                }
            });
        });
    });


})();