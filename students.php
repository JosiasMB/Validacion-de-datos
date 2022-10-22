<?php

session_start();
if (!isset($_SESSION['usuario'])){

  echo '
      <script>
        alert("Please login");
        window.location = "index.php";
        </script>
  ';
  session_destroy();
    die();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario Estudiante</title>
    <link href = "assets/css/students.css" rel="stylesheet">
</head>
<body>
    <div class = "container">

    <form class = "form" id="form" action="assets/app/registrarStudent.php" method="$_POST">
        <h1>Formulario Estudiantes</h1>

        <h2>Nombres</h2> 
        <input type="text" class = "textbox" placeholder="Nombres" id="nombre" name="nombre">

        <h2>Apellidos</h2>
        <input type="text" class = "textbox" placeholder="Apellidos" id="apellido" name="apellido">

        <h2>Materia</h2>
        <input type="text" class = "textbox" placeholder="Materia" id="materia" name="materia">

        <h2>Matricula</h2>
        <input type="text" class = "textbox" placeholder="####-####" id="matricula" name="matricula">

        <h2>Nota</h2>
        <input type="text" class = "textbox" placeholder="Nota" id="nota" name="nota">
        <button type="submit" class="btn-registrar" id="registrar">Registrar</button>
        <button  class="btn-limpiar" id="limpiar">Limpiar campos</button>
    </form>
  
    <form method="post">
    <button type="submit" class="salir" id="salir" name="salir">Salir</button>
    </form>
    
    <?php
    if(isset($_POST['salir'])) {
        session_destroy();
        header("location: ./");
        exit;
    }
  ?>



    </div>
<script src="assets/app/script.js"></script>
</body>
</html>