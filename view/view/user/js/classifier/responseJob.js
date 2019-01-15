$(document).ready(function() {

	loadInfoAlgorithm();
	loadTables();
	showDefinitionData();
	loadImagenes();

});

function loadImagenes(){

	var job = getQuerystring('job');
	var nameFile = "http://localhost/smartTraining/dataStorage/1/"+job+"/responseTraining"+job+".json";

	readTextFile(nameFile, function(text){
		var data = JSON.parse(text);

		//confusion matriz
		if (data.errorExec.confusionMatrix == "ok"){
			var img = document.getElementById('confusionMatrixImg');
    	img.src= "http://localhost/smartTraining/dataStorage/1/"+job+"/confusionMatrix_"+job+".svg";
		}else{
			var img = document.getElementById('confusionMatrixImg');
    	img.src= "http://localhost/smartTraining/view/user/resourceData/error.png";
		}

		if (data.errorExec.curveRoc == "ok"){
			var img = document.getElementById('curveRocImg');
    	img.src= "http://localhost/smartTraining/dataStorage/1/"+job+"/curveRoc_"+job+".svg";
		}else{
			var img = document.getElementById('curveRocImg');
    	img.src= "http://localhost/smartTraining/view/user/resourceData/error.png";
		}

		if (data.errorExec.curveLearning == "ok"){
			var img = document.getElementById('learningCurveImg');
    	img.src= "http://localhost/smartTraining/dataStorage/1/"+job+"/curveLearning_"+job+".svg";
		}else{
			var img = document.getElementById('learningCurveImg');
    	img.src= "http://localhost/smartTraining/view/user/resourceData/error.png";
		}

		if (data.errorExec.precisionCurve == "ok"){
			var img = document.getElementById('precisionCurveImg');
    	img.src= "http://localhost/smartTraining/dataStorage/1/"+job+"/precision_recall_curve_"+job+".svg";
		}else{
			var img = document.getElementById('precisionCurveImg');
    	img.src= "http://localhost/smartTraining/view/user/resourceData/error.png";
		}

	});
}
function showDefinitionData(){

  var algorithm = getQuerystring('algorithm');
  console.log(algorithm);
	var nameFile = "http://localhost/smartTraining/view/user/resourceData/dataDefinitions.json";

	readTextFile(nameFile, function(text){
		var data = JSON.parse(text);

		$(".confusionMatrixDef").html(data.curveRepresentation[0].definition);
		$(".curveRocDef").html(data.curveRepresentation[1].definition);
    $(".learningCurveDef").html(data.curveRepresentation[2].definition);
		$(".precisionCurveDef").html(data.curveRepresentation[3].definition);

		$(".precisionDef").html(data.definitionPerformanceCla[0].definition);
		$(".accuracyDef").html(data.definitionPerformanceCla[1].definition);
    $(".recallDef").html(data.definitionPerformanceCla[2].definition);
		$(".f1_scoreDef").html(data.definitionPerformanceCla[4].definition);
		$(".fbetaDef").html(data.definitionPerformanceCla[5].definition);
		$(".neglossDef").html(data.definitionPerformanceCla[3].definition);

	});

}

//funcion para cargar las performance y summary process
function loadTables(){

	var job = getQuerystring('job');
	var nameFile = "http://localhost/smartTraining/dataStorage/1/"+job+"/responseTraining"+job+".json";

	readTextFile(nameFile, function(text){
		var data = JSON.parse(text);
		var params_values = JSON.stringify(data.Params).replace(new RegExp("{", 'g'), "");
		var params_values = params_values.replace(new RegExp("}", 'g'), "");
		var params_values = params_values.replace(new RegExp("\"", 'g'), "");
		var params_values = params_values.replace(new RegExp(",", 'g'), " ");
		console.log(params_values);


		$(".precision").html(parseFloat(data.Performance.precision).toFixed(4)*100+"%");
		$(".accuracy").html(parseFloat(data.Performance.accuracy).toFixed(4)*100+"%");
		$(".recall").html(parseFloat(data.Performance.recall).toFixed(4)*100+"%");
		$(".f1_score").html(parseFloat(data.Performance.f1).toFixed(4)*100);
		$(".fbeta").html(parseFloat(data.Performance.fbeta).toFixed(4)*100);
		$(".negloss").html(parseFloat(data.Performance.neg_log_loss).toFixed(2));

		//creamos el text para los params...
		$(".algorithm").html(data.algorithm);
		$(".params_values").html(params_values);
		$(".validation").html(data.Validation);
		$(".curveROC").html(data.errorExec.curveRoc);
		$(".learningCurve").html(data.errorExec.curveLearning);
		$(".precision_recall").html(data.errorExec.precisionCurve);

	});
}
//funcion para cargar las imagenes

//funcion para cargar la definicion del algoritmo
function loadInfoAlgorithm(){

	var job = getQuerystring('job');
	var nameFile = "http://localhost/smartTraining/view/user/resourceData/dataDefinitions.json";
	var algorithm = getQuerystring('alg');

	readTextFile(nameFile, function(text){

		var data = JSON.parse(text);
		$(".algorithmValue").html(data.classificationAlgorithm[algorithm].nameAlgorithm);
		$(".explanation").html(data.classificationAlgorithm[algorithm].definition);
		$(".paramsDefinition").html(data.classificationAlgorithm[algorithm].params);

	});
}
//funcion para recuperar la clave del valor obtenido por paso de referencia
function getQuerystring(key, default_) {
  if (default_ == null)
    default_ = "";
  key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regex = new RegExp("[\\?&amp;]"+key+"=([^&amp;#]*)");
  var qs = regex.exec(window.location.href);
  if(qs == null)
    return default_;
  else
    return qs[1];
};

//read document
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
