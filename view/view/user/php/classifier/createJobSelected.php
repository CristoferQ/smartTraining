<?php

  #script que permite crear un job asociado al proceso de clustering, permite crear un directorio asociado
  #al id del job, mueve el data set del directorio tmp al directorio del job y crea el job en la base de datos

  include("../connection.php");

  #obtenemos los datos desde ajax...
  $algorithm = $_REQUEST['algorithm'];
  $idJob = $_REQUEST['job'];
  $params = $_REQUEST['params'];
  $idUSer = 1;

  $pathMove = "/var/www/html/smartTraining/dataStorage/$idUSer/$idJob/";

  #obtenemos el nombre del documento...
  $query = "select job.nameDataset from job where job.idjob = $idJob";

  #hacemos la ejecucion y obtenemos la respuesta
	$result = mysqli_query($conexion, $query);
	$nameDocument = "";

	while($data = mysqli_fetch_assoc($result)){

	 $nameDocument = $data['nameDataset'];
   break;
	}

  #reemplazamos los espacios de los params por -
  $params = str_replace(" ", "-", $params);

  $command = "python /var/www/html/smartTraining/model/launcherClusteringParams.py $pathMove$nameDocument $idUSer $idJob /var/www/html/smartTraining/dataStorage/ $algorithm $params";
  exec($command);
  $responseValue['command'] = $command;
  $responseValue['job'] = $idJob;

  echo json_encode($responseValue);

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
