<?php 

require 'includes/config/database.php';

$db = connectDb();

session_start();
require 'includes/functions.php';

if(isset($_SESSION['user'])) {
    header("Location: admin/login.php");
    exit();
}

//Authentication
if($_SERVER["REQUEST_METHOD"] == "POST") {

    $username = mysqli_real_escape_string($db, $_POST['username']);
    $password = mysqli_real_escape_string($db, $_POST['password']);

    if(empty($username) || empty($password)){
        $error = "Incorrect username or password";
    }    
    
    $query = "SELECT * FROM admin WHERE user = '{$username}'";
    $result = mysqli_query($db, $query);

    var_dump($result->num_rows);

    if($result->num_rows){        
        //get all user data if exist
        $user = mysqli_fetch_assoc($result);

        //lets see if the pass is correct
        $auth = password_verify($password, $user['password']);

        if($auth){
            $_SESSION['user'] = $username;
            $_SESSION['last_activity'] = time();
            header("Location: index.php");
            exit();
        }else{
            $error = "Incorrect username or password";
        }


    }else{
        $error = "The user doesn't exist, or incorrect username or password";
    }
}

if(!isset($_SESSION['user'])) {

    includeTemplate('head', 'Login');
?>

<div class="session-section">
    <div class="container">
        <h2>Login</h2>
        <?php if(isset($error)) echo '<span class="error-span"> <b>Error</b>: '.$error.'</span>'; ?>
        <form class="session-form" method="POST" action="">
            <label for="username">Username:</label><br>
            <input type="text" id="username" name="username" require><br>
            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password" require><br><br>
            <input type="submit" value="Iniciar sesión" class="login">
        </form>
    </div>
</div>


<?php
    includeTemplate('footer');

}
