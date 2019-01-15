<?php

	#script para hacer la carga de informacion desde la base de datos a la tabla
	include ("../connection.php");
	include ("../checkResultDB.php");

	$idjob = $_REQUEST['idjob'];
	$user = 1;

	$query = "delete from job where job.idjob=$idjob";#query job
	$resultado = mysqli_query($conexion, $query);
	$query = "delete from dataSet where dataSet.job=$idjob";#query dataSet
	$resultado = mysqli_query($conexion, $query);

	$response['query'] = $query;
	$response['response'] = verificar_resultado($resultado);

	#eliminamos el directorio
	$command = "rm -rf /var/www/html/smartTraining/dataStorage/$user/$idjob";
	exec($command);

	mysqli_close($conexion);

	echo json_encode($response);
?>
