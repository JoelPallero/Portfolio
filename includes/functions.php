<?php

declare(strict_types = 1);
require 'app.php';
function includeTemplate( string $templateName, bool $displayPhoto = true, bool $displayJobs = false){
    include TEMPLATES_URL . "/{$templateName}.php";
}
