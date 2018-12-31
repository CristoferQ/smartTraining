<?php

  #funcion que permite verificar el resultado...
  function verificar_resultado($resultado){

    $response = "";
    if (!$resultado){
      $response = "ERROR";
    }else{
      $response ="BIEN";
    }
    return $response;
  }
?>
