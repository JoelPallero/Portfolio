<?php 

require 'includes/config/database.php';
$db = connectDb();

session_start();
require 'includes/functions.php';

//Authentication
if($_SERVER["REQUEST_METHOD"] == "POST") {
}

if(!isset($_SESSION['user'])) {
    header("Location: login.php");
    exit;
}


includeTemplate('head');
includeTemplate('header');

?>


<div class="container">
    <div class="form container">
        
    </div>
</div>




<?php
    includeTemplate('footer');
