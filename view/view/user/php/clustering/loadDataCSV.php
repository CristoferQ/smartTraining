<?php

  /*
    script que permite cargar un archivo csv y leerlo para cargar la respuesta en formato JSON y
    exportarla al documento...
  */
  $job = $_REQUEST['job'];
  $user = 1;
  $nameDocument = "/var/www/html/smartTraining/dataStorage/$user/$job/ResponseProcess_Job_Clustering.csv";
  $row = 0;

  $matrixResponse = [];
  $header = ["id", "algorithm","params","groups","calinski_harabaz_score","silhouette_score"];

  if (($handle = fopen($nameDocument, "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
      $rowData= [];
      $num = count($data);
      if ($row != 0){
        for ($c=0; $c < $num; $c++) {
            $rowData[$header[$c]] = $data[$c];
        }
        $matrixResponse[$row-1] = $rowData;
      }
      $row++;
    }
    fclose($handle);
  }

  $responseData['data'] = $matrixResponse;
  echo json_encode($responseData);
?>
