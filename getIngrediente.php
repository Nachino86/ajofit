<?php 
require_once 'login.php';

$con = new Database();
$pdo = $con->conectar();


$data = $_POST["bppal"];     
$sql = "SELECT nombre, calorias, pesoMedio FROM ingredientes WHERE nombre LIKE ? ORDER BY nombre ASC LIMIT 0, 3";


$query = $pdo->prepare($sql);
$query->execute(['%' . $data . '%']);

    $html = "";


    while($row = $query->fetch(PDO::FETCH_ASSOC)) {
        $html .= "<li onclick=\"mostrar('" . $row["nombre"] . "')\">"  . $row["nombre"] . "</li>";
    }
  

    echo json_encode($html, JSON_UNESCAPED_UNICODE);
   
    

        
?>