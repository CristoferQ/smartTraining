$(document).ready(function() {

	loadInfoAlgorithm();
	loadTables();

});


//funcion para cargar las performance y summary process
function loadTables(){

	var job = getQuerystring('job');
	var nameFile = "http://localhost/smartTraining/dataStorage/1/"+job+"/responseTraining"+job+".json";

	readTextFile(nameFile, function(text){
		var data = JSON.parse(text);
		$(".precision").html(data.Performance.precision);
		$(".accuracy").html(data.Performance.accuracy);
		$(".recall").html(data.Performance.recall);
		$(".f1_score").html(data.Performance.f1);
		$(".fbeta").html(data.Performance.fbeta);
		$(".negloss").html(data.Performance.neg_log_loss);

		//creamos el text para los params...
		$(".algorithm").html(data.algorithm);
		$(".params_values").html(JSON.stringify(data.Params));
		$(".validation").html(data.Validation);
		$(".curveROC").html(data.errorExec.curveRoc);
		$(".learningCurve").html(data.errorExec.curveLearning);
		$(".precision_recall").html(data.errorExec.precisionCurve);
		
	});
}
//funcion para cargar las imagenes

//funcion para cargar la definicion del algoritmo
function loadInfoAlgorithm(){

	var algorithm = getQuerystring('alg');
	if (algorithm == 2){//AdaBoostClassifier

		var title = "AdaBoostClassifier definition";
		var resume = "The core principle of AdaBoost is to fit a sequence of weak learners (i.e., models that are only slightly better than random guessing, such as small decision trees) on repeatedly modified versions of the data. The predictions from all of them are then combined through a weighted majority vote (or sum) to produce the final prediction.";
		$(".algorithmValue").html(title);
		$(".explanation").html(resume);

	}
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
