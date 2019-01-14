<?php

  /*
    script que permite cargar un archivo csv y leerlo para cargar la respuesta en formato JSON y
    exportarla al documento...
  */
  $job = $_REQUEST['job'];
  $algorithm = $_REQUEST['algorithm'];
  $user = 1;

  $nameDocument = "/var/www/html/smartTraining/dataStorage/$user/$job/ResponseProcess_Job_Clustering.csv";
  $row = 0;

  $matrixResponse = [];
  $header = ["id", "algorithm","params","groups","calinski_harabaz_score","silhouette_score"];
  $dataAdd = 0;

  if (($handle = fopen($nameDocument, "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
      $rowData= [];
      $num = count($data);
      if ($row != 0){
        for ($c=0; $c < $num; $c++) {

            $rowData[$header[$c]] = $data[$c];
        }
        if ($algorithm == "DBScan"){
          if ($rowData['algorithm'] == "DBSCAN"){
            $matrixResponse[$dataAdd] = $rowData;
            $dataAdd++;
          }
        }

        if ($algorithm == "Mean"){
          if ($rowData['algorithm'] == "MeanShift"){
            $matrixResponse[$dataAdd] = $rowData;
            $dataAdd++;
          }
        }

        if ($algorithm == "Affinity"){
          if ($rowData['algorithm'] == "AffinityPropagation"){
            $matrixResponse[$dataAdd] = $rowData;
            $dataAdd++;
          }
        }

        if ($algorithm == "Kmeans"){
          if ($rowData['algorithm'] == "K-Means"){
            $matrixResponse[$dataAdd] = $rowData;
            $dataAdd++;
          }
        }

        if ($algorithm == "birch"){
          if ($rowData['algorithm'] == "Birch"){
            $matrixResponse[$dataAdd] = $rowData;
            $dataAdd++;
          }
        }

        if ($algorithm == "agglo"){
          if ($rowData['algorithm'] == "AgglomerativeClustering"){
            $matrixResponse[$dataAdd] = $rowData;
            $dataAdd++;
          }
        }
      }
      $row++;
    }
    fclose($handle);
  }

  $responseData['data'] = $matrixResponse;
  echo json_encode($responseData);
?>
