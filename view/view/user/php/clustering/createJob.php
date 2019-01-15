<?php

  #script que permite crear un job asociado al proceso de clustering, permite crear un directorio asociado
  #al id del job, mueve el data set del directorio tmp al directorio del job y crea el job en la base de datos

  include("../connection.php");

  #obtenemos los datos desde ajax...
  $nameJob = $_REQUEST['nameJob'];
  $descJob = $_REQUEST['descJob'];
  $algorithm = $_REQUEST['algorithm'];

  #obtenemos los datos desde la sesion...
  $idUSer = 1;
  $idJob = time();#sera el id del job...

  $response ['response'] = $idJob;


  #obtenemos el nombre del archivo de entrada...
  $pathData = "/var/www/html/smartTraining/dataStorage/tmp/clustering/documentClustering.txt";
  $nameDocument = readDocument($pathData);

  $response ['name'] = $nameDocument;


  #hacemos la insercion a la base de datos...
  $query = "insert into job values ($idJob, '$nameJob', '$descJob', NOW(), NOW(), $idUSer, '$nameDocument', 'START', 'CLUSTERING-FULL')";
  $query2 = "insert into dataSet values ($idJob, '$nameDocument', NOW(), NOW(), $idUSer, 'CLUSTERING-FULL', $idJob)";
  $resultado = mysqli_query($conexion, $query);
  $resultado2 = mysqli_query($conexion, $query2);
  $response = verificar_resultado($resultado);

  $responseValue['response'] = "";

  if ($response == "BIEN"){#movemos el archivo de tmp al path del usuario y ejecutamos el proceso solo si la opcion de algorithm es todos...

    #movemos el archivo...
    //se crea directorio asociado a la licitacion...
    $path = "/var/www/html/smartTraining/dataStorage/$idUSer/$idJob";

    if (!file_exists($path)) {
        mkdir($path, 0777, true);
    }

    #movemos el archivo...
    //movemos el archivo al path de la licitacion...
    $pathActual = "/var/www/html/smartTraining/dataStorage/tmp/clustering/$nameDocument";
    $pathMove = "/var/www/html/smartTraining/dataStorage/$idUSer/$idJob/";

    $command = "mv $pathActual $pathMove";
    exec($command);

    #hacemos la ejecucion del clustering si corresponde...
    $responseValue['response'] = "BIEN";

    #ejecutamos el algoritmo...
    $command = "python /var/www/html/smartTraining/model/launcherClusteringService.py $pathMove$nameDocument $idJob $idUSer /var/www/html/smartTraining/dataStorage/";
    exec($command);
    $responseValue['command'] = $command;
    $responseValue['job'] = $idJob;

    //pregunto si los archivos de salida existen...
    $response1 = file_exists("/var/www/html/smartTraining/dataStorage/$idUSer/$idJob/ResponseProcess_Job_Clustering.csv");

    if ($response1 == true){
        $responseValue['response'] = "BIEN";
    }else{
      $responseValue['response'] = "ERROR";
      $query = "update job set job.statusJob = 'ERROR', job.modifiedJob = NOW() where job.idjob = $idJob";
      $resultado = mysqli_query($conexion, $query);
    }
  }else{
    $responseValue['response'] = "ERROR";
    $query = "update job set job.statusJob = 'ERROR', job.modifiedJob = NOW() where job.idjob = $idJob";
    $resultado = mysqli_query($conexion, $query);
  }

  echo json_encode($responseValue);


  #funcion que permite la lectura de archivos...
  function readDocument($nameFile){
  	$nameDocument = "";
  	//leemos un archivo de texto para capturar el nombre de la imagen...
  	$file = fopen($nameFile, "r");
  	while(!feof($file)) {
  		$nameDocument =  fgets($file);
  	}
  	fclose($file);
    return $nameDocument;
  }

  #funcion que permite verificar el resultado...
  function verificar_resultado($resultado){

    $response = "";
		if (!$resultado){
      $response = "ERROR";
		}else{
			$response ="BIEN";
		}
    return $response;
	}

	function cerrar($conexion){
		mysqli_close($conexion);
	}
?>
