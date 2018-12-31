<?php

	session_start();

	#script para hacer la carga de informacion desde la base de datos a la tabla
	include ("../connection.php");

	#$idUser = $_REQUEST['data'];
	$idUser = 1;
	$query = "select * from user join institution on (user.institution = institution.idinstitution) join country on (country.idcountry = institution.country) where user.iduser = $idUser";
	$resultado = mysqli_query($conexion, $query);

	$response = [];
	if (!$resultado){
		die("Error");
	}else{

		while($data = mysqli_fetch_assoc($resultado)){

			$response['nameUser'] = $data['nameUser'];
			$response['fullName'] = $data['fullName'];
			$response['emailUser'] = $data['emailUser'];
			$response['nameInstitution'] = $data['nameInstitution'];
			$response['name'] = $data['name'];
		}

		echo json_encode($response);

	}

	mysqli_free_result($resultado);
	mysqli_close($conexion);
?>
