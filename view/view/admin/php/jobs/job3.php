<?php

session_start();
#header("content-type: application/json");

#incluimos la conexion a la base de datos
include ("../connection.php");

$responseFinal = [];
#$idUser = $_REQUEST['data'];
$idUser = 1;
$seriesData = [];
$responseFinal = [];

$series = [];
$series['name'] = "Jobs-User";

$query = "select count(CAST(job.createdJob  as DATE)) as cantidad, CAST(job.createdJob  as DATE) as fecha from job where job.tipo_job = 'CLUSTERING' group by CAST(job.createdJob   as DATE)";
$resultData = mysqli_query($conexion, $query);
$dataValues = [];

$cont=0;
while($data = mysqli_fetch_assoc($resultData)){

  $dataCol = [];
  $fecha = $data['fecha'];
  $cantidad = $data['cantidad'];

  #transformamos la fecha a formato Date.UTC...
  $dataFecha = explode("-", $fecha);
  $fechaReal = "Date.UTC(".$dataFecha[0].",".$dataFecha[1].",".$dataFecha[2].")";


  $dataCol[0] = $fecha;

  $dataCol[1] = (int)$cantidad;

  $dataValues[$cont] = $dataCol;
  $cont++;
}

$series['data'] = $dataValues;

$seriesData[0] = $series;


$responseFinal['valuesData'] = $seriesData;

echo json_encode($responseFinal);
mysqli_free_result($resultData);
mysqli_close($conexion);
?>
