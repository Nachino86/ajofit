<?php
require_once 'login.php';

$consulta = new Database();

$sentencia = "SELECT nombre, calorias, pmedio FROM ingredientes WHERE nombre = 'Cebolla'";
    $result = mysqli_query($consulta, $sentencia);
    
    $info = array();
        while ($row = mysqli_fetch_assoc($result))
         {
            $info[] = $row;
        }
    
        echo json_encode($info, JSON_UNESCAPED_UNICODE);

?>