(function(){
    const upScrollButton = document.querySelector('.up__button');
    const cvDiv = document.getElementById('curriculum');
    const openModal = document.querySelector('.open__modal');
    const dialogModal = document.querySelector('dialog');

    
    function scrollUp(){
        let scrollTop = document.documentElement.scrollTop;
        let scrollTopCv = cvDiv.offsetTop - 100;
        if(scrollTopCv < scrollTop){
            upScrollButton.style.opacity = .9;
        }
        else{
            upScrollButton.style.opacity = 0;
        }
    }

    window.addEventListener('scroll', scrollUp);
    /**
     * Modal button for clients portfolio
     */

    openModal.addEventListener('click', () =>{
        dialogModal.showModal();
    });

})();