(function(){
    //Copy clipboard variables
    const copyButton = document.getElementById('copy-mail');
    const copyIcon = document.querySelector('.copy-icon');
    const checkIcon = document.querySelector('.check-icon');

    copyButton.addEventListener('click', function copyToClipboard() {
        const emailText = copyButton.innerText; // Cambia esto por el texto que deseas copiar

        // Crear un elemento de textarea temporal para copiar el texto
        const tempTextArea = document.createElement("textarea");
        tempTextArea.value = emailText;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();

        // Copiar el texto al portapapeles
        document.execCommand("copy");

        // Eliminar el elemento temporal
        document.body.removeChild(tempTextArea);

        checkIcon.classList.add('check-icon-clicked');
        copyIcon.classList.add('copy-icon-clicked');

        setTimeout(()=>{
            checkIcon.classList.remove('check-icon-clicked');
            copyIcon.classList.remove('copy-icon-clicked');
        }, 3000);
    });
})();