<?php

  #script que permite procesar si la cuenta de usuario existe o no, en caso de que exista
  #incluimos archivo de conexion a la base de datos...
  include("connection.php");
  include("mail.php");

  #recepcion de parametros...
  $fullname = $_REQUEST['fullname'];
  $email = $_REQUEST['email'];
  $username = $_REQUEST['username'];
  $institution = $_REQUEST['institution'];
  $country = $_REQUEST['country'];
  $password = $_REQUEST['password'];

  $dataResponse = "-";
  $iduser = time();

  #formamos la consulta para evaluar si el pais existe...
  $query = "select count(*) as cantidad from country where country.name = '$country'";
  $resultado = mysqli_query($conexion, $query);
  $response = 0;
	if (!$resultado){
		$dataResponse = "ERROR";
	}else{
		while($data = mysqli_fetch_assoc($resultado)){
			$response = $data["cantidad"];
		}
	}

  #preguntamos por el valor de response...
  if ($response == 1){#existe...
    #hacemos la consulta por la institucion...
    $query = "select count(*) as cantidad from institution where institution.nameInstitution = '$institution'";
    $resultado = mysqli_query($conexion, $query);
    $responseValue = 0;
  	if (!$resultado){
  		$dataResponse = "ERROR";
  	}else{

  		while($data = mysqli_fetch_assoc($resultado)){

  			$responseValue = $data["cantidad"];
  		}
  	}

    #preguntamos por el valor de la consulta....
    if ($responseValue == 0){
      #obtenemos el id del pais para hacer la insercion de la institution...
      $query = "select * from country where country.name = '$country'";
      $resultado = mysqli_query($conexion, $query);
      $idCountryInfo = 0;
    	if (!$resultado){
    		$dataResponse = "ERROR";
    	}else{
    		while($data = mysqli_fetch_assoc($resultado)){
    			$idCountryInfo = $data["idcountry"];
    		}
    	}
      $idInstitution = time();
      #hacemos la insercion de la institution
      $query = "insert into institution values ($idInstitution, '$institution', NOW(), NOW(), $idCountryInfo)";
      $resultado = mysqli_query($conexion, $query);
      echo $query;
      echo "<br>";
      #hacemos la insercion del usuario...
      $query = "insert into user values ($iduser, '$username', '$password', '$email', 'WAITING', NOW(), NOW(), $idInstitution, '$fullname')";
      $resultado = mysqli_query($conexion, $query);
      
      $dataResponse = "OK";
    }else{

      #chequeamos si el usuario existe...
      $query = "select COUNT(*) as cantidad from user where user.nameUser = '$username'";
      $resultado = mysqli_query($conexion, $query);

      $valueUser = 0;
      if (!$resultado){
    		$dataResponse = "ERROR";
    	}else{

    		while($data = mysqli_fetch_assoc($resultado)){

    			$valueUser = $data["cantidad"];
    		}
    	}

      #preguntamos por el valor de $valueUser....
      if ($valueUser == 0){

        #hacemos la insercion del usuario, obtenemos la institucion...
        $query = "select * from institution where institution.nameInstitution = '$institution'";
        $resultado = mysqli_query($conexion, $query);

        $idInstitutionValues = 0;
        if (!$resultado){
      		$dataResponse = "ERROR";
      	}else{

      		while($data = mysqli_fetch_assoc($resultado)){

      			$idInstitutionValues = $data["idinstitution"];
      		}
      	}
        #hacemos la insercion del usuario...
        $query = "insert into user values ($iduser, '$username', '$password', '$email', 'WAITING', NOW(), NOW(), $idInstitutionValues, '$fullname')";
        $resultado = mysqli_query($conexion, $query);
        

        $dataResponse = "OK";
      }else{
        $dataResponse = "USER-EXIST";
      }
    }
  }else{

    #hacemos la insercion del country y de la insitution...
    $idCountry = time();
    $query = "insert into country values ($idCountry, '$country', NOW(), NOW())";
    $resultado = mysqli_query($conexion, $query);
    #hacemos la insercion de la institution...
    $query = "insert into institution values ($idCountry, '$institution', NOW(), NOW(), $idCountry)";
    $resultado = mysqli_query($conexion, $query);
    #hacemos la insercion del usuario...
    $query = "insert into user values ($iduser, '$username', '$password', '$email', 'WAITING', NOW(), NOW(), $idCountry, '$fullname')";
    $resultado = mysqli_query($conexion, $query);
    
    $dataResponse = "OK";
  }

  #evaluamos donde hacemos el redireccionamiento...
  if ($dataResponse == "ERROR"){
    header('Status: 301 Moved Permanently', false, 301);
    header('Location: ../errorAccount/');
  }else{

    if ($dataResponse == "OK"){
      header('Status: 301 Moved Permanently', false, 301);
      header('Location: ../okAccount/');
    }else{
      header('Status: 301 Moved Permanently', false, 301);
      header('Location: ../messageAccount/');
    }
  }

	mysqli_free_result($resultado);
	mysqli_close($conexion);
?>
