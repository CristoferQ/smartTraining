<?php

  require_once 'lib/swift_required.php';
  #script que permite procesar si la cuenta de usuario existe o no, en caso de que exista
  #incluimos archivo de conexion a la base de datos...
  include("connection.php");

  #recepcion de parametros...
  $username = $_REQUEST['username'];
  $email = $_REQUEST['email'];

  #evaluamos si el usuario existe, si es asi enviamos el correo en caso contrario notificamos que los datos no son los correctos
  $query = "select COUNT(*) as cantidad  from user where user.nameUser = '$username' AND user.emailUser = '$email'";
  $resultado = mysqli_query($conexion, $query);

  #chequeamos la cantidad de registros...
  $response = 0;
	if (!$resultado){
		die("Error");
	}else{

		while($data = mysqli_fetch_assoc($resultado)){

			$response = $data["cantidad"];
		}
	}

  if ($response == 0){
    #redireccionamos a la ventana de mensaje de error, que el usuario no existe...
    header('Status: 301 Moved Permanently', false, 301);
    header('Location: ../messageReset');
  }else{

    #obtenemos la clave...
    $query = "select user.password from user where user.nameUser = '$username' AND user.emailUser = '$email'";
    $resultado = mysqli_query($conexion, $query);

    #chequeamos la cantidad de registros...
    $password = 0;
  	if (!$resultado){
  		die("Error");
  	}else{

  		while($data = mysqli_fetch_assoc($resultado)){

  			$password = $data["password"];
  		}
  	}

    #enviamos el correo...
    sendMessageEmail($email, $username, $password);

    #redireccionamos a la ventana que contiene el valor del mensaje de correo enviado...
    header('Status: 301 Moved Permanently', false, 301);
    header('Location: ../messageOK');
  }
	mysqli_free_result($resultado);
	mysqli_close($conexion);

  function sendMessageEmail($email, $username, $password){

    $transport = Swift_SmtpTransport::newInstance('smtp.gmail.com', 25, 'tls' )
  	  ->setUsername('smarttrainingserviceteam@gmail.com')
  	  ->setPassword('smart123ewq')
  	  ;
  	$mailer = Swift_Mailer::newInstance($transport);

  	// Creating the message text using fields sent through POST
    $messageText = "Dear $username, your password for SmartTraning Account is $password\n\n";




  	// You can change "A message from Pivot Template Form" to your own subject if you want
  	$message = Swift_Message::newInstance('New Message from SmartTraning page')
  	  ->setFrom(array($email => $username))
  	  ->setTo(array($email => $username))->setBody($messageText);
  //                           ^                    ^
  //       Your email address_/          Your name_/

  	// Send the message or catch an error if it occurs.
  	try{
  		$var = $mailer->send($message);
      header('Status: 301 Moved Permanently', false, 301);
      header('Location: ../messageOK');
  	}
  	catch(Exception $e){
  		$var = $e->getMessage();
      header('Status: 301 Moved Permanently', false, 301);
      header('Location: ../messageOK');
  	}
  	exit;
  }
?>
