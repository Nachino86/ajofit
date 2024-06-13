<!DOCTYPE html>
<html lang="es">

<head>
    <title>Index</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div id="contenedor">
        <div id="encabezado"> 
            <div class="enc-elem"><a href="registrar.php">Regístrate</a></div>
            <div class="enc-elem"> | </div>
            <div class="enc-elem"><a href="session.php"> Inicia Sesión </a></div>
        </div>
        <div id="calcuapp">
            <div class="titulo">
                <h1> AjoFit <img id="logo" src="img/ajito.png" alt="Logo Calcuapp"></h1>
                
            </div>
            <div id="barrita">    
                    <input type="text" id="bppal" name="bppal" autocomplete="off" placeholder="Introduce un ingrediente... ">
                    <ul id="lista"></ul>
                </div>
           
                <table id="pizarra"></table>
                <button id="mostrar" onclick="calcular()"> Calcular </button>
                <div id="resultado"></div>

            

        </div>
    </div>



        <script src="app.js">  </script>

</body>
</html>