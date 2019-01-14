$(document).ready(function() {

  var job = getQuerystring('job');
  var user = getQuerystring('user');
  showDefinitionData();

  var response = "http://localhost/smartTraining/dataStorage/"+user+"/"+job+"/responseClustering.json";

  readTextFile(response, function(text){
    var data = JSON.parse(text);

    showPieChart(data.membersGroup);
    loadDataPanel(data);
  });

});


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

var showDefinitionData = function(){

  var algorithm = getQuerystring('algorithm');
  console.log(algorithm);
	var nameFile = "http://localhost/smartTraining/view/user/resourceData/dataDefinitions.json";

	readTextFile(nameFile, function(text){
		var data = JSON.parse(text);

		$(".algorithmName").html(data.clusteringAlgorithm[algorithm].nameAlgorithm);
		$(".description").html(data.clusteringAlgorithm[algorithm].definition);
    $(".paramsData").html(data.clusteringAlgorithm[algorithm].params);

	});

}

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

var loadDataPanel = function(data){

  var Calinski= data.calinski_harabaz_score;
  var silhouette_score = data.silhouette_score;
  var algorithm = data.algorithm;
  var lengthData = 0;
  for (key in data.membersGroup){

    lengthData++;
  }

  var params = "";

  for (key in data.Params){

    params = params + " " + key + ": " + data.Params[key];
  }

  $(".params").html(params);
  $(".Calinski").html( parseFloat(Calinski).toFixed(2) );
  $(".silhouette_score").html( parseFloat(silhouette_score).toFixed(2) );
  $(".lengthData").html( lengthData );
  $(".algorithm").html( algorithm );

}
var showPieChart = function(valesGraph){

  //con los datos de la informacion... generamos los arreglos asociados a la data y las legends...
  var valuesInput = [];
  var labelsInput = [];
  var index = 0;
  for (key in valesGraph){

    labelsInput[index] = key;
    valuesInput[index] = valesGraph[key];
    index++;
  }

  var data = [{
    values: valuesInput,
    labels: labelsInput,
    type: 'pie'
  }];

  Plotly.newPlot('distributionValues', data);
}
