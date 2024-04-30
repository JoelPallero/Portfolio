<?php
require './config/database.php';
$db = connectDb();

session_start();
require './functions.php';

function editData($db, $table, $id, $data) {
    $query = "UPDATE $table SET ";
    foreach ($data as $field => $value) {
        $query .= "$field = '$value', ";
    }
    $query = rtrim($query, ', ');
    $query .= " WHERE id = $id";

    if ($db->query($query) === TRUE) {
        return true;
    } else {
        return false;
    }
}

function deleteData($db, $table, $id) {
    $query = "DELETE FROM $table WHERE id = $id";

    if ($db->query($query) === TRUE) {
        return true;
    } else {
        return false;
    }
}