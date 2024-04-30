(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        const input = document.querySelector('.inputfile');
        const label = input.nextElementSibling;
        const labelVal = label.innerHTML;
        const removeContainer = document.querySelector('.remove-file');
        const removeBtn = document.getElementById('.remove-img');

        input.addEventListener('change', e => {
            //original value
            label.innerHTML = labelVal;

            //get only the name of the selected file.
            const fileName = e.target.value.split('\\').pop();

            if(fileName){
                label.innerHTML = fileName;
                label.appendChild(removeContainer);
                removeContainer.classList.remove('strong-inactive');
            }
        });
        removeContainer.addEventListener('click', (e) => {
            e.preventDefault();
            removeContainer.classList.add('strong-inactive');
            input.value = '';
            label.innerHTML = labelVal;
        })

    })
})();