<?php

	header("content-type: application/json");

	#incluimos la conexion a la base de datos
	include ("../connection.php");

	#consulta para obtener la cantidad de usuarios
	$query = "select COUNT(*) as cantidad from user where user.statusUser='ACCEPTED'";
	$resultado = mysqli_query($conexion, $query);

	$userMost = 0;

	if (!$resultado){
		die("Error");
	}else{

		while($data = mysqli_fetch_assoc($resultado)){

			$userMost = $data['cantidad'];

		}
	}

	#consulta para obtener la cantidad de paises
	$query = "select COUNT(*) as cantidad from country";
	$resultadoA = mysqli_query($conexion, $query);

	$countries = 0;

	if (!$resultadoA){
		die("Error");
	}else{

		while($data = mysqli_fetch_assoc($resultadoA)){

			$countries = $data['cantidad'];

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

	#consulta para obtener la cantidad de jobs
	$query = "select COUNT(*) as cantidad from job";
	$resultadoAAA = mysqli_query($conexion, $query);

	$jobs = 0;

	if (!$resultadoAA){
		die("Error");
	}else{

		while($data = mysqli_fetch_assoc($resultadoAAA)){

			$jobs = $data['cantidad'];

		}
	}

	$responseData = [];
	$responseData['userMost'] = $userMost;
	$responseData['countries'] = $countries;
	$responseData['institution'] = $institution;
	$responseData['jobs'] = $jobs;

	echo json_encode($responseData);

	mysqli_free_result($resultado);
	mysqli_close($conexion);

?>
