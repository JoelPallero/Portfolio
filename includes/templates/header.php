<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Meta description -->
    <meta name="description" content="Designer and Developer of the web site: Joel Pallero. This is a resume and portfolio web pages for those recruiters who looking for a good FrontEnd Developer. You can contact me anytime you need. Regards!">
    <!-- End Meta description -->

    <!-- Preloads and preconnects -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link rel="shortcut icon" href="img/logo-tipo-small.png" type="image/x-icon">
    
    <link rel="preload" href="css/normalize.css" as="style">    
    <link rel="stylesheet" href="css/normalize.css">

    <link rel="preload" href="css/app.css" as="style">    
    <link rel="stylesheet" href="css/app.css">

    <title>Joel Pallero - FrontEnd Developer</title>

</head>

<body class="container">
    <!-- header -->
    <header class="header container">
        <section class="skin">
            <div class="logo" id="logo">
                <a href="index.php" class="logo-img-container">
                    <picture>
                        <source srcset="img/profile-3.webp" type="image/webp">
                        <source srcset="img/profile-3.png" type="image/png">
                        <img loading="lazy" src="img/profile-3.png" alt="profile photo" class="logo-img">
                    </picture>                    
                </a>
                <div class="caps">
                    <!-- LinkedIn Icon -->
                    <a target="_blank" href="https://www.linkedin.com/in/joel-pallero/" class="sphere-link profile-links linkedin">
                        <img loading="lazy" src="img/icons/linkedin.svg" alt="LinkedIn">
                    </a>
                    <!-- GitHub Icon -->
                    <a target="_blank" href="https://github.com/JoelPallero" class="sphere-link profile-links github">
                        <img loading="lazy" src="img/icons/gh.svg" alt="GitHub">
                    </a>
                    <!-- Download Icon -->
                    <a href="documents/resume-english.pdf" download="resume-joel-pallero.pdf" class="resume">
                        CV
                        <img loading="lazy" src="img/icons/download.svg" alt="Download icon" class="download-icon">
                    </a>
                </div>
            </div>
            <div class="bg-mode" id="bg-mode">
                <!-- Dark Mode Icon -->
                <img loading="lazy" src="img/icons/moon.svg" alt="dark mode" class="moon dark-mode-icon">
                <!-- Light Mode Icon -->
                <img loading="lazy" src="img/icons/sun.svg" alt="light mode" class="sun dark-mode-icon">
            </div>
        </section>
    </header>

<main class="main container" id="main">