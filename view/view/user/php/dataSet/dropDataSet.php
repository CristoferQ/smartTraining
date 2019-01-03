<?php

	#script para hacer la carga de informacion desde la base de datos a la tabla
	include ("../connection.php");
	include ("../checkResultDB.php");

	$iddataSet = $_REQUEST['iddataSet'];

	$query = "delete from dataSet where dataSet.iddataSet = $iddataSet";
	$resultado = mysqli_query($conexion, $query);

	$response['query'] = $query;
	$response['response'] = verificar_resultado($resultado);

	mysqli_free_result($resultado);
	mysqli_close($conexion);

	echo json_encode($response);
?>
