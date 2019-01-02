<?php

  include("../connection.php");
  include("../readDocument.php");
  include("../checkResultDB.php");

  #recibimos los parametros...
  $nameJob = $_REQUEST['nameJob'];
  $descJob = $_REQUEST['descJob'];
  $algorithm = $_REQUEST['algorithm'];
  $rf_criterion = $_REQUEST['rf_criterion'];
  $rf_bootstrap = $_REQUEST['rf_bootstrap'];
  $rf_n_estimators = $_REQUEST['rf_n_estimators'];
  $rf_min_samples_split = $_REQUEST['rf_min_samples_split'];
  $rf_min_samples_leaf = $_REQUEST['rf_min_samples_leaf'];

  #obtenemos los datos desde la sesion...
  $idUSer = 1;
  $idJob = time();#sera el id del job...
  $response ['job'] = $idJob;

  $pathRespone = "/var/www/html/smartTraining/dataStorage/";
  #obtenemos el nombre del archivo de entrada...
  $pathData = "/var/www/html/smartTraining/dataStorage/tmp/prediction/documentPrediction.txt";
  $nameDocument = readDocument($pathData);
  $response ['nameFile'] = $nameDocument;

  #hacemos la insercion a la base de datos...
  $query = "insert into job values ($idJob, '$nameJob', '$descJob', NOW(), NOW(), $idUSer, '$nameDocument', 'START', 'PREDICTION')";
  $query2 = "insert into dataSet values ($idJob, '$nameDocument', NOW(), NOW(), $idUSer, 'PREDICTION', $idJob)";
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
    $pathActual = "/var/www/html/smartTraining/dataStorage/tmp/prediction/$nameDocument";
    $pathMove = "/var/www/html/smartTraining/dataStorage/$idUSer/$idJob/";

    $command = "mv $pathActual $pathMove";
    exec($command);

    $params = "$rf_n_estimators-$rf_criterion-$rf_min_samples_split-$rf_min_samples_leaf-$rf_bootstrap";

    //hacemos la ejecucion del script
    $command = "python /var/www/html/smartTraining/model/launcherSupervisedPredictionWeb.py $pathMove$nameDocument $idUSer $idJob $pathRespone 8 $params";
    exec($command);
    $responseFile = "http://localhost/smartTraining/dataStorage/$idUSer/$idJob/responseTraining$idJob.json";
    $response['fileResponse'] = $responseFile;
  }

  echo json_encode($response);

?>