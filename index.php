<?php
session_start();
if (isset($_SESSION['usuario'])) {
    header("location: students.php");
}
?>  


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Login</title>
    <link rel="stylesheet" href="assets/css/login.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>

    <h1 class="titulo">Please login</h1>
    <div class="principal">
        <div class="wrap">
            <form id="form1" name="form1" method="POST" action="assets/app/validar.php" class="formulario">
                <div class="form-group">
                <input id="enter" type="email" placeholder="User name or email" name="usuario" aria-describedby="emailHelp">
                    <div class="form-group">
                    <input  type="password" placeholder="Password" name="contrasena">
                    </div>
                    <button type="submit" class="btn btn-primary" id="boton">Login</button>
            </form>
        </div>
    </div>
</body>


</html>