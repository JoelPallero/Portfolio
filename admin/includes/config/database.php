<?php
function connectDb(){
    $db = mysqli_connect('localhost', 'root', 'rooteo2024', 'portfolio');

    if(!$db){
        echo "Error de conexión: " . mysqli_connect_error();
        //for not to reveal sensitive data
        exit;
    }

    return $db;
}
