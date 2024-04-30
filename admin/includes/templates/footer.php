


<script src="js/menu.js"></script>


<?php        
    //mostrar el menu, dependiendo la pagina donde nos encontremos
if (basename($_SERVER['PHP_SELF']) !== 'index.php') {        
    echo '<script src="js/select-files.js"></script>';
}
?>
</body>
</html>