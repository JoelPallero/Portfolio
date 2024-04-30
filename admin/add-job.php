<?php 

require 'includes/config/database.php';
$db = connectDb();

session_start();
require 'includes/functions.php';

//Authentication
if($_SERVER["REQUEST_METHOD"] == "POST") {
    
    
    
    // //if everything is ok. Lets create a folder for every web img and upload the job
    // $ClientWebImgImgFolder = "../img/jobs-img";
    // //this is for not to "re-create" the folder
    // if(!is_dir($ClientWebImgImgFolder)){
    //     mkdir($ClientWebImgImgFolder);
    // }
    // //saving img
    // move_uploaded_file($toolImg["tmp_name"], $ClientWebImgImgFolder . "/" . $toolImg["name"]);
}

if(!isset($_SESSION['user'])) {
    header("Location: login.php");
    exit;
}

includeTemplate('head');
includeTemplate('header');
?>

<div class="container">
    <div class="form-container">
        <form method="POST" action="" enctype="multipart/form-data">
            <?php if(isset($errorJobs)) echo '<span class="error-span"> <b>Error</b>: '.$errorJobs.'</span>'; ?>

            
            <!-- Work done -->
            <label for="t-name" class="label-form">What did you do in this Job?</label>
            <input type="text" name="t-name" id="t-name" required>

            <!-- Client name -->
            <label for="t-name" class="label-form">Client name</label>
            <input type="text" name="t-name" id="t-name" required>

            <!-- excert -->
            <label for="t-name" class="label-form">Description</label>
            <input type="text" name="t-name" id="t-name" required>

            <!-- web url -->
            <label for="t-name" class="label-form">Web URL:</label>
            <input type="text" name="t-name" id="t-name" required>

            <!-- web capture -->
            <label for="t-name" class="label-form">Web Capture:</label>
            <input type="file" name="file-7" id="file-7" class="inputfile inputfile-7" accept="image/png, image/jpeg"
                required />
            <label for="file-7">
                <span class="iborrainputfile"></span>
                <strong class="file-choose">
                    <svg xmlns="http://www.w3.org/2000/svg" class="iborrainputfile" width="20" height="17"
                        viewBox="0 0 20 17">
                        <path
                            d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z">
                        </path>
                    </svg>
                    Choose web capture
                </strong>
                <strong class="remove-file strong-inactive" title="Remove image">
                    <svg id="remove-img" class="" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20">
                        <path d="M10 0c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm4.8 13.7c.4.4.4 1 0 1.4-.2.2-.5.3-.7.3s-.5-.1-.7-.3l-4.1-4.1-4.1 4.1c-.2.2-.5.3-.7.3s-.5-.1-.7-.3c-.4-.4-.4-1 0-1.4l4.1-4.1-4.1-4.1c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l4.1 4.1 4.1-4.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-4.1 4.1 4.1 4.1z"/>
                    </svg>
                </strong>
            </label>

            
            <!-- tools -->
            <!-- Lets build a block choices. All tools will apear to be selected as the user needs 
                 The backend will select all tools from db and will create options to be selected as the user needs.
                 Once selected, the options will apear as tablets. -->
            <?php
            ?>

            <input type="submit" value="Upload new Job" id="submit-tool">

        </form>
    </div>
</div>

<?php

includeTemplate('footer');