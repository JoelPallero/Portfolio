(function() {
    document.addEventListener('DOMContentLoaded', function() {
        // Seleccionar elementos
        const copyButtonTop = document.getElementById('copy-mail-top');
        const copyButton = document.getElementById('copy-mail');
        const copyIcon = document.querySelector('.copy-icon');
        const checkIcon = document.querySelector('.check-icon');
    
        function copyToClipboard(button) {
            const emailText = button.innerText; // Texto a copiar
    
            // Crear un elemento de textarea temporal para copiar el texto
            const tempTextArea = document.createElement("textarea");
            tempTextArea.value = emailText;
            document.body.appendChild(tempTextArea);
            tempTextArea.select();
    
            // Copiar el texto al portapapeles
            document.execCommand("copy");
    
            // Eliminar el elemento temporal
            document.body.removeChild(tempTextArea);
    
            // Cambiar íconos
            if (checkIcon && copyIcon) {
                checkIcon.classList.add('check-icon-clicked');
                copyIcon.classList.add('copy-icon-clicked');
    
                setTimeout(() => {
                    checkIcon.classList.remove('check-icon-clicked');
                    copyIcon.classList.remove('copy-icon-clicked');
                }, 3000);
            }
        }
    
        // Verificar y agregar event listener solo si el elemento está presente
        if (copyButtonTop) {
            copyButtonTop.addEventListener('click', () => copyToClipboard(copyButtonTop));
        }
    
        if (copyButton) {
            copyButton.addEventListener('click', () => copyToClipboard(copyButton));
        }
    });
    
})();
