$(document).ready(function() {

	$(function() {

    $('#algorithm').change(function(){

				if($('#algorithm').val() == 12) {//SVC
					$('#SVC1').show();
					$('#SVC2').show();
					$('#SVC3').show();
					$('#SVC4').show();

					//oculto el resto de cosas...
					$('#NuSVC1').hide();
					$('#NuSVC2').hide();
					$('#NuSVC3').hide();
					$('#NuSVC4').hide();
					$('#AdaBoostClassifier1').hide();
					$('#AdaBoostClassifier2').hide();
					$('#BaggingClassifier1').hide();
					$('#BaggingClassifier2').hide();
					$('#DecisionTree1').hide();
					$('#DecisionTree2').hide();
					$('#GradientBoostingClassifier1').hide();
					$('#GradientBoostingClassifier2').hide();
					$('#GradientBoostingClassifier3').hide();
					$('#GradientBoostingClassifier4').hide();
					$('#KNeighborsClassifier1').hide();
					$('#KNeighborsClassifier2').hide();
					$('#KNeighborsClassifier3').hide();
					$('#KNeighborsClassifier4').hide();
					$('#MLPClassifier1').hide();
					$('#MLPClassifier2').hide();
					$('#MLPClassifier3').hide();
					$('#MLPClassifier4').hide();
					$('#MLPClassifier5').hide();
					$('#MLPClassifier6').hide();
					$('#MLPClassifier7').hide();
					$('#MLPClassifier8').hide();
					$('#MLPClassifier9').hide();
					$('#RandomForestClassifier1').hide();
					$('#RandomForestClassifier2').hide();
					$('#RandomForestClassifier3').hide();
					$('#RandomForestClassifier4').hide();
					$('#RandomForestClassifier5').hide();


				}

				if($('#algorithm').val() == 10) {//NuSVC
					$('#NuSVC1').show();
					$('#NuSVC2').show();
					$('#NuSVC3').show();
					$('#NuSVC4').show();

					//oculto el resto de cosas...
					$('#SVC1').hide();
					$('#SVC2').hide();
					$('#SVC3').hide();
					$('#SVC4').hide();
					$('#AdaBoostClassifier1').hide();
					$('#AdaBoostClassifier2').hide();
					$('#BaggingClassifier1').hide();
					$('#BaggingClassifier2').hide();
					$('#DecisionTree1').hide();
					$('#DecisionTree2').hide();
					$('#GradientBoostingClassifier1').hide();
					$('#GradientBoostingClassifier2').hide();
					$('#GradientBoostingClassifier3').hide();
					$('#GradientBoostingClassifier4').hide();
					$('#KNeighborsClassifier1').hide();
					$('#KNeighborsClassifier2').hide();
					$('#KNeighborsClassifier3').hide();
					$('#KNeighborsClassifier4').hide();
					$('#MLPClassifier1').hide();
					$('#MLPClassifier2').hide();
					$('#MLPClassifier3').hide();
					$('#MLPClassifier4').hide();
					$('#MLPClassifier5').hide();
					$('#MLPClassifier6').hide();
					$('#MLPClassifier7').hide();
					$('#MLPClassifier8').hide();
					$('#MLPClassifier9').hide();
					$('#RandomForestClassifier1').hide();
					$('#RandomForestClassifier2').hide();
					$('#RandomForestClassifier3').hide();
					$('#RandomForestClassifier4').hide();
					$('#RandomForestClassifier5').hide();
				}

				if($('#algorithm').val() == 2) {//AdaBoostClassifier
						$('#AdaBoostClassifier1').show();
						$('#AdaBoostClassifier2').show();

						//ocultamos el resto
						$('#NuSVC1').hide();
						$('#NuSVC2').hide();
						$('#NuSVC3').hide();
						$('#NuSVC4').hide();
						$('#SVC1').hide();
						$('#SVC2').hide();
						$('#SVC3').hide();
						$('#SVC4').hide();
						$('#DecisionTree1').hide();
						$('#DecisionTree2').hide();
						$('#BaggingClassifier1').hide();
						$('#BaggingClassifier2').hide();
						$('#GradientBoostingClassifier1').hide();
						$('#GradientBoostingClassifier2').hide();
						$('#GradientBoostingClassifier3').hide();
						$('#GradientBoostingClassifier4').hide();
						$('#KNeighborsClassifier1').hide();
						$('#KNeighborsClassifier2').hide();
						$('#KNeighborsClassifier3').hide();
						$('#KNeighborsClassifier4').hide();
						$('#MLPClassifier1').hide();
						$('#MLPClassifier2').hide();
						$('#MLPClassifier3').hide();
						$('#MLPClassifier4').hide();
						$('#MLPClassifier5').hide();
						$('#MLPClassifier6').hide();
						$('#MLPClassifier7').hide();
						$('#MLPClassifier8').hide();
						$('#MLPClassifier9').hide();
						$('#RandomForestClassifier1').hide();
						$('#RandomForestClassifier2').hide();
						$('#RandomForestClassifier3').hide();
						$('#RandomForestClassifier4').hide();
						$('#RandomForestClassifier5').hide();
				}

				if($('#algorithm').val() == 3) {//Bagging
					$('#BaggingClassifier1').show();
					$('#BaggingClassifier2').show();

					//ocultamos el resto
					$('#AdaBoostClassifier1').hide();
					$('#AdaBoostClassifier2').hide();
					$('#NuSVC1').hide();
					$('#NuSVC2').hide();
					$('#NuSVC3').hide();
					$('#NuSVC4').hide();
					$('#SVC1').hide();
					$('#SVC2').hide();
					$('#SVC3').hide();
					$('#SVC4').hide();
					$('#DecisionTree1').hide();
					$('#DecisionTree2').hide();
					$('#GradientBoostingClassifier1').hide();
					$('#GradientBoostingClassifier2').hide();
					$('#GradientBoostingClassifier3').hide();
					$('#GradientBoostingClassifier4').hide();
					$('#KNeighborsClassifier1').hide();
					$('#KNeighborsClassifier2').hide();
					$('#KNeighborsClassifier3').hide();
					$('#KNeighborsClassifier4').hide();
					$('#MLPClassifier1').hide();
					$('#MLPClassifier2').hide();
					$('#MLPClassifier3').hide();
					$('#MLPClassifier4').hide();
					$('#MLPClassifier5').hide();
					$('#MLPClassifier6').hide();
					$('#MLPClassifier7').hide();
					$('#MLPClassifier8').hide();
					$('#MLPClassifier9').hide();
					$('#RandomForestClassifier1').hide();
					$('#RandomForestClassifier2').hide();
					$('#RandomForestClassifier3').hide();
					$('#RandomForestClassifier4').hide();
					$('#RandomForestClassifier5').hide();

				}

				if($('#algorithm').val() == 5) {//DecisionTree
            $('#DecisionTree1').show();
						$('#DecisionTree2').show();

						//ocultamos el resto
						$('#BaggingClassifier1').hide();
						$('#BaggingClassifier2').hide();
						$('#AdaBoostClassifier1').hide();
						$('#AdaBoostClassifier2').hide();
						$('#NuSVC1').hide();
						$('#NuSVC2').hide();
						$('#NuSVC3').hide();
						$('#NuSVC4').hide();
						$('#SVC1').hide();
						$('#SVC2').hide();
						$('#SVC3').hide();
						$('#SVC4').hide();
						$('#GradientBoostingClassifier1').hide();
						$('#GradientBoostingClassifier2').hide();
						$('#GradientBoostingClassifier3').hide();
						$('#GradientBoostingClassifier4').hide();
						$('#KNeighborsClassifier1').hide();
						$('#KNeighborsClassifier2').hide();
						$('#KNeighborsClassifier3').hide();
						$('#KNeighborsClassifier4').hide();
						$('#MLPClassifier1').hide();
						$('#MLPClassifier2').hide();
						$('#MLPClassifier3').hide();
						$('#MLPClassifier4').hide();
						$('#MLPClassifier5').hide();
						$('#MLPClassifier6').hide();
						$('#MLPClassifier7').hide();
						$('#MLPClassifier8').hide();
						$('#MLPClassifier9').hide();
						$('#RandomForestClassifier1').hide();
						$('#RandomForestClassifier2').hide();
						$('#RandomForestClassifier3').hide();
						$('#RandomForestClassifier4').hide();
						$('#RandomForestClassifier5').hide();
				}

				if($('#algorithm').val() == 7) {//Gradient
            $('#GradientBoostingClassifier1').show();
						$('#GradientBoostingClassifier2').show();
						$('#GradientBoostingClassifier3').show();
						$('#GradientBoostingClassifier4').show();

						//oculto el resto
						$('#DecisionTree1').hide();
						$('#DecisionTree2').hide();
						$('#BaggingClassifier1').hide();
						$('#BaggingClassifier2').hide();
						$('#AdaBoostClassifier1').hide();
						$('#AdaBoostClassifier2').hide();
						$('#NuSVC1').hide();
						$('#NuSVC2').hide();
						$('#NuSVC3').hide();
						$('#NuSVC4').hide();
						$('#SVC1').hide();
						$('#SVC2').hide();
						$('#SVC3').hide();
						$('#SVC4').hide();
						$('#KNeighborsClassifier1').hide();
						$('#KNeighborsClassifier2').hide();
						$('#KNeighborsClassifier3').hide();
						$('#KNeighborsClassifier4').hide();
						$('#MLPClassifier1').hide();
						$('#MLPClassifier2').hide();
						$('#MLPClassifier3').hide();
						$('#MLPClassifier4').hide();
						$('#MLPClassifier5').hide();
						$('#MLPClassifier6').hide();
						$('#MLPClassifier7').hide();
						$('#MLPClassifier8').hide();
						$('#MLPClassifier9').hide();
						$('#RandomForestClassifier1').hide();
						$('#RandomForestClassifier2').hide();
						$('#RandomForestClassifier3').hide();
						$('#RandomForestClassifier4').hide();
						$('#RandomForestClassifier5').hide();
        }

				if($('#algorithm').val() == 8) {//KNN

					$('#KNeighborsClassifier1').show();
					$('#KNeighborsClassifier2').show();
					$('#KNeighborsClassifier3').show();
					$('#KNeighborsClassifier4').show();

					//oculto el resto
						$('#GradientBoostingClassifier1').hide();
						$('#GradientBoostingClassifier2').hide();
						$('#GradientBoostingClassifier3').hide();
						$('#GradientBoostingClassifier4').hide();
						$('#DecisionTree1').hide();
						$('#DecisionTree2').hide();
						$('#BaggingClassifier1').hide();
						$('#BaggingClassifier2').hide();
						$('#AdaBoostClassifier1').hide();
						$('#AdaBoostClassifier2').hide();
						$('#NuSVC1').hide();
						$('#NuSVC2').hide();
						$('#NuSVC3').hide();
						$('#NuSVC4').hide();
						$('#SVC1').hide();
						$('#SVC2').hide();
						$('#SVC3').hide();
						$('#SVC4').hide();
						$('#MLPClassifier1').hide();
						$('#MLPClassifier2').hide();
						$('#MLPClassifier3').hide();
						$('#MLPClassifier4').hide();
						$('#MLPClassifier5').hide();
						$('#MLPClassifier6').hide();
						$('#MLPClassifier7').hide();
						$('#MLPClassifier8').hide();
						$('#MLPClassifier9').hide();
						$('#RandomForestClassifier1').hide();
						$('#RandomForestClassifier2').hide();
						$('#RandomForestClassifier3').hide();
						$('#RandomForestClassifier4').hide();
						$('#RandomForestClassifier5').hide();
				}

				if($('#algorithm').val() == 9) {//MLP

					$('#MLPClassifier1').show();
					$('#MLPClassifier2').show();
					$('#MLPClassifier3').show();
					$('#MLPClassifier4').show();
					$('#MLPClassifier5').show();
					$('#MLPClassifier6').show();
					$('#MLPClassifier7').show();
					$('#MLPClassifier8').show();
					$('#MLPClassifier9').show();


						$('#KNeighborsClassifier1').hide();
						$('#KNeighborsClassifier2').hide();
						$('#KNeighborsClassifier3').hide();
						$('#KNeighborsClassifier4').hide();
						$('#GradientBoostingClassifier1').hide();
						$('#GradientBoostingClassifier2').hide();
						$('#GradientBoostingClassifier3').hide();
						$('#GradientBoostingClassifier4').hide();
						$('#DecisionTree1').hide();
						$('#DecisionTree2').hide();
						$('#BaggingClassifier1').hide();
						$('#BaggingClassifier2').hide();
						$('#AdaBoostClassifier1').hide();
						$('#AdaBoostClassifier2').hide();
						$('#NuSVC1').hide();
						$('#NuSVC2').hide();
						$('#NuSVC3').hide();
						$('#NuSVC4').hide();
						$('#SVC1').hide();
						$('#SVC2').hide();
						$('#SVC3').hide();
						$('#SVC4').hide();
						$('#RandomForestClassifier1').hide();
						$('#RandomForestClassifier2').hide();
						$('#RandomForestClassifier3').hide();
						$('#RandomForestClassifier4').hide();
						$('#RandomForestClassifier5').hide();
				}

				if($('#algorithm').val() == 11) {//RandomForestClassifier

					$('#RandomForestClassifier1').show();
					$('#RandomForestClassifier2').show();
					$('#RandomForestClassifier3').show();
					$('#RandomForestClassifier4').show();
					$('#RandomForestClassifier5').show();

					$('#MLPClassifier1').hide();
					$('#MLPClassifier2').hide();
					$('#MLPClassifier3').hide();
					$('#MLPClassifier4').hide();
					$('#MLPClassifier5').hide();
					$('#MLPClassifier6').hide();
					$('#MLPClassifier7').hide();
					$('#MLPClassifier8').hide();
					$('#MLPClassifier9').hide();


						$('#KNeighborsClassifier1').hide();
						$('#KNeighborsClassifier2').hide();
						$('#KNeighborsClassifier3').hide();
						$('#KNeighborsClassifier4').hide();
						$('#GradientBoostingClassifier1').hide();
						$('#GradientBoostingClassifier2').hide();
						$('#GradientBoostingClassifier3').hide();
						$('#GradientBoostingClassifier4').hide();
						$('#DecisionTree1').hide();
						$('#DecisionTree2').hide();
						$('#BaggingClassifier1').hide();
						$('#BaggingClassifier2').hide();
						$('#AdaBoostClassifier1').hide();
						$('#AdaBoostClassifier2').hide();
						$('#NuSVC1').hide();
						$('#NuSVC2').hide();
						$('#NuSVC3').hide();
						$('#NuSVC4').hide();
						$('#SVC1').hide();
						$('#SVC2').hide();
						$('#SVC3').hide();
						$('#SVC4').hide();
				}

				if($('#algorithm').val() == 4) {//BernoulliNB

					$('#RandomForestClassifier1').hide();
					$('#RandomForestClassifier2').hide();
					$('#RandomForestClassifier3').hide();
					$('#RandomForestClassifier4').hide();
					$('#RandomForestClassifier5').hide();

					$('#MLPClassifier1').hide();
					$('#MLPClassifier2').hide();
					$('#MLPClassifier3').hide();
					$('#MLPClassifier4').hide();
					$('#MLPClassifier5').hide();
					$('#MLPClassifier6').hide();
					$('#MLPClassifier7').hide();
					$('#MLPClassifier8').hide();
					$('#MLPClassifier9').hide();


						$('#KNeighborsClassifier1').hide();
						$('#KNeighborsClassifier2').hide();
						$('#KNeighborsClassifier3').hide();
						$('#KNeighborsClassifier4').hide();
						$('#GradientBoostingClassifier1').hide();
						$('#GradientBoostingClassifier2').hide();
						$('#GradientBoostingClassifier3').hide();
						$('#GradientBoostingClassifier4').hide();
						$('#DecisionTree1').hide();
						$('#DecisionTree2').hide();
						$('#BaggingClassifier1').hide();
						$('#BaggingClassifier2').hide();
						$('#AdaBoostClassifier1').hide();
						$('#AdaBoostClassifier2').hide();
						$('#NuSVC1').hide();
						$('#NuSVC2').hide();
						$('#NuSVC3').hide();
						$('#NuSVC4').hide();
						$('#SVC1').hide();
						$('#SVC2').hide();
						$('#SVC3').hide();
						$('#SVC4').hide();
				}

				if($('#algorithm').val() == 6) {//GaussianNB

					$('#RandomForestClassifier1').hide();
					$('#RandomForestClassifier2').hide();
					$('#RandomForestClassifier3').hide();
					$('#RandomForestClassifier4').hide();
					$('#RandomForestClassifier5').hide();

					$('#MLPClassifier1').hide();
					$('#MLPClassifier2').hide();
					$('#MLPClassifier3').hide();
					$('#MLPClassifier4').hide();
					$('#MLPClassifier5').hide();
					$('#MLPClassifier6').hide();
					$('#MLPClassifier7').hide();
					$('#MLPClassifier8').hide();
					$('#MLPClassifier9').hide();


						$('#KNeighborsClassifier1').hide();
						$('#KNeighborsClassifier2').hide();
						$('#KNeighborsClassifier3').hide();
						$('#KNeighborsClassifier4').hide();
						$('#GradientBoostingClassifier1').hide();
						$('#GradientBoostingClassifier2').hide();
						$('#GradientBoostingClassifier3').hide();
						$('#GradientBoostingClassifier4').hide();
						$('#DecisionTree1').hide();
						$('#DecisionTree2').hide();
						$('#BaggingClassifier1').hide();
						$('#BaggingClassifier2').hide();
						$('#AdaBoostClassifier1').hide();
						$('#AdaBoostClassifier2').hide();
						$('#NuSVC1').hide();
						$('#NuSVC2').hide();
						$('#NuSVC3').hide();
						$('#NuSVC4').hide();
						$('#SVC1').hide();
						$('#SVC2').hide();
						$('#SVC3').hide();
						$('#SVC4').hide();
				}

    });
	});

	$('#initNewJob').bootstrapValidator({
				feedbackIcons: {
						valid: 'glyphicon glyphicon-ok',
						invalid: 'glyphicon glyphicon-remove',
						validating: 'glyphicon glyphicon-refresh'
				},
				fields: {
						nameJob: {
								validators: {
										notEmpty: {
												message: 'The nameJob is required'
										}
								}
						},
						descJob: {
								validators: {
										notEmpty: {
												message: 'The description Job is required'
										}
								}
						}
				}
		}).on('success.form.bv', function(e) {
			e.preventDefault();
			$('#loading').show();
			var nameJob = $("#initNewJob #nameJob").val();
			var descJob = $("#initNewJob #descJob").val();
      var algorithm = $("#initNewJob #algorithm").val();

			//recuperamos todos los valores de los algoritmos y parametros segun corresponda con respecto al algoritmo y se ejecutara
			//un script dependiendo del tipo de algoritmo a entrenar.

			if (algorithm == 2){//AdaBoostClassifier

				var AdaBoost_n_estimators = $("#initNewJob #AdaBoost_n_estimators").val();
				var AdaBoost_algorithm = $("#initNewJob #AdaBoost_algorithm").val();

				//evaluamos los valores por defecto...
				if (AdaBoost_algorithm == "Default"){
					AdaBoost_algorithm = "SAMME";
				}

				if (AdaBoost_n_estimators == null || AdaBoost_n_estimators == ""){
					AdaBoost_n_estimators = 10;
				}

				//hacemos la llamada por ajax para ejecutar el algoritmo...
				$.ajax({
					method: "POST",
					url: "../php/classifier/execAdaBoost.php",
					data: {
						"nameJob"   : nameJob,
						"descJob"   : descJob,
	          "algorithm"   : algorithm,
						"val" : 10,
						"AdaBoost_n_estimators" : AdaBoost_n_estimators,
						"AdaBoost_algorithm" : AdaBoost_algorithm
					}
				}).done( function( info ){
					var response = JSON.parse(info);
					responseData = response.fileResponse;

					readTextFile(responseData, function(text){
				    var data = JSON.parse(text);
				    console.log(data);
						//trabajamos con la respuesta...
						if (data.errorExec.exec_algorithm == "OK"){
							job = response.job;
							location.href="responseTraining.php?job="+job+"&alg=2";
						}else{
							console.log("Error");
						}
					});
				});
			}

			if (algorithm == 3){//Bagging

				var bagging_n_estimators = $("#initNewJob #bagging_n_estimators").val();
				var bootstrap_bootstrap = $("#initNewJob #bootstrap_bootstrap").val();

				//evaluamos los valores por defecto...
				if (bootstrap_bootstrap == "Default"){
					bootstrap_bootstrap = "True";
				}

				if (bagging_n_estimators == null || bagging_n_estimators == ""){
					bagging_n_estimators = 10;
				}

				//hacemos la llamada por ajax para ejecutar el algoritmo...
				$.ajax({
					method: "POST",
					url: "../php/classifier/execBagging.php",
					data: {
						"nameJob"   : nameJob,
						"descJob"   : descJob,
	          "algorithm"   : algorithm,
						"val" : 10,
						"bagging_n_estimators" : bagging_n_estimators,
						"bootstrap_bootstrap" : bootstrap_bootstrap
					}
				}).done( function( info ){
					var response = JSON.parse(info);
					responseData = response.fileResponse;

					readTextFile(responseData, function(text){
				    var data = JSON.parse(text);
				    console.log(data);
						//trabajamos con la respuesta...
						if (data.errorExec.exec_algorithm == "OK"){
							job = response.job;
							location.href="responseTraining.php?job="+job+"&alg=3";
						}else{
							console.log("Error");
						}
					});
				});
			}

			if (algorithm == 4){//BernoulliNB

				//hacemos la llamada por ajax para ejecutar el algoritmo...
				$.ajax({
					method: "POST",
					url: "../php/classifier/execBernoulli.php",
					data: {
						"nameJob"   : nameJob,
						"descJob"   : descJob,
						"algorithm"   : algorithm,
						"val" : 10,
					}
				}).done( function( info ){
					var response = JSON.parse(info);
					responseData = response.fileResponse;

					readTextFile(responseData, function(text){
						var data = JSON.parse(text);
						console.log(data);
						//trabajamos con la respuesta...
						if (data.errorExec.exec_algorithm == "OK"){
							job = response.job;
							location.href="responseTraining.php?job="+job+"&alg=4";
						}else{
							console.log("Error");
						}
					});
				});
			}

			if (algorithm == 5){//DecisionTree

				var DecisionTree_criterion = $("#initNewJob #DecisionTree_criterion").val().toLowerCase();
				var DecisionTree_splitter = $("#initNewJob #DecisionTree_splitter").val().toLowerCase();

				//evaluamos los valores por defecto...
				if (DecisionTree_splitter == "default"){
					DecisionTree_splitter = "best";
				}

				if (DecisionTree_criterion == "default"){
					DecisionTree_criterion = "gini";
				}

				//hacemos la llamada por ajax para ejecutar el algoritmo...
				$.ajax({
					method: "POST",
					url: "../php/classifier/execDecisionTree.php",
					data: {
						"nameJob"   : nameJob,
						"descJob"   : descJob,
	          "algorithm"   : algorithm,
						"val" : 10,
						"DecisionTree_splitter" : DecisionTree_splitter,
						"DecisionTree_criterion" : DecisionTree_criterion
					}
				}).done( function( info ){
					var response = JSON.parse(info);
					responseData = response.fileResponse;

					readTextFile(responseData, function(text){
				    var data = JSON.parse(text);
				    console.log(data);
						//trabajamos con la respuesta...
						if (data.errorExec.exec_algorithm == "OK"){
							job = response.job;
							location.href="responseTraining.php?job="+job+"&alg=5";
						}else{
							console.log("Error");
						}
					});
				});
			}

			if (algorithm == 6){//GaussianNB

				//hacemos la llamada por ajax para ejecutar el algoritmo...
				$.ajax({
					method: "POST",
					url: "../php/classifier/execGaussian.php",
					data: {
						"nameJob"   : nameJob,
						"descJob"   : descJob,
						"algorithm"   : algorithm,
						"val" : 10,
					}
				}).done( function( info ){
					var response = JSON.parse(info);
					responseData = response.fileResponse;

					readTextFile(responseData, function(text){
						var data = JSON.parse(text);
						console.log(data);
						//trabajamos con la respuesta...
						if (data.errorExec.exec_algorithm == "OK"){
							job = response.job;
							location.href="responseTraining.php?job="+job+"&alg=6";
						}else{
							console.log("Error");
						}
					});
				});
			}

			if (algorithm == 7){//Gradient

				var gradient_loss = $("#initNewJob #gradient_loss").val();
				var gradient_n_estimators = $("#initNewJob #gradient_n_estimators").val();
				var gradient_min_samples_split = $("#initNewJob #gradient_min_samples_split").val();
				var gradient_min_samples_leaf = $("#initNewJob #gradient_min_samples_leaf").val();

				//evaluamos los valores por defecto...
				if (gradient_loss == "Default"){
					gradient_loss = "deviance";
				}

				if (gradient_n_estimators == null || gradient_n_estimators == ""){
					gradient_n_estimators = 10;
				}

				if (gradient_min_samples_split == null || gradient_min_samples_split == ""){
					gradient_min_samples_split = 2;
				}

				if (gradient_min_samples_leaf == null || gradient_min_samples_leaf == ""){
					gradient_min_samples_leaf = 1;
				}

				//hacemos la llamada por ajax para ejecutar el algoritmo...
				$.ajax({
					method: "POST",
					url: "../php/classifier/execGradient.php",
					data: {
						"nameJob"   : nameJob,
						"descJob"   : descJob,
	          "algorithm"   : algorithm,
						"val" : 10,
						"gradient_loss" : gradient_loss,
						"gradient_n_estimators" : gradient_n_estimators,
						"gradient_min_samples_split" : gradient_min_samples_split,
						"gradient_min_samples_leaf" : gradient_min_samples_leaf
					}
				}).done( function( info ){
					var response = JSON.parse(info);
					responseData = response.fileResponse;

					readTextFile(responseData, function(text){
				    var data = JSON.parse(text);
				    console.log(data);
						//trabajamos con la respuesta...
						if (data.errorExec.exec_algorithm == "OK"){
							job = response.job;
							location.href="responseTraining.php?job="+job+"&alg=7";
						}else{
							console.log("Error");
						}
					});
				});
			}

			if (algorithm == 8){//KNN

				var knn_neighbors = $("#initNewJob #knn_neighbors").val();
				var knn_algorithm = $("#initNewJob #knn_algorithm").val();
				var knn_metric = $("#initNewJob #knn_metric").val();
				var knn_weight = $("#initNewJob #knn_weight").val();

				//evaluamos los valores por defecto...
				if (knn_algorithm == "Default"){
					knn_algorithm = "auto";
				}

				if (knn_metric == "Default"){
					knn_metric = "minkowski";
				}

				if (knn_weight == "Default"){
					knn_weight = "uniform";
				}

				if (knn_neighbors == null || knn_neighbors == ""){
					knn_neighbors = 3;
				}

				//hacemos la llamada por ajax para ejecutar el algoritmo...
				$.ajax({
					method: "POST",
					url: "../php/classifier/execKNN.php",
					data: {
						"nameJob"   : nameJob,
						"descJob"   : descJob,
	          "algorithm"   : algorithm,
						"val" : 10,
						"knn_neighbors" : knn_neighbors,
						"knn_metric" : knn_metric,
						"knn_weight" : knn_weight,
						"knn_algorithm" : knn_algorithm
					}
				}).done( function( info ){
					var response = JSON.parse(info);
					responseData = response.fileResponse;

					readTextFile(responseData, function(text){
				    var data = JSON.parse(text);
				    console.log(data);
						//trabajamos con la respuesta...
						if (data.errorExec.exec_algorithm == "OK"){
							job = response.job;
							location.href="responseTraining.php?job="+job+"&alg=8";
						}else{
							console.log("Error");
						}
					});
				});
			}

			if (algorithm == 9){//MLP

				var MLP_activation = $("#initNewJob #MLP_activation").val();
				var MLP_solver = $("#initNewJob #MLP_solver").val();
				var MLP_alpha = $("#initNewJob #MLP_alpha").val();
				var MLP_learning_rate = $("#initNewJob #MLP_learning_rate").val();
				var MLP_hidden_layer_sizes1 = $("#initNewJob #MLP_hidden_layer_sizes1").val();
				var MLP_hidden_layer_sizes2 = $("#initNewJob #MLP_hidden_layer_sizes2").val();
				var MLP_hidden_layer_sizes3 = $("#initNewJob #MLP_hidden_layer_sizes3").val();
				var MLP_max_iter = $("#initNewJob #MLP_max_iter").val();
				var MLP_shuffle = $("#initNewJob #MLP_shuffle").val();

				//evaluamos los valores por defecto...
				if (MLP_activation == "Default"){
					MLP_activation = "relu";
				}

				if (knn_metric == "Default"){
					knn_metric = "adam";
				}

				if (MLP_learning_rate == "Default"){
					MLP_learning_rate = "constant";
				}

				if (MLP_shuffle == "Default"){
					MLP_shuffle = "True";
				}

				if (MLP_alpha == "" || MLP_alpha == null){
					MLP_alpha = 0.001;
				}


				//hacemos la llamada por ajax para ejecutar el algoritmo...
				$.ajax({
					method: "POST",
					url: "../php/classifier/execMLP.php",
					data: {
						"nameJob"   : nameJob,
						"descJob"   : descJob,
	          "algorithm"   : algorithm,
						"val" : 10,
						"MLP_activation" : MLP_activation,
						"MLP_solver" : MLP_solver,
						"MLP_alpha" : MLP_alpha,
						"MLP_learning_rate" : MLP_learning_rate,
						"MLP_hidden_layer_sizes1" : MLP_hidden_layer_sizes1,
						"MLP_hidden_layer_sizes2" : MLP_hidden_layer_sizes2,
						"MLP_hidden_layer_sizes3" : MLP_hidden_layer_sizes3,
						"MLP_max_iter" : MLP_max_iter,
						"MLP_shuffle" : MLP_shuffle

					}
				}).done( function( info ){
					var response = JSON.parse(info);
					responseData = response.fileResponse;

					readTextFile(responseData, function(text){
				    var data = JSON.parse(text);
				    console.log(data);
						//trabajamos con la respuesta...
						if (data.errorExec.exec_algorithm == "OK"){
							job = response.job;
							location.href="responseTraining.php?job="+job+"&alg=9";
						}else{
							console.log("Error");
						}
					});
				});
			}

			if (algorithm == 10){//NuSVC

				var NuSVC_kernel = $("#initNewJob #NuSVC_kernel").val();
				var NuSVC_nu = $("#initNewJob #NuSVC_nu").val();
				var NuSVC_degree = $("#initNewJob #NuSVC_degree").val();
				var NuSVC_gamma = $("#initNewJob #NuSVC_gamma").val();

				//evaluamos los valores por defecto...
				if (NuSVC_kernel == "Default"){
					NuSVC_kernel = "rbf";
				}

				if (NuSVC_nu == null || NuSVC_nu == ""){
					NuSVC_nu = 0.5;
				}

				if (NuSVC_degree == null || NuSVC_degree == ""){
					NuSVC_degree = 3;
				}

				if (NuSVC_gamma == null || NuSVC_gamma == ""){
					NuSVC_gamma = 0.001;
				}

				//hacemos la llamada por ajax para ejecutar el algoritmo...
				$.ajax({
					method: "POST",
					url: "../php/classifier/execNuSVC.php",
					data: {
						"nameJob"   : nameJob,
						"descJob"   : descJob,
						"algorithm"   : algorithm,
						"val" : 10,
						"NuSVC_kernel" : NuSVC_kernel,
						"NuSVC_gamma" : NuSVC_gamma,
						"NuSVC_degree" : NuSVC_degree,
						"NuSVC_nu" : NuSVC_nu
					}
				}).done( function( info ){
					var response = JSON.parse(info);
					responseData = response.fileResponse;

					readTextFile(responseData, function(text){
						var data = JSON.parse(text);
						console.log(data);
						//trabajamos con la respuesta...
						if (data.errorExec.exec_algorithm == "OK"){
							job = response.job;
							location.href="responseTraining.php?job="+job+"&alg=10";
						}else{
							console.log("Error");
						}
					});
				});
			}

			if (algorithm == 11){//RandomForestClassifier

				var rf_n_estimators = $("#initNewJob #rf_n_estimators").val();
				var rf_criterion = $("#initNewJob #rf_criterion").val();
				var rf_bootstrap = $("#initNewJob #rf_bootstrap").val();
				var rf_min_samples_split = $("#initNewJob #rf_min_samples_split").val();
				var rf_min_samples_leaf = $("#initNewJob #rf_min_samples_leaf").val();

				//evaluamos los valores por defecto...
				if (rf_criterion == "Default"){
					rf_criterion = "gini";
				}

				if (rf_bootstrap == "Default"){
					rf_bootstrap = "True";
				}

				if (rf_n_estimators == null || rf_n_estimators == ""){
					rf_n_estimators = 200;
				}

				if (rf_min_samples_split == null || rf_min_samples_split == ""){
					rf_min_samples_split = 2;
				}

				if (rf_min_samples_leaf == null || rf_min_samples_leaf == ""){
					rf_min_samples_leaf = 1;
				}

				//hacemos la llamada por ajax para ejecutar el algoritmo...
				$.ajax({
					method: "POST",
					url: "../php/classifier/execRandomForest.php",
					data: {
						"nameJob"   : nameJob,
						"descJob"   : descJob,
						"algorithm"   : algorithm,
						"val" : 10,
						"rf_criterion" : rf_criterion,
						"rf_bootstrap" : rf_bootstrap,
						"rf_n_estimators" : rf_n_estimators,
						"rf_min_samples_split" : rf_min_samples_split,
						"rf_min_samples_leaf" : rf_min_samples_leaf,

					}
				}).done( function( info ){
					var response = JSON.parse(info);
					responseData = response.fileResponse;

					readTextFile(responseData, function(text){
						var data = JSON.parse(text);
						console.log(data);
						//trabajamos con la respuesta...
						if (data.errorExec.exec_algorithm == "OK"){
							job = response.job;
							location.href="responseTraining.php?job="+job+"&alg=11";
						}else{
							console.log("Error");
						}
					});
				});
			}

			if (algorithm == 12){//SVC

				var SVC_kernel = $("#initNewJob #SVC_kernel").val();
				var SVC_degree = $("#initNewJob #SVC_degree").val();
				var SVC_gamma = $("#initNewJob #SVC_gamma").val();
				var SVC_C_value = $("#initNewJob #SVC_C_value").val();

				//evaluamos los valores por defecto...
				if (SVC_kernel == "Default"){
					SVC_kernel = "rbf";
				}

				if (SVC_degree == null || SVC_degree == ""){
					SVC_degree = 3;
				}

				if (SVC_gamma == null || SVC_gamma == ""){
					SVC_gamma = 0.001;
				}

				if (SVC_C_value == null || SVC_C_value == ""){
					SVC_C_value = 1;
				}

				//hacemos la llamada por ajax para ejecutar el algoritmo...
				$.ajax({
					method: "POST",
					url: "../php/classifier/execSVC.php",
					data: {
						"nameJob"   : nameJob,
						"descJob"   : descJob,
						"algorithm"   : algorithm,
						"val" : 10,
						"SVC_kernel" : SVC_kernel,
						"SVC_gamma" : SVC_gamma,
						"SVC_degree" : SVC_degree,
						"SVC_C_value" : SVC_C_value,

					}
				}).done( function( info ){
					var response = JSON.parse(info);
					responseData = response.fileResponse;

					readTextFile(responseData, function(text){
						var data = JSON.parse(text);
						console.log(data);
						//trabajamos con la respuesta...
						if (data.errorExec.exec_algorithm == "OK"){
							job = response.job;
							location.href="responseTraining.php?job="+job+"&alg=12";
						}else{
							console.log("Error");
						}
					});
				});
			}

    });
});

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
