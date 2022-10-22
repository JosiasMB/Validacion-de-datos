<?php

session_start();
include_once 'conectar.php';

$usuario = $_POST['usuario'];
$contrasena = $_POST['contrasena'];
$contrasenaHash = hash('sha512', $contrasena);


$validar_login = mysqli_query($conexion, "SELECT * FROM teachers where 
Correo='$usuario' and Passw='$contrasenaHash'");

if (mysqli_num_rows($validar_login) > 0){
    $_SESSION['usuario']=$usuario;
    header("location: ../../students.php");
    exit;

}else {
       echo '
    <script>
            alert("Username or Password incorrect!");
            window.location = "../../";
    </script>
';
    exit;
}

?>
