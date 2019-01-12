<?php

	function sendEmail($nameUser){
		require_once 'lib/swift_required.php';

		$transport = Swift_SmtpTransport::newInstance('smtp.gmail.com', 25, 'tls' )
		  ->setUsername('smarttrainingserviceteam@gmail.com')
		  ->setPassword('smart123ewq')
		  ;

		$mailer = Swift_Mailer::newInstance($transport);

		$body = "A new user has create an account, please check user $nameUser";
		$message = Swift_Message::newInstance('New Message from Smart Training page')
		  ->setFrom(array('smarttrainingserviceteam@gmail.com' => 'Create account'))
		  ->setTo(array('david.medina@cebib.cl' => 'David Medina'))->setBody($body);
		// Send the message or catch an error if it occurs.
		try{
			#echo($mailer->send($message));
			$a = 1;
		}
		catch(Exception $e){
			#echo($e->getMessage());
			$a=0;
		}
		
	}
?>
