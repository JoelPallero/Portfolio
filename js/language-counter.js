(function () {/*
    document.addEventListener("DOMContentLoaded", function () {
        const languages = {
            "PHP": 0,
            "HTML": 0,
            "CSS": 0,
            "JavaScript": 0,
            "SQL": 0
        };

        function getCSSPercentage() {
            const cssCode = document.documentElement.outerHTML; // Obtener el código HTML completo
            const lines = cssCode.split('\n'); // Dividir el código en líneas
            let cssLines = 0;
        
            // Contar las líneas que contienen código CSS
            lines.forEach(line => {
                if (line.trim().startsWith('<style>') || line.trim().startsWith('<link rel="stylesheet"')) {
                    cssLines++;
                }
            });
        
            const totalLines = lines.length;
        
            // Calcular el porcentaje de líneas de código CSS en relación con el código total del proyecto
            const percentage = (cssLines / totalLines) * 100;
            return percentage.toFixed(2); // Redondear el resultado a 2 decimales
        }
        const cssPercentage = getCSSPercentage();
        console.log("Porcentaje de CSS:", cssPercentage);
                     
        
        function showCounter() {
            let totalLanguages = 0;
            for (const language in languages) {
                totalLanguages += languages[language];
            }

            let counterHTML = "";
            for (const language in languages) {
                const percentage = totalLanguages === 0 ? 0 : (languages[language] / totalLanguages) * 100;
                counterHTML += "<div class='language " + language.toLowerCase() + "' style='width: " + percentage.toFixed(2) + "%' title='" + language + ": " + percentage.toFixed(2) + "%'></div>";
            }
            document.getElementById("languages-bar").innerHTML = counterHTML;

            // Show the list of languages and percentages
            let languagesListHTML = "";
            for (const language in languages) {
                const percentage = totalLanguages === 0 ? 0 : (languages[language] / totalLanguages) * 100;
                languagesListHTML += "<li><span class='paragraph'>" + language + ": <span>" + percentage.toFixed(2) + "%</span></span></li>";
            }
            document.getElementById("languages-list").innerHTML = languagesListHTML;
        }

        countLanguages();
        showCounter();
    });*/
})();