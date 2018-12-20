
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">

        <title>Predictors pVHL | Results</title>
        <meta name="description" content="Mutagenesis Objective Search and Selection Tool (MOSST): an algorithm to predict structure-function related mutations in proteins">
        <meta name="keywords" content="MOSST, PESB2, Alvaro Olivera, Universidad de Chile, Mutagenesis Objective Search and Selection Tool (MOSST): an algorithm to predict structure-function related mutations in proteins">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link href="../../../css/flexslider.min.css" rel="stylesheet" type="text/css" media="all"/>
        <link href="../../../css/line-icons.min.css" rel="stylesheet" type="text/css" media="all"/>
        <link href="../../../css/elegant-icons.min.css" rel="stylesheet" type="text/css" media="all"/>
        <link href="../../../css/lightbox.min.css" rel="stylesheet" type="text/css" media="all"/>
        <link href="../../../css/bootstrap.min.css" rel="stylesheet" type="text/css" media="all"/>
        <link href="../../../css/theme-aquatica.css" rel="stylesheet" type="text/css" media="all"/>
        <link href="../../../css/custom.css" rel="stylesheet" type="text/css" media="all"/>
        <!--[if gte IE 9]>
        	<link rel="stylesheet" type="text/css" href="css/ie9.css" />
		<![endif]-->
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,400,300,600,700%7CRaleway:700' rel='stylesheet' type='text/css'>
        <script src="../../../js/modernizr-2.6.2-respond-1.1.0.min.js"></script>
    </head>
    <body>
    	<div class="loader">
    		<div class="spinner">
			  <div class="double-bounce1"></div>
			  <div class="double-bounce2"></div>
			</div>
    	</div>

		<div class="nav-container">
			<nav class="top-bar">
				<div class="container">
				</div><!--end of container-->
			</nav>
		</div>
    <div class="main-container">
			<header class="page-header">
				<div class="background-image-holder parallax-background">
					<img class="background-image" alt="Background Image" src="../../../img/resource/homePage/3.jpg">
				</div>

				<div class="container">
					<div class="row">
						<div class="col-sm-12 text-center">
							<span class="text-white alt-font">Prediction Results</span>
							<h1 class="text-white">Prediction obtained</h1>
							<p class="lead text-white">Evaluation generated with the data delivered</p>
						</div>
					</div><!--end of row-->
				</div><!--end of container-->
			</header>

      <section class="duplicatable-content milestones">

				<div class="container">
					<div class="row">
						<div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center">
							<h1>Results</h1>
						</div>
					</div><!--end of row-->

					<div class="row">
						<div class="col-md-3 col-sm-6 text-center">
							<div class="feature feature-icon-large">
								<i class="icon icon-linegraph"></i>
								<div class="pin-body"></div>
								<div class="pin-head"></div>
								<h5>Real Class</h5>
								<span>
                  <?php
                  echo $_REQUEST['class'];
                   ?>
                </span>
							</div>
						</div><!--end 3 col-->

						<div class="col-md-3 col-sm-6 text-center">
							<div class="feature feature-icon-large">
								<i class="icon icon-linegraph"></i>
								<div class="pin-body"></div>
								<div class="pin-head"></div>
                <h5>Prediction</h5>
								<span>
                  <?php
                  echo $_REQUEST['predict'];
                   ?>
                </span>
							</div>
						</div><!--end 3 col-->

						<div class="col-md-3 col-sm-6 text-center">
							<div class="feature feature-icon-large">
								<i class="icon icon-linegraph"></i>
								<div class="pin-body"></div>
								<div class="pin-head"></div>
                <h5>yDGG</h5>
								<span>
                  <?php
                  echo $_REQUEST['YDGG'];
                   ?>
                </span>
							</div>
						</div><!--end 3 col-->

						<div class="col-md-3 col-sm-6 text-center">
							<div class="feature feature-icon-large">
								<i class="icon icon-linegraph"></i>
								<div class="pin-body"></div>
								<div class="pin-head"></div>
                <h5>MOSST</h5>
								<span>
                  <?php
                  echo $_REQUEST['MOSST'];
                   ?>
                </span>
							</div>
						</div><!--end 3 col-->


					</div><!--end of row-->
				</div>

			</section>
		</div>
    <div class="footer-container">
			<footer class="bg-primary short-2">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<span class="text-white">aolivera (at) ing (dot) uchile (dot) cl</span>
							<span class="text-white">+56 2 2978 4189</span>
							<span class="text-white">Beauchef #851, 7th floor, West Building</span>
						</div>
					</div><!--end for row-->
				</div><!--end of container-->

				<div class="contact-action">
					<div class="align-vertical">
						<i class="icon text-white icon_house"></i>
						<a href="../../" class="text-white"><span class="text-white">Go service <i class="icon arrow_left"></i></span></a>
					</div>
				</div>
			</footer>
		</div>

  		<script src="../../../js/jquery.min.js"></script>
      <script src="../../../js/jquery.plugin.min.js"></script>
      <script src="../../../js/bootstrap.min.js"></script>
      <script src="../../../js/jquery.flexslider-min.js"></script>
      <script src="../../../js/smooth-scroll.min.js"></script>
      <script src="../../../js/skrollr.min.js"></script>
      <script src="../../../js/spectragram.min.js"></script>
      <script src="../../../js/scrollReveal.min.js"></script>
      <script src="../../../js/isotope.min.js"></script>
      <script src="../../../js/twitterFetcher_v10_min.js"></script>
      <script src="../../../js/lightbox.min.js"></script>
      <script src="../../../js/jquery.countdown.min.js"></script>
      <script src="../../../js/scripts.js"></script>
    </body>
</html>
