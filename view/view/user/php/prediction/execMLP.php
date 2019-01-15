<?php

  include("../connection.php");
  include("../readDocument.php");
  include("../checkResultDB.php");

  #recibimos los parametros...
  $nameJob = $_REQUEST['nameJob'];
  $descJob = $_REQUEST['descJob'];
  $algorithm = $_REQUEST['algorithm'];

  $MLP_activation= $_REQUEST['MLP_activation'];
  $MLP_solver= $_REQUEST['MLP_solver'];
  $MLP_alpha= $_REQUEST['MLP_alpha'];
  $MLP_learning_rate= $_REQUEST['MLP_learning_rate'];
  $MLP_hidden_layer_sizes1= $_REQUEST['MLP_hidden_layer_sizes1'];
  $MLP_hidden_layer_sizes2= $_REQUEST['MLP_hidden_layer_sizes2'];
  $MLP_hidden_layer_sizes3= $_REQUEST['MLP_hidden_layer_sizes3'];
  $MLP_max_iter = $_REQUEST['MLP_max_iter'];
  $MLP_shuffle= $_REQUEST['MLP_shuffle'];

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

    $params = "$MLP_activation-$MLP_solver-$MLP_learning_rate-$MLP_hidden_layer_sizes1-$MLP_hidden_layer_sizes2-$MLP_hidden_layer_sizes3-$MLP_alpha-$MLP_max_iter-$MLP_shuffle";

    //hacemos la ejecucion del script
    $command = "python /var/www/html/smartTraining/model/launcherSupervisedPredictionWeb.py $pathMove$nameDocument $idUSer $idJob $pathRespone 6 $params";
    exec($command);

    //preguntamos si este archivo existe...
    $responseFile = "http://localhost/smartTraining/dataStorage/$idUSer/$idJob/responseTraining$idJob.json";
    $responseData = file_exists("/var/www/html/smartTraining/dataStorage/$idUSer/$idJob/responseTraining$idJob.json");

    if ($responseData == true){
      $response['fileResponse'] = $responseFile;
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
