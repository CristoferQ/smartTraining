<?php

  #recibimos los datos del formulario...
  $pos = $_REQUEST['pos'];
  $aawt = $_REQUEST['aawt'];
  $aamt = $_REQUEST['aamt'];
  $sector = $_REQUEST['sector'];

  #hacemos la ejecucion del servicio
  $command = "python /var/www/html/VHLPredictores/service/servicePredictor.py $pos $aawt $aamt $sector";
  $output = array();
  exec($command, $output);

  #evaluamos la respuesta y redirijimos conforme al response...
  if ($output[0] ==-1){

    header('Status: 301 Moved Permanently', false, 301);
    header('Location: ../predictions/servicePrediction/errorValue/');
  }

  if ($output[0] ==1){

    header('Status: 301 Moved Permanently', false, 301);
    header('Location: ../predictions/servicePrediction/mutationNot/');
  }else{

    #obtenemos los resultados...
    $data = explode(":", $output[0]);
    $class = $data[1];
    $predict = $data[3];
    $ydgg = $data[5];
    $mosst = $data[7];

    #hacemos los cambios de clase con respecto a os datos de D y N
    if ($class == 0){
      $class = "D";
    }else{
      $class = "N";
    }

    if ($predict == 0){
      $predict = "D";
    }else{
      $predict = "N";
    }

    $pathResponse = "Location: ../predictions/servicePrediction/result/?class=$class&predict=$predict&YDGG=$ydgg&MOSST=$mosst";
    header('Status: 301 Moved Permanently', false, 301);
    header($pathResponse);
  }
?>
