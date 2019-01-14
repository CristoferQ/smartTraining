<?php

	#script para hacer la carga de informacion desde la base de datos a la tabla
	include ("../connection.php");
	include ("../checkResultDB.php");

	$user=1;
	$iddataSet = $_REQUEST['iddataSet'];
	$job = $_REQUEST['job'];
	$nameDataSet = $_REQUEST['nameDataSet'];

	$query = "delete from dataSet where dataSet.iddataSet = $iddataSet";
	$resultado = mysqli_query($conexion, $query);

	$response['query'] = $query;
	$response['response'] = verificar_resultado($resultado);

	#tambien eliminamos el data set de manera fisica...
	$command = "rm -rf /var/www/html/smartTraining/dataStorage/$user/$job/$nameDataSet";
	$response['command'] = $command;
	exec($command);

	mysqli_close($conexion);

	echo json_encode($response);

?>
