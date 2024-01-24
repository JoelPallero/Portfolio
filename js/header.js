(function(){
     //show logo variables
    const logo = document.getElementById('logo');
    const caps = document.getElementById('caps');

    //show logo function
    window.addEventListener('scroll', () => {
        let scrollTop = document.documentElement.scrollTop;
        let scrollTopMain = caps.offsetTop;

        if (scrollTopMain < scrollTop){
            logo.style.top = '5px';
        }
        else{
            logo.style.top = '-50px';
        }        
    });
})();