<?php

	header("content-type: application/json");

	#incluimos la conexion a la base de datos
	include ("../connection.php");

	#consulta para obtener la cantidad de usuarios
	$query = "select COUNT(*) as cantidad from user";
	$resultado = mysqli_query($conexion, $query);

	$userMost = 0;

	if (!$resultado){
		die("Error");
	}else{

		while($data = mysqli_fetch_assoc($resultado)){

			$userMost = $data['cantidad'];

		}
	}

	#consulta para obtener la cantidad de instituciones
	$query = "select COUNT(*) as cantidad from institution";
	$resultadoAA = mysqli_query($conexion, $query);

	$institution = 0;

	if (!$resultadoAA){
		die("Error");
	}else{

		while($data = mysqli_fetch_assoc($resultadoAA)){

			$institution = $data['cantidad'];

		}
	}

	#consulta para obtener la cantidad de jobs ejecutados
	$query = "select COUNT(*) as cantidad from job where user=1";
	$resultadoAAA = mysqli_query($conexion, $query);

	$jobs = 0;

	if (!$resultadoAA){
		die("Error");
	}else{

		while($data = mysqli_fetch_assoc($resultadoAAA)){

			$jobs = $data['cantidad'];

		}
	}

	#consulta para obtener la cantidad de jobs en cola
	$query = "select COUNT(*) as cantidad from job where user=1 AND job.tipo_job like '%queue%'";
	$resultadoAAA = mysqli_query($conexion, $query);

	$jobsQueue = 0;

	if (!$resultadoAA){
		die("Error");
	}else{

		while($data = mysqli_fetch_assoc($resultadoAAA)){

			$jobsQueue = $data['cantidad'];

		}
	}

	$responseData = [];
	$responseData['panel1'] = $jobs;
	$responseData['panel2'] = $jobsQueue;
	$responseData['panel3'] = $userMost;
	$responseData['panel4'] = $institution;

	echo json_encode($responseData);

	mysqli_free_result($resultado);
	mysqli_close($conexion);

?>
