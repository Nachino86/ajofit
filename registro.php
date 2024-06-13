<?php
include('c.php');

$usuario = $_POST['nick'];
$correo = $_POST['correo'];
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$pass = $_POST['pass'];

$verificacion = mysqli_query($conexion, "SELECT * FROM usuarios WHERE usuario = '$usuario'");

$r = mysqli_num_rows($verificacion);

if($r > 0) {
    echo '
    <script>
    alert("El nombre de usuario ya está siendo utilizado")
    location.href = "registrar.php";
    </script>
    ';
    exit;
}

$insertar = mysqli_query($conexion, "INSERT INTO usuarios(nick, correo, nombre, apellido, pass, rol) VALUES ('$usuario', '$correo', '$nombre', '$apellido', '$pass', 'user')");

if($insertar) {
    echo '
    <script>
    alert("Usuario registrado correctamente");
    location.href = "index.php";
    </script>
    ';
}

mysqli_close($conexion);

?>