(function(){    

    // Verificar si hay un parámetro 'id' en la URL y mostrarlo en la consola
    const url = new URLSearchParams(window.location.search);
    const articleId = url.get('id');
    console.log(articleId);

})();