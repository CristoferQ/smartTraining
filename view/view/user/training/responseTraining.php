<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Smart Training</title>

    <!--STYLESHEET-->
    <!--=================================================-->

    <!--Open Sans Font [ OPTIONAL ]-->
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css'>


    <!--Bootstrap Stylesheet [ REQUIRED ]-->
    <link href="../css/bootstrap.min.css" rel="stylesheet">


    <!--Nifty Stylesheet [ REQUIRED ]-->
    <link href="../css/nifty.min.css" rel="stylesheet">


    <!--Nifty Premium Icon [ DEMONSTRATION ]-->
    <link href="../css/demo/nifty-demo-icons.min.css" rel="stylesheet">

    <!--Demo [ DEMONSTRATION ]-->
    <link href="../css/demo/nifty-demo.min.css" rel="stylesheet">

    <!--JAVASCRIPT-->
    <!--=================================================-->

    <!--Pace - Page Load Progress Par [OPTIONAL]-->
    <link href="../plugins/pace/pace.min.css" rel="stylesheet">
    <script src="../plugins/pace/pace.min.js"></script>


    <!--jQuery [ REQUIRED ]-->
    <script src="../js/jquery.min.js"></script>


    <!--BootstrapJS [ RECOMMENDED ]-->
    <script src="../js/bootstrap.min.js"></script>


    <!--NiftyJS [ RECOMMENDED ]-->
    <script src="../js/nifty.min.js"></script>


    <!--=================================================-->

    <!--Demo script [ DEMONSTRATION ]-->
    <script src="../js/demo/nifty-demo.min.js"></script>

    <!--Font Awesome [ OPTIONAL ]-->
    <link href="../plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <!--Ion Icons [ OPTIONAL ]-->
    <link href="../plugins/flag-icon-css/css/flag-icon.min.css" rel="stylesheet">
    <!--Ion Icons [ OPTIONAL ]-->
    <link href="../plugins/ionicons/css/ionicons.min.css" rel="stylesheet">
    <!--Themify Icons [ OPTIONAL ]-->
    <link href="../plugins/themify-icons/themify-icons.min.css" rel="stylesheet">
    <!--Premium Line Icons [ OPTIONAL ]-->
    <link href="../premium/icon-sets/icons/line-icons/premium-line-icons.min.css" rel="stylesheet">
    <link href="../plugins/bootstrap-validator/bootstrapValidator.min.css" rel="stylesheet">

    <!--Dropzone [ OPTIONAL ]-->
    <script src="../plugins/dropzone/dropzone.min.js"></script>
    <link href="../plugins/dropzone/dropzone.min.css" rel="stylesheet">
    <script src="../js/formatDropzone.js"></script>
    <script src="../plugins/bootstrap-validator/bootstrapValidator.min.js"></script>

    <!-- script para la carga de datos -->
    <script src="../js/classifier/responseJob.js"></script>

</head>

