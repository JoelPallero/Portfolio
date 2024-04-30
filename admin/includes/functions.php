<?php

declare(strict_types = 1);
require 'app.php';
function includeTemplate(string $sectionName, string $siteTitle = 'Admin'){
    include TEMPLATES_URL . "/{$sectionName}.php";
}

