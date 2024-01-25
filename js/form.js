(function(){
    const form = document.getElementById('contact-form');
    const urlForm = 'https://formspree.io/f/mwkgvnqb';
    const sendButton = document.getElementById('send-button');

    async function handleSendEmail(e){        
        e.preventDefault();
        try {    
            const fd = new FormData(this);
    
            const response = await fetch(urlForm, {
                method: 'POST',
                body: fd,
                headers: {
                    Accept: 'aplication/json'
                }
            })
            sendButton.classList.add('send-button-ok');

            setTimeout(() => {
                sendButton.classList.remove('send-button-ok');
            }, 2500);

            this.reset();
        } catch (error) {
            console.error(error)
        }
    }

    form.addEventListener('submit', handleSendEmail);
})();