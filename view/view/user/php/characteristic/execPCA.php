<?php

  include("../connection.php");
  include("../readDocument.php");
  include("../checkResultDB.php");

  #recibimos los parametros...
  $nameJob = $_REQUEST['nameJob'];
  $descJob = $_REQUEST['descJob'];
  $kind = $_REQUEST['kindDataSet'];

  $kindData = "";

  if ($kind == 1){
    $kindData = "CLASS";
  }

  if ($kind == 2){
    $kindData = "PREDICTION";
  }

  if ($kind == 3){
    $kindData = "CLUSTERING";
  }

  #obtenemos los datos desde la sesion...
  $idUSer = 1;
  $idJob = time();#sera el id del job...
  $response ['job'] = $idJob;

  $pathRespone = "/var/www/html/smartTraining/dataStorage/";
  #obtenemos el nombre del archivo de entrada...
  $pathData = "/var/www/html/smartTraining/dataStorage/tmp/characteristic/documentCharacteristic.txt";
  $nameDocument = readDocument($pathData);
  $response ['nameFile'] = $nameDocument;

  #hacemos la insercion a la base de datos...
  $query = "insert into job values ($idJob, '$nameJob', '$descJob', NOW(), NOW(), $idUSer, '$nameDocument', 'START', 'PCA')";
  $query2 = "insert into dataSet values ($idJob, '$nameDocument', NOW(), NOW(), $idUSer, '$kindData', $idJob)";
  $resultado = mysqli_query($conexion, $query);
  $resultado2 = mysqli_query($conexion, $query2);
  $requestData = verificar_resultado($resultado);

  $response ['queriesInsert'] = $requestData;

  if ($requestData == "BIEN"){#movemos el archivo de tmp al path del usuario y ejecutamos el proceso solo si la opcion de algorithm es todos...

    #movemos el archivo... creamos directorio
    $path = "/var/www/html/smartTraining/dataStorage/$idUSer/$idJob";

    if (!file_exists($path)) {
        mkdir($path, 0777, true);
    }

    #movemos el archivo...
    //movemos el archivo al path de la licitacion...
    $pathActual = "/var/www/html/smartTraining/dataStorage/tmp/characteristic/$nameDocument";
    $pathMove = "/var/www/html/smartTraining/dataStorage/$idUSer/$idJob/";

    $command = "mv $pathActual $pathMove";
    exec($command);

    //hacemos la ejecucion del script
    $command = "python /var/www/html/smartTraining/model/launcherWebFeatureAnalysis.py $idUSer $idJob $pathMove$nameDocument $pathRespone 3";
    exec($command);
    $responseFile = "http://localhost/smartTraining/dataStorage/$idUSer/$idJob/responseCorrelation$idJob.json";
    $responseData = file_exists("/var/www/html/smartTraining/dataStorage/$idUSer/$idJob/responseCorrelation$idJob.json");

    if ($responseData == true){
      $response['fileResponse'] = $responseFile;
      $response['command'] = $command;
    }else{
      $response['exec'] = "ERROR";

      $query = "update job set job.statusJob = 'ERROR', job.modifiedJob = NOW() where job.idjob = $idJob";
      $resultado = mysqli_query($conexion, $query);
    }

  }else{
    $response['exec'] = "ERROR";
  }

  echo json_encode($response);

?>
