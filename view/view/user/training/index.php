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


    <!--DataTables [ OPTIONAL ]-->
    <link href="../plugins/datatables/media/css/dataTables.bootstrap.css" rel="stylesheet">
    <link href="../plugins/datatables/extensions/Responsive/css/responsive.dataTables.min.css" rel="stylesheet">

    <!--Bootstrap Validator [ OPTIONAL ]-->
    <link href="../plugins/bootstrap-validator/bootstrapValidator.min.css" rel="stylesheet">
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

    <!--Dropzone [ OPTIONAL ]-->
    <script src="../plugins/dropzone/dropzone.min.js"></script>
    <link href="../plugins/dropzone/dropzone.min.css" rel="stylesheet">
    <script src="../js/formatDropzone.js"></script>

    <!--=================================================-->

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
    <link href="../plugins/spinkit/css/spinkit.min.css" rel="stylesheet">
    <script src="../plugins/bootstrap-validator/bootstrapValidator.min.js"></script>


    <!-- script para la carga de datos -->
    <script src="../js/classifier/createJob.js"></script>

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
                    <a href="../" class="navbar-brand">
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
                        <h1 class="page-header text-overflow">Supervised Learning: Classification Process</h1>

                    </div>
                    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                    <!--End page title-->
                </div>


                <!--Page content-->
                <!--===================================================-->
              <div id="page-content">
                <div class="row">
                  <div class="col-sm-12 col-md-12">

                    <div class="panel">

                      <div class="panel-title">
                        Complete the form
                      </div>
                      <div class="panel-body">
                        <form id="frmAgregarFile" action="../php/uploadFileClassification.php" class="dropzone" >
                          <div class="dz-default dz-message">
                            <div class="dz-icon">
                              <i class="demo-pli-upload-to-cloud icon-5x"></i>
                            </div>
                            <div>
                              <span class="dz-text">Drop files to upload</span>
                              <p class="text-sm text-muted">or click to pick manually</p>
                            </div>
                          </div>
                          <div class="fallback">
                            <input name="file" type="file" multiple>
                          </div>
                        </form>

                        <hr>

                        <form id="initNewJob" method="post" class="form-horizontal form-label-left">

                          <div class="form-group">
                             <label class="col-sm-3 control-label">Name Job*</label>
                              <div class="col-sm-5">
                                  <input type="text" class="form-control" id="nameJob" name="nameJob" />
                              </div>
                          </div>

                          <div class="form-group">
                             <label class="col-sm-3 control-label">Description Job*</label>
                              <div class="col-sm-5">
                                  <input type="text" class="form-control" id="descJob" name="descJob" />
                              </div>
                          </div>

                          <div class="form-group">
                             <label class="col-sm-3 control-label">Validation Option*</label>
                              <div class="col-sm-5">
                                <select id="validationOption" class="form-control">
                                  <option>10</option>
                                  <option>9</option>
                                  <option>8</option>
                                  <option>7</option>
                                  <option>6</option>
                                  <option>5</option>
                                  <option>4</option>
                                  <option>3</option>
                                  <option>2</option>
                                </select>
                              </div>
                          </div>

                          <div class="form-group">
              							<label class="control-label col-md-3 col-sm-3 col-xs-12" for="algorithm">Algorithm <span class="required">*</span>
              							</label>

                            <div class="col-md-5 col-sm-5 col-xs-12">
                              <select id="algorithm" class="form-control">

                                <option value="2">AdaBoostClassifier</option>
                                <option value="3">BaggingClassifier</option>
                                <option value="4">BernoulliNB</option>
                                <option value="5">DecisionTree</option>
                                <option value="6">GaussianNB</option>
                                <option value="7">GradientBoostingClassifier</option>
                                <option value="8">KNeighborsClassifier</option>
                                <option value="9">MLPClassifier</option>
                                <option value="10">NuSVC</option>
                                <option value="11">RandomForestClassifier</option>
                                <option value="12">SVC</option>
                              </select>
                            </div>
                          </div>

                          <div class="form-group" id="SVC1" style="display:none;">
              							<label class="control-label col-md-3 col-sm-3 col-xs-12" for="SVC_kernel">Kernel Option
              							</label>

                            <div class="col-md-5 col-sm-5 col-xs-12">
                              <select id="SVC_kernel" class="form-control">
                                <option>Default</option>
                                <option>rbf</option>
                                <option>linear</option>
                                <option>poly</option>
                                <option>sigmoid</option>
                                <option>precomputed</option>
                              </select>
                            </div>
                          </div>

                          <div class="form-group" id="SVC2" style="display:none;">
              							<label class="control-label col-md-3 col-sm-3 col-xs-12" for="SVC_degree">Degree Value
              							</label>

                            <div class="col-sm-5">
                                <input type="text" class="form-control" id="SVC_degree" name="SVC_degree" placeholder="Degree of the polynomial kernel function (‘poly’). Ignored by all other kernels. Default 3.0" />
                            </div>

                          </div>

                          <div class="form-group" id="SVC3" style="display:none;">
              							<label class="control-label col-md-3 col-sm-3 col-xs-12" for="SVC_gamma">Gamma Value
              							</label>

                            <div class="col-sm-5">
                                <input type="text" class="form-control" id="SVC_gamma" name="SVC_gamma" placeholder="Kernel coefficient for ‘rbf’, ‘poly’ and ‘sigmoid’. Default: estimated value" />
                            </div>

                          </div>

                          <div class="form-group" id="SVC4" style="display:none;">
              							<label class="control-label col-md-3 col-sm-3 col-xs-12" for="SVC_C_value">C Value
              							</label>

                            <div class="col-sm-5">
                                <input type="text" class="form-control" id="SVC_C_value" name="SVC_C_value" placeholder="C Value penalty data, default 1" />
                            </div>

                          </div>


                          <div class="form-group" id="NuSVC1" style="display:none;">
              							<label class="control-label col-md-3 col-sm-3 col-xs-12" for="NuSVC_kernel">Kernel Option
              							</label>

                            <div class="col-md-5 col-sm-5 col-xs-12">
                              <select id="NuSVC_kernel" class="form-control">
                                <option>Default</option>
                                <option>rbf</option>
                                <option>linear</option>
                                <option>poly</option>
                                <option>sigmoid</option>
                                <option>precomputed</option>
                              </select>
                            </div>
                          </div>

                          <div class="form-group" id="NuSVC2" style="display:none;">
              							<label class="control-label col-md-3 col-sm-3 col-xs-12" for="NuSVC_nu">Nu Value
              							</label>

                            <div class="col-sm-5">
                                <input type="text" class="form-control" id="NuSVC_nu" name="NuSVC_nu" placeholder="An upper bound on the fraction of training errors [0,1], Defaul 0.5" />
                            </div>

                          </div>

                          <div class="form-group" id="NuSVC3" style="display:none;">
              							<label class="control-label col-md-3 col-sm-3 col-xs-12" for="NuSVC_degree">Degree Value
              							</label>

                            <div class="col-sm-5">
                                <input type="text" class="form-control" id="NuSVC_degree" name="NuSVC_degree" placeholder="Degree of the polynomial kernel function (‘poly’). Ignored by all other kernels. Default 3.0" />
                            </div>

                          </div>

                          <div class="form-group" id="NuSVC4" style="display:none;">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="NuSVC_gamma">Gamma Value
                            </label>

                            <div class="col-sm-5">
                                <input type="text" class="form-control" id="NuSVC_gamma" name="NuSVC_gamma" placeholder="Kernel coefficient for ‘rbf’, ‘poly’ and ‘sigmoid’." />
                            </div>

                          </div>

                          <div class="form-group" id="AdaBoostClassifier1">
              							<label class="control-label col-md-3 col-sm-3 col-xs-12" for="AdaBoost_n_estimators">N Estimators
              							</label>

                            <div class="col-sm-5">
                                <input type="text" class="form-control" id="AdaBoost_n_estimators" name="AdaBoost_n_estimators" placeholder="The maximum number of estimators at which boosting is terminated. Default 50" />
                            </div>

                          </div>

                          <div class="form-group" id="AdaBoostClassifier2">
              							<label class="control-label col-md-3 col-sm-3 col-xs-12" for="AdaBoost_algorithm">Algorithm
              							</label>

                            <div class="col-md-5 col-sm-5 col-xs-12">
                              <select id="AdaBoost_algorithm" class="form-control">
                                <option>Default</option>
                                <option>SAMME</option>
                                <option>SAMME.R</option>

                              </select>
                            </div>
                          </div>

                          <div class="form-group" id="BaggingClassifier1" style="display:none;">
              							<label class="control-label col-md-3 col-sm-3 col-xs-12" for="bagging_n_estimators">N Estimators
              							</label>

                            <div class="col-sm-5">
                                <input type="text" class="form-control" id="bagging_n_estimators" name="bagging_n_estimators" placeholder="The number of base estimators in the ensemble. Default 10" />
                            </div>

                          </div>

                          <div class="form-group" id="BaggingClassifier2" style="display:none;">
              							<label class="control-label col-md-3 col-sm-3 col-xs-12" for="bootstrap_bootstrap">Bootstrap
              							</label>

                            <div class="col-md-5 col-sm-5 col-xs-12">
                              <select id="bootstrap_bootstrap" class="form-control">
                                <option>Default</option>
                                <option>True</option>
                                <option>False</option>

                              </select>
                            </div>
                          </div>

                          <div class="form-group" id="DecisionTree1" style="display:none;">
              							<label class="control-label col-md-3 col-sm-3 col-xs-12" for="DecisionTree_criterion">Criterion
              							</label>

                            <div class="col-md-5 col-sm-5 col-xs-12">
                              <select id="DecisionTree_criterion" class="form-control">
                                <option>Default</option>
                                <option>Gini</option>
                                <option>Entropy</option>

                              </select>
                            </div>
                          </div>

                          <div class="form-group" id="DecisionTree2" style="display:none;">
              							<label class="control-label col-md-3 col-sm-3 col-xs-12" for="DecisionTree_splitter">Splitter
              							</label>

                            <div class="col-md-5 col-sm-5 col-xs-12">
                              <select id="DecisionTree_splitter" class="form-control">
                                <option>Default</option>
                                <option>Best</option>
                                <option>Random</option>
                              </select>
                            </div>
                          </div>

                          <div class="form-group" id="GradientBoostingClassifier1" style="display:none;">
              							<label class="control-label col-md-3 col-sm-3 col-xs-12" for="gradient_loss">Loss
              							</label>

                            <div class="col-md-5 col-sm-5 col-xs-12">
                              <select id="gradient_loss" class="form-control">
                                <option>Default</option>
                                <option>deviance</option>
                                <option>exponential</option>
                              </select>
                            </div>
                          </div>

                          <div class="form-group" id="GradientBoostingClassifier2" style="display:none;">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="gradient_n_estimators">N Estimators
                            </label>

                            <div class="col-sm-5">
                                <input type="text" class="form-control" id="gradient_n_estimators" name="gradient_n_estimators" placeholder="The number of boosting stages to perform. Default 100" />
                            </div>

                          </div>

                          <div class="form-group" id="GradientBoostingClassifier3" style="display:none;">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="gradient_min_samples_split">Min Samples Split
                            </label>

                            <div class="col-sm-5">
                                <input type="text" class="form-control" id="gradient_min_samples_split" name="gradient_min_samples_split" placeholder="Min samples split, default 2" />
                            </div>

                          </div>

                          <div class="form-group" id="GradientBoostingClassifier4" style="display:none;">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="gradient_min_samples_leaf">Min Samples Leaf
                            </label>

                            <div class="col-sm-5">
                                <input type="text" class="form-control" id="gradient_min_samples_leaf" name="gradient_min_samples_leaf" placeholder="Min samples leaf, default 1" />
                            </div>

                          </div>

                          <div class="form-group" id="KNeighborsClassifier1" style="display:none;">
              							<label class="control-label col-md-3 col-sm-3 col-xs-12" for="knn_neighbors">Neighbors
              							</label>

                            <div class="col-md-5 col-sm-5 col-xs-12">
                              <select id="knn_neighbors" class="form-control">
                                <?php
                                  for ($i=2; $i<=50;$i++){
                                    echo "<option>$i</option>";
                                  }
                                ?>
                              </select>
                            </div>
                          </div>

                          <div class="form-group" id="KNeighborsClassifier2" style="display:none;">
              							<label class="control-label col-md-3 col-sm-3 col-xs-12" for="knn_algorithm">Algorithm
              							</label>

                            <div class="col-md-5 col-sm-5 col-xs-12">
                              <select id="knn_algorithm" class="form-control">
                                <option>Default</option>
                                <option>auto</option>
                                <option>ball_tree</option>
                                <option>kd_tree</option>
                                <option>brute</option>
                              </select>
                            </div>
                          </div>

                          <div class="form-group" id="KNeighborsClassifier3" style="display:none;">
              							<label class="control-label col-md-3 col-sm-3 col-xs-12" for="knn_metric">Metric
              							</label>

                            <div class="col-md-5 col-sm-5 col-xs-12">
                              <select id="knn_metric" class="form-control">
                                <option>Default</option>
                                <option>minkowski</option>
                                <option>euclidean</option>
                              </select>
                            </div>
                          </div>

                          <div class="form-group" id="KNeighborsClassifier4" style="display:none;">
              							<label class="control-label col-md-3 col-sm-3 col-xs-12" for="knn_weight">Weights
              							</label>

                            <div class="col-md-5 col-sm-5 col-xs-12">
                              <select id="knn_weight" class="form-control">
                                <option>Default</option>
                                <option>uniform</option>
                                <option>distance</option>
                              </select>
                            </div>
                          </div>

                          <div class="form-group" id="MLPClassifier1" style="display:none;">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="MLP_activation">Activation
                            </label>

                            <div class="col-md-5 col-sm-5 col-xs-12">
                              <select id="MLP_activation" class="form-control">
                                <option>Default</option>
                                <option>identity</option>
                                <option>logistic</option>
                                <option>tanh</option>
                                <option>relu</option>
                              </select>
                            </div>
                          </div>

                          <div class="form-group" id="MLPClassifier2" style="display:none;">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="MLP_solver">Solver
                            </label>

                            <div class="col-md-5 col-sm-5 col-xs-12">
                              <select id="MLP_solver" class="form-control">
                                <option>Default</option>
                                <option>lbfgs</option>
                                <option>sgd</option>
                                <option>adam</option>
                              </select>
                            </div>
                          </div>

                          <div class="form-group" id="MLPClassifier3" style="display:none;">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="MLP_alpha">L2 penalty
                            </label>

                            <div class="col-sm-5">
                                <input type="text" class="form-control" id="MLP_alpha" name="MLP_alpha" placeholder="L2 penalty (regularization term) parameter. Default 0.0001" />
                            </div>

                          </div>

                          <div class="form-group" id="MLPClassifier4" style="display:none;">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="MLP_learning_rate">Learning rate
                            </label>

                            <div class="col-md-5 col-sm-5 col-xs-12">
                              <select id="MLP_learning_rate" class="form-control">
                                <option>Default</option>
                                <option>constant</option>
                                <option>invscaling</option>
                                <option>adaptive</option>
                              </select>
                            </div>
                          </div>

                          <div class="form-group" id="MLPClassifier5" style="display:none;">
              							<label class="control-label col-md-3 col-sm-3 col-xs-12" for="MLP_hidden_layer_sizes1">Hidden Layer A
              							</label>

                            <div class="col-md-5 col-sm-5 col-xs-12">
                              <select id="MLP_hidden_layer_sizes1" class="form-control">
                                <?php
                                  for ($i=1; $i<=50;$i++){
                                    echo "<option>$i</option>";
                                  }
                                ?>
                              </select>
                            </div>
                          </div>

                          <div class="form-group" id="MLPClassifier6" style="display:none;">
              							<label class="control-label col-md-3 col-sm-3 col-xs-12" for="MLP_hidden_layer_sizes2">Hidden Layer B
              							</label>

                            <div class="col-md-5 col-sm-5 col-xs-12">
                              <select id="MLP_hidden_layer_sizes2" class="form-control">
                                <?php
                                  for ($i=1; $i<=50;$i++){
                                    echo "<option>$i</option>";
                                  }
                                ?>
                              </select>
                            </div>
                          </div>

                          <div class="form-group" id="MLPClassifier7" style="display:none;">
              							<label class="control-label col-md-3 col-sm-3 col-xs-12" for="MLP_hidden_layer_sizes3">Hidden Layer C
              							</label>

                            <div class="col-md-5 col-sm-5 col-xs-12">
                              <select id="MLP_hidden_layer_sizes3" class="form-control">
                                <?php
                                  for ($i=1; $i<=50;$i++){
                                    echo "<option>$i</option>";
                                  }
                                ?>
                              </select>
                            </div>
                          </div>

                          <div class="form-group" id="MLPClassifier8" style="display:none;">
              							<label class="control-label col-md-3 col-sm-3 col-xs-12" for="MLP_max_iter">Max Iterations
              							</label>

                            <div class="col-md-5 col-sm-5 col-xs-12">
                              <select id="MLP_max_iter" class="form-control">
                                <?php
                                  for ($i=100; $i<=5000;$i+=50){
                                    echo "<option>$i</option>";
                                  }
                                ?>
                              </select>
                            </div>
                          </div>

                          <div class="form-group" id="MLPClassifier9" style="display:none;">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="MLP_shuffle">Shuffle
                            </label>

                            <div class="col-md-5 col-sm-5 col-xs-12">
                              <select id="MLP_shuffle" class="form-control">
                                <option>Default</option>
                                <option>True</option>
                                <option>False</option>
                              </select>
                            </div>
                          </div>

                          <div class="form-group" id="RandomForestClassifier1" style="display:none;">
              							<label class="control-label col-md-3 col-sm-3 col-xs-12" for="rf_n_estimators">N Estimators
              							</label>

                            <div class="col-md-5 col-sm-5 col-xs-12">
                              <select id="rf_n_estimators" class="form-control">
                                <?php
                                  for ($i=2; $i<=2000;$i++){
                                    echo "<option>$i</option>";
                                  }
                                ?>
                              </select>
                            </div>
                          </div>

                          <div class="form-group" id="RandomForestClassifier2" style="display:none;">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="rf_criterion">Criterion
                            </label>

                            <div class="col-md-5 col-sm-5 col-xs-12">
                              <select id="rf_criterion" class="form-control">
                                <option>Default</option>
                                <option>gini</option>
                                <option>entropy</option>

                              </select>
                            </div>
                          </div>

                          <div class="form-group" id="RandomForestClassifier3" style="display:none;">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="rf_bootstrap">Bootstrap
                            </label>

                            <div class="col-md-5 col-sm-5 col-xs-12">
                              <select id="rf_bootstrap" class="form-control">
                                <option>Default</option>
                                <option>True</option>
                                <option>False</option>
                              </select>
                            </div>
                          </div>

                          <div class="form-group" id="RandomForestClassifier4" style="display:none;">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="rf_min_samples_split">Min Samples Split
                            </label>

                            <div class="col-sm-5">
                                <input type="text" class="form-control" id="rf_min_samples_split" name="rf_min_samples_split" placeholder="Min samples split, default 2" />
                            </div>

                          </div>

                          <div class="form-group" id="RandomForestClassifier5" style="display:none;">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="rf_min_samples_leaf">Min Samples Leaf
                            </label>

                            <div class="col-sm-5">
                                <input type="text" class="form-control" id="rf_min_samples_leaf" name="rf_min_samples_leaf" placeholder="Min samples leaft, default 1" />
                            </div>

                          </div>

                          <div class="ln_solid"></div>

                          <div class="form-group">
                              <div class="col-sm-5 col-sm-offset-3">
                                <button type="submit" id="processJob" class="btn btn-primary">Create Job</button>
                              </div>
                          </div>
                        </form>
                        <div class="col-sm-12 col-md-12 col-lg-12" id="loading" style="display:none;">
                            <div class="panel">
                                <div class="panel-body">
                                    <div class="sk-three-bounce">
                                        <div class="sk-child sk-bounce1"></div>
                                        <div class="sk-child sk-bounce2"></div>
                                        <div class="sk-child sk-bounce3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-12 col-md-12 col-lg-12" id="errorResponse" style="display:none;">
                          <div class="alert alert-danger" role="alert">
                            Error during the execution of the process. Please, review the data set. In case of persisting, contact the system administrator.
                          </div>
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

                                  <li>
          						                <a href="../jobsQueue">
          						                    <i class="fa fa fa-archive"></i>
          						                    <span class="menu-title">My Jobs in Queue</span><i class="arrow"></i>
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

                                  <li>
          						                <a href="../">
          						                    <i class="fa fa fa-home"></i>
          						                    <span class="menu-title">home</span><i class="arrow"></i>
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

            <p class="pad-lft">&#0169; 2019 Developed by <a href="http://pesb2.cl/smartTraining"> SmartTraining Group, </a>Centre for Biothecnology and Bioengineering, FCFM, University of Chile</p>


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
