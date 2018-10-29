<?php

  #recibimos la key y la opcion
  $key = "ProteinPropens";
  $user = "userDemo";
  $job = "job3";
  $file = "dataCSV.csv";

  #creamos el comando...
  $command = "python /home/dmedina/Escritorio/proyects/smartTraining/model/bin/launcherStatisticalProcess.py 2 $user $job $file $key";
  $output = [];
  exec($command, $output);
  echo $output[0];
?>
