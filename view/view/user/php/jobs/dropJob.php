<?php

	#script para hacer la carga de informacion desde la base de datos a la tabla
	include ("../connection.php");
	include ("../checkResultDB.php");

	$idjob = $_REQUEST['idjob'];

	$query = "delete from job where job.idjob=$idjob";
	$resultado = mysqli_query($conexion, $query);

	$response['query'] = $query;
	$response['response'] = verificar_resultado($resultado);

	mysqli_free_result($resultado);
	mysqli_close($conexion);

	echo json_encode($response);
?>