<!--TIPS-->
<!--You may remove all ID or Class names which contain "demo-", they are only used for demonstration. -->
<body>
    <div id="container" class="effect aside-float aside-bright mainnav-lg">

        <!--NAVBAR-->
        <!--===================================================-->
        <header id="navbar">
            <div id="navbar-container" class="boxed">

                <!--Brand logo & name-->
                <!--================================-->
                <div class="navbar-header">
                    <a href="" class="navbar-brand">
                        <img src="../img/logo.png" alt="Nifty Logo" class="brand-icon">
                        <div class="brand-title">
                            <span class="brand-text">S. Training</span>
                        </div>
                    </a>
                </div>
                <!--================================-->
                <!--End brand logo & name-->


                <!--Navbar Dropdown-->
                <!--================================-->
                <div class="navbar-content clearfix">
                    <ul class="nav navbar-top-links pull-left">

                        <!--Navigation toogle button-->
                        <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                        <li class="tgl-menu-btn">
                            <a class="mainnav-toggle" href="#">
                                <i class="demo-pli-view-list"></i>
                            </a>
                        </li>
                        <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                        <!--End Navigation toogle button-->

                    </ul>
                    <ul class="nav navbar-top-links pull-right">

                        <!--User dropdown-->
                        <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                        <li id="dropdown-user" class="dropdown">
                            <a href="#" data-toggle="dropdown" class="dropdown-toggle text-right">
                                <span class="ic-user pull-right">
                                    <!--<img class="img-circle img-user media-object" src="img/profile-photos/1.png" alt="Profile Picture">-->
                                    <i class="demo-pli-male"></i>
                                </span>
                                <div class="username hidden-xs">Normal User</div>
                            </a>


                            <div class="dropdown-menu dropdown-menu-md dropdown-menu-right panel-default">
                                <!-- Dropdown footer -->
                                <div class="pad-all text-right">
                                    <a href="../" class="btn btn-primary">
                                        <i class="demo-pli-unlock"></i> Salir!
                                    </a>
                                </div>
                            </div>
                        </li>
                        <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                        <!--End user dropdown-->


                    </ul>
                </div>
                <!--================================-->
                <!--End Navbar Dropdown-->

            </div>
        </header>
        <!--===================================================-->
        <!--END NAVBAR-->

        <div class="boxed">

            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">
                <div id="page-head">

                    <!--Page Title-->
                    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                    <div id="page-title">
                        <h1 class="page-header text-overflow">
                          <?php
                            $job = $_GET['job'];
                            echo "Result Process for job $job";
                          ?>
                        </h1>

                    </div>
                    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                    <!--End page title-->
                </div>


                <!--Page content-->
                <!--===================================================-->
              <div id="page-content">
                <div class="row">
                  <div class="col-lg-8 col-md-8 col-sm-8">
                    <div class="panel panel-bordered panel-primary">
                        <div class="panel-heading">
                            <h3 class="panel-title">Summary Process</h3>
                        </div>
                        <div class="panel-body">
                          <table class="table table-hover table-vcenter">
                          <tbody>
                            <tr>
                              <td>
                                <span class="text-main text-semibold">Algorithm</span>
                              </td>
                              <td>
                                <span class="text-main text-semibold algorithm"></span>
                                <br>
                              </td>
                             </tr>

                              <tr>
                                  <td>
                                    <span class="text-main text-semibold">Params</span>
                                  </td>
                                  <td>
                                      <span class="text-main text-semibold params_values"></span>
                                      <br>
                                  </td>
                              </tr>

                              <tr>
                                  <td>
                                    <span class="text-main text-semibold">Validation</span>
                                  </td>
                                  <td>
                                      <span class="text-main text-semibold validation"></span>
                                      <br>
                                  </td>
                              </tr>

                              <tr>
                                  <td>
                                    <span class="text-main text-semibold">Curve ROC</span>
                                  </td>
                                  <td>
                                      <span class="text-main text-semibold curveROC"></span>
                                      <br>
                                  </td>
                              </tr>

                              <tr>
                                  <td>
                                    <span class="text-main text-semibold">Learning Curve</span>
                                  </td>
                                  <td>
                                      <span class="text-main text-semibold learningCurve"></span>
                                      <br>
                                  </td>
                              </tr>

                              <tr>
                                  <td>
                                    <span class="text-main text-semibold">Precision-Recall</span>
                                  </td>
                                  <td>
                                      <span class="text-main text-semibold precision_recall"></span>
                                      <br>
                                  </td>
                              </tr>

                          </tbody>
                      </table>
                        </div>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="panel panel-bordered panel-primary">
                        <div class="panel-heading">
                            <h3 class="panel-title">Performance for Training</h3>
                        </div>
                        <div class="panel-body">
                          <table class="table table-hover table-vcenter">
                          <tbody>
                            <tr>
                              <td>
                                <span class="text-main text-semibold">Precision</span>
                              </td>
                              <td>
                                <span class="text-main text-semibold precision"></span>
                                <br>
                              </td>
                             </tr>

                              <tr>
                                  <td>
                                    <span class="text-main text-semibold">Accuracy</span>
                                  </td>
                                  <td>
                                      <span class="text-main text-semibold accuracy"></span>
                                      <br>
                                  </td>
                              </tr>

                              <tr>
                                  <td>
                                    <span class="text-main text-semibold">Recall</span>
                                  </td>
                                  <td>
                                      <span class="text-main text-semibold recall"></span>
                                      <br>
                                  </td>
                              </tr>

                              <tr>
                                  <td>
                                    <span class="text-main text-semibold">F1 Score</span>
                                  </td>
                                  <td>
                                      <span class="text-main text-semibold f1_score"></span>
                                      <br>
                                  </td>
                              </tr>

                              <tr>
                                  <td>
                                    <span class="text-main text-semibold">FBeta Score</span>
                                  </td>
                                  <td>
                                      <span class="text-main text-semibold fbeta"></span>
                                      <br>
                                  </td>
                              </tr>

                              <tr>
                                  <td>
                                    <span class="text-main text-semibold">Negloss</span>
                                  </td>
                                  <td>
                                      <span class="text-main text-semibold negloss"></span>
                                      <br>
                                  </td>
                              </tr>

                          </tbody>
                      </table>
                        </div>
                    </div>
                  </div>
                </div>

                <div class="row">

                  <div class="col-lg-3 col-md-3 col-sm-3">
                    <div class="panel panel-bordered panel-primary">
                        <div class="panel-heading">
                            <h3 class="panel-title">Confusion Matrix</h3>
                        </div>
                        <div class="panel-body">
                          <?php

                            $job=$_GET['job'];
                            echo "<a href=\"../../../dataStorage/1/$job/confusionMatrix_$job.svg\">";
                            echo "<img src=\"../../../dataStorage/1/$job/confusionMatrix_$job.svg\" alt=\"Confusion Matrix not available\" class=\"img-thumbnail\">";
                            echo "</a>";

                          ?>
                        </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-3">
                    <div class="panel panel-bordered panel-primary">
                        <div class="panel-heading">
                            <h3 class="panel-title">ROC Curve</h3>
                        </div>
                        <div class="panel-body">
                          <?php
                            $job=$_GET['job'];
                            echo "<a href=\"../../../dataStorage/1/$job/curveRoc_$job.svg\">";
                            echo "<img src=\"../../../dataStorage/1/$job/curveRoc_$job.svg\" alt=\"Curve ROC not available\" class=\"img-thumbnail\">";
                            echo "</a>";
                          ?>
                        </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-3">
                    <div class="panel panel-bordered panel-primary">
                        <div class="panel-heading">
                            <h3 class="panel-title">Learning Curve</h3>
                        </div>
                        <div class="panel-body">
                          <?php
                            $job=$_GET['job'];
                            echo "<a href=\"../../../dataStorage/1/$job/curveLearning_$job.svg\">";
                            echo "<img src=\"../../../dataStorage/1/$job/curveLearning_$job.svg\" alt=\"Learning Curve not available\" class=\"img-thumbnail\">";
                            echo "</a>";
                          ?>
                        </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-3">
                    <div class="panel panel-bordered panel-primary">
                        <div class="panel-heading">
                            <h3 class="panel-title">Precision-Recall Curve</h3>
                        </div>
                        <div class="panel-body">
                          <?php

                            $job=$_GET['job'];
                            echo "<a href=\"../../../dataStorage/1/$job/precision_recall_curve_$job.svg\">";
                            echo "<img src=\"../../../dataStorage/1/$job/precision_recall_curve_$job.svg\" alt=\"Precision Recall curve not available\" class=\"img-thumbnail\">";
                            echo "</a>";
                          ?>
                        </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="panel panel-bordered panel-primary">
                        <div class="panel-heading">
                            <h3 class="panel-title algorithmValue"></h3>
                        </div>
                        <div class="panel-body">
                          <div class="explanation">
                          </div>
                        </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <!--MAIN NAVIGATION-->
            <!--===================================================-->
            <nav id="mainnav-container">
                <div id="mainnav">

                    <!--Menu-->
                    <!--================================-->
                    <div id="mainnav-menu-wrap">
                        <div class="nano">
                            <div class="nano-content">

                                <!--Profile Widget-->
                                <!--================================-->
                                <div id="mainnav-profile" class="mainnav-profile">
                                    <div class="profile-wrap text-center">
                                        <div class="pad-btm">
                                            <img class="img-circle img-md" src="../img/profile-photos/11.png" alt="Profile Picture">
                                        </div>
                                        <a href="#profile-nav" class="box-block" data-toggle="collapse" aria-expanded="false">
                                            <span class="pull-right dropdown-toggle">
                                                <i class="dropdown-caret"></i>
                                            </span>
                                            <p class="mnp-name">Normal User</p>
                                        </a>
                                    </div>
                                    <div id="profile-nav" class="collapse list-group bg-trans">

                                        <a href="../" class="list-group-item">
                                            <i class="demo-pli-unlock icon-lg icon-fw"></i> Salir
                                        </a>
                                    </div>
                                </div>

                                <ul id="mainnav-menu" class="list-group">

                                  <li class="list-header">My Panel</li>

                                  <li>
          						                <a href="../profile/">
          						                    <i class="fa fa fa-user"></i>
          						                    <span class="menu-title">My Profile</span><i class="arrow"></i>
          						                </a>

          						            </li>

                                  <li>
          						                <a href="../dataSet/">
          						                    <i class="fa fa fa-file"></i>
          						                    <span class="menu-title">My Data Sets</span><i class="arrow"></i>
          						                </a>

          						            </li>

                                  <li>
          						                <a href="../jobs">
          						                    <i class="fa fa fa-archive"></i>
          						                    <span class="menu-title">My Jobs</span><i class="arrow"></i>
          						                </a>

          						            </li>

																	<li class="list-header">Process Options</li>

                                  <li>
          						                <a href="../statistic">
          						                    <i class="fa fa fa-pie-chart"></i>
          						                    <span class="menu-title">Statistic Process</span><i class="arrow"></i>
          						                </a>

          						            </li>

                                  <li>
          						                <a href="../characteristic">
          						                    <i class="fa fa fa-bar-chart"></i>
          						                    <span class="menu-title">Characteristic Analysis</span><i class="arrow"></i>
          						                </a>

          						            </li>

                                  <li class="list-header">Machine Learning Options</li>

                                  <li>
          						                <a href="../clustering">
          						                    <i class="fa fa fa-search"></i>
          						                    <span class="menu-title">Clustering Process</span><i class="arrow"></i>
          						                </a>

          						            </li>

                                  <li>
          						                <a href="../training">
          						                    <i class="fa fa fa-graduation-cap"></i>
          						                    <span class="menu-title">Supervised Learning: Classification</span><i class="arrow"></i>
          						                </a>

          						            </li>

                                  <li>
          						                <a href="../prediction">
          						                    <i class="fa fa fa-line-chart"></i>
          						                    <span class="menu-title">Supervised Learning: Prediction</span><i class="arrow"></i>
          						                </a>

          						            </li>



						            </ul>

                    <!--================================-->
                    <!--End menu-->

                </div>
            </nav>
            <!--===================================================-->
            <!--END MAIN NAVIGATION-->

        </div>



        <!-- FOOTER -->
        <!--===================================================-->
        <footer id="footer">

            <!-- Visible when footer positions are fixed -->
            <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
            <div class="show-fixed pad-rgt pull-right">
                You have <a href="#" class="text-main"><span class="badge badge-danger">3</span> pending action.</a>
            </div>






            <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
            <!-- Remove the class "show-fixed" and "hide-fixed" to make the content always appears. -->
            <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

            <p class="pad-lft">&#0169; 2018 Developed by <a href="http://pesb2.cl"> PESB2 Group </a>Centre for Biothecnology and Bioengineering, FCFM, University of Chile</p>



        </footer>
        <!--===================================================-->
        <!-- END FOOTER -->


        <!-- SCROLL PAGE BUTTON -->
        <!--===================================================-->
        <button class="scroll-top btn">
            <i class="pci-chevron chevron-up"></i>
        </button>
        <!--===================================================-->



    </div>
    <!--===================================================-->
    <!-- END OF CONTAINER -->

   <!-- modal section -->
</body>
</html>
