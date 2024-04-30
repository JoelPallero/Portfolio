    <!-- Who am i -->
    <section class="profile">
        <div class="profile-photo" <?php echo $displayPhoto ? '' : 'style="display:none"'?>>
            <a href="index.php">
                <picture>
                    <source srcset="./img/profile-3.webp" type="image/webp">
                    <source srcset="./img/profile-3.png" type="image/png">
                    <img loading="lazy" src="./img/profile-3.png" alt="profile photo" class="joel-photo">
                </picture>
            </a>
        </div>
        <div class="introduction">
            <a href="index.php" class="site-title">
                <h2 class="title-section">Joel Pallero</h2>
            </a>
            <p class="paragraph">I am a FrontEnd Web developer.</p>
            <div class="caps" id="caps">
                <a target="_blank" href="https://www.linkedin.com/in/joel-pallero/" class="profile-links linkedin">
                    <img loading="lazy" src="./img/icons/linkedin.svg" alt="LinkedIn">
                </a>
                <a target="_blank" href="https://github.com/JoelPallero" class="profile-links github">
                    <img loading="lazy" src="./img/icons/gh.svg" alt="LinkedIn">
                </a>
                <a href="./documents/resume-english.pdf" download="resume-joel-pallero.pdf" class="resume">
                    Resume
                    <img loading="lazy" src="./img/icons/download.svg" alt="Download icon" class="download-icon">
                </a>
            </div>
        </div>
        
        <button class="email-container" id="copy-mail">
            esteban.pallero@gmail.com
            <div class="icons-container">
                <img loading="lazy" src="./img/icons/copy.svg" alt="copy icon" class="ck-symbol copy-icon">
                <img loading="lazy" src="./img/icons/checked.svg" alt="copy icon" class="ck-symbol check-icon">
            </div>
        </button>
    </section>