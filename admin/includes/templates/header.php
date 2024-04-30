<header class="container border-header">
    <div class="header">
        <div class="logo-container">
            <img src="img/logo-tipo-small.png" alt="logo joel pallero">
        </div>

        <nav class="nav" id="nav-menu">
            <a id="open-menu" class="menu-toggle">
                <img src="img/icons/chevron-dn.svg" alt="Menu">
            </a>
            <ul id="menu-items" class="items">                
                <li class="item">
                    <a id="close-menu" class="menu-toggle">
                        <img src="img/icons/close.svg" alt="Menu">
                    </a>
                </li>
                <?php
                    //mostrar el menu, dependiendo la pagina donde nos encontremos
                    if (basename($_SERVER['PHP_SELF']) !== 'index.php') {        
                        echo '
                        <li class="item">
                            <form action="add-tool.php" method="post">
                                <button type="submit" class="menu-item">Add Tools</button>
                            </form>
                        </li>
                        <li class="item">
                            <form action="add-job.php" method="post">
                                <button type="submit" class="menu-item">Add Jobs</button>
                            </form>
                        </li>';
                    }
                ?>
                <li class="item">
                    <form action="logout.php" method="post">
                        <button type="submit" class="menu-item" id="log-out">Logout</button>
                    </form>
                </li>
            </ul>
        </nav>
    </div>
</header>