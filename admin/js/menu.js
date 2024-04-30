(function(){
    document.addEventListener("DOMContentLoaded", function() {
        const menuItems = document.getElementById("menu-items");
        document.getElementById("open-menu").addEventListener("click", function() {
            menuItems.classList.add("active");
        });

        document.getElementById("close-menu").addEventListener("click", function() {
            menuItems.classList.remove("active");
        });
    });
    
})();