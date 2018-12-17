<?php

	include("../connection.php");#incluimos la base de datos

	$idjob = $_REQUEST['idjob'];
	$status = $_REQUEST['status'];

	$query = "update job set job.statusJob = '$status', job.dateJob= NOW() where job.idjob = $idjob";

	$resultado = mysqli_query($conexion, $query);
	verificar_resultado( $resultado, $idjob, $status);
	cerrar( $conexion );

	function verificar_resultado($resultado){

		if (!$resultado) $informacion["respuesta"] = "ERROR";
		else{
			$informacion["respuesta"] ="BIEN";

			#enviamos el correo notificando el cambio de estado del trabajo
			$command = "python /var/www/html/dashboardAdminMOSSTSite/pythonScripts/sendCorreoChangeStatusJob.py $idjob $status";
			exec($command);
		}
		echo json_encode($informacion);
	}

	function cerrar($conexion){
		mysqli_close($conexion);
	}
?>
