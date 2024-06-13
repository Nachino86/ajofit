<?php

class Database {
    
private $servidor = "localhost";
private $baseddatos = "alimentos";
private $usuario = "root";
private $password = "";
private $charset = "utf8";

function conectar() {

    try {
        $conexion = "mysql:host=" . $this->servidor . "; dbname=" . 
        $this->baseddatos . "; charset=" . $this->charset;
        $options = [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_EMULATE_PREPARES => false
        ];

        $pdo = new PDO($conexion, $this->usuario, $this->password, $options);

        return $pdo;
    }catch (PDOException $e) {
        echo 'Error de conexión' . $e->getMessage();
        exit;
     }
    }
}
?>