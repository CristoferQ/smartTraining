<?php

	include("../connection.php");#incluimos la base de datos

	$idjob = $_REQUEST['idjob'];
	$status = $_REQUEST['status'];

	$query = "update job set job.statusJob = '$status', job.modifiedJob= NOW() where job.idjob = $idjob";

	$resultado = mysqli_query($conexion, $query);
	verificar_resultado( $resultado, $idjob, $status );
	cerrar( $conexion );

	function verificar_resultado($resultado, $idjob, $status){

		if (!$resultado) $informacion["respuesta"] = "ERROR";
		else{
			$informacion["respuesta"] ="BIEN";

			#enviamos el correo notificando el cambio de estado del trabajo
			$command = "python /var/www/html/smartTraining/view/admin/pythonScripts/sendCorreoChangeStatusJob.py $idjob $status";
			exec($command);
		}
		echo json_encode($informacion);
	}

	function cerrar($conexion){
		mysqli_close($conexion);
	}
?>
