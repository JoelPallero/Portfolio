<?php 

require 'includes/config/database.php';
$db = connectDb();

session_start();
require 'includes/functions.php';

//lets get the data from the database
$queryTool = "SELECT * FROM tools_data";
$resultTool = mysqli_query($db, $queryTool);

//Authentication
if($_SERVER["REQUEST_METHOD"] === "POST") {
    
    $toolName = mysqli_real_escape_string($db, $_POST['t-name']);
    $toolName = strtolower($toolName);
    $toolImg = $_FILES['file-7'];
    
    if($toolImg['error'] !== 0 || $toolImg['type'] !== 'image/svg+xml'){
        //If there's an uploading error or the img has not a svg format
        $errorTools = "Uploading error. This website only supports SVG files. Please upload the SVG file again.";
    }else{
        if($toolName){
            //if everything is ok. Create the folder and upload the img
            $imgFolder = "../img/tools";
            $imgFolderURL = "{$imgFolder}/{$toolImg["name"]}";
            //this is for not to "re-create" the folder
            if(!is_dir($imgFolder)){
                mkdir($imgFolder);
            }
            //saving img
            move_uploaded_file($toolImg["tmp_name"], $imgFolderURL);
            //lets subrstract the first character of the URL (its a dot)
            //cause it can not be there whe i call the img from html (it's not a relative path)
            $newImgFolderURL = substr($imgFolderURL, 1);

            //check for coincidences
            $chkQuery = "SELECT * FROM tools_data where tool_name = '{$toolName}'";
            $chkResult = mysqli_query($db, $chkQuery);
            
            if($chkResult->num_rows > 0){
                //warning
                $warningTools = "This tool already exists.";
            }else{
                //If there is not coincidences
                $query = "INSERT INTO tools_data (tool_name, tool_img_url) VALUES ('{$toolName}', '{$newImgFolderURL}')";
                $result = mysqli_query($db, $query);
                echo ($result);

                if($result) {
                    $successTools = "The tool was uploaded successfully.";
                }else{                
                    $errorTools = "There was an error uploading the tool. Please try again.";
                }
            }
        }
        else{
            $errorTools = "You have to name the SVG file.";
        }
    }
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
            <?php 
                if(isset($_POST['submit-tool'])) {
                    if(isset($errorTools)){
                        echo '<span class="error-span"> <b>Error</b>: '.$errorTools.'</span>';
                    }else if(isset($warningTools)){
                        echo '<span class="warning-span"> <b>Warning</b>: '. $warningTools.'</span>';
                    }
                }
            ?>
            <label for="t-name" id="tool-name">Tool name</label>
            <input type="text" name="t-name" id="t-name" required>

            <input type="file" name="file-7" id="file-7" class="inputfile inputfile-7" accept="image/svg+xml"
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
                    Choose svg
                </strong>
                <strong class="remove-file strong-inactive" title="Remove image">
                    <svg id="remove-img" class="" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20">
                        <path d="M10 0c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm4.8 13.7c.4.4.4 1 0 1.4-.2.2-.5.3-.7.3s-.5-.1-.7-.3l-4.1-4.1-4.1 4.1c-.2.2-.5.3-.7.3s-.5-.1-.7-.3c-.4-.4-.4-1 0-1.4l4.1-4.1-4.1-4.1c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l4.1 4.1 4.1-4.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-4.1 4.1 4.1 4.1z"/>
                    </svg>
                </strong>
            </label>
            <?php if(isset($_POST['submit-tool']) && isset($successTools)) echo '<span class="success-span"> <b>Success</b>: '. $successTools .'</span>'; ?>
            <input type="submit" value="Create tool" id="submit-tool" name="submit-tool">

        </form>
    </div>
    
    <div class="form-container">
    <table class="tools-table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>SVG</th>
                <th>Options</th>
            </tr>
        </thead>
        <tbody>
            <?php 
                if($resultTool->num_rows == 0){
                    $errorToolsDb = "No tools loaded yet!";
                }else{
                    while($row = $resultTool->fetch_assoc()) {

                        echo '<tr class="table-row">';
                        echo '<td>' . $row["id"] . ' </td> ' . 
                                '<td class="capitalize">' . $row["tool_name"] . ' </td> ' . 
                                "<td> <img src='{$row["tool_img_url"]}'> </td> " . 
                                '<td class="tool-options">' .
                                '<form method="POST" action="edit.php">' .
                                    '<input type="hidden" name="id" value="' . $row["id"] . '">' .
                                    '<button class="option-tool" type="submit" name="edit">
                                        <img src="img/icons/edit.svg">   
                                    </button>' .
                                    '<button class="btn-option edit-button" type="submit" name="edit">
                                        Edit
                                    </button>' .
                                '</form>' .
                                '<form method="POST" action="delete.php">' .
                                    '<input type="hidden" name="id" value="' . $row["id"] . '">' .
                                    '<button class="option-tool" type="submit" name="delete">
                                        <img src="img/icons/delete.svg">   
                                    </button>' .
                                    '<button class="btn-option delete-button" type="submit" name="delete">
                                        Delete
                                    </button>' .
                                '</form>' .
                                '</td> ';
                        echo '</tr>';
                    }
                }
            ?>
        </tbody>
    </table>
    </div>
</div>

<?php
    includeTemplate('footer');

?>