<?php

	include("../connection.php");#incluimos la base de datos

	$iduserMOSST = $_REQUEST['iduserMOSST'];
	$status = $_REQUEST['status'];

	$query = "update user set user.statusUser = '$status', user.modifiedUser = NOW() where user.iduser=$iduserMOSST";

	$resultado = mysqli_query($conexion, $query);
	verificar_resultado( $resultado, $iduserMOSST, $status);
	cerrar( $conexion );

	function verificar_resultado($resultado, $iduserMOSST, $status){

		if (!$resultado) $informacion["respuesta"] = "ERROR";
		else{
			$informacion["respuesta"] ="BIEN";

			//enviamos el correo electronico para notificar la accion...
			$command = "python /var/www/html/smartTraining/view/admin/pythonScripts/sendCorreoChangeStatusAccount.py $iduserMOSST $status";

			//preguntamos por el status... si el status es ACCEPTED se crea directorio...
			//se crea directorio asociado a la cuenta de usuario...
			$path = "/var/www/html/smartTraining/dataStorage/".$iduserMOSST;

			if (!file_exists($path)) {
			    mkdir($path, 0777, true);
			}
			exec($command);
		}
		echo json_encode($informacion);
	}

	function cerrar($conexion){
		mysqli_close($conexion);
	}
?>
