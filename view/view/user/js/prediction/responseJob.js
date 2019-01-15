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

		var params_values = JSON.stringify(data.Params).replace(new RegExp("{", 'g'), "");
		var params_values = params_values.replace(new RegExp("}", 'g'), "");
		var params_values = params_values.replace(new RegExp("\"", 'g'), "");
		var params_values = params_values.replace(new RegExp(",", 'g'), " ");

		//creamos el text para los params...
		$(".algorithm").html(data.algorithm);
		$(".params_values").html(params_values);
		$(".r_score").html(JSON.stringify(data.Performance.r_score));

		//obtenemos los valores de las predicciones y los reales...
		var valuesPredict = data.Performance.predict_values;
		var valuesReal = data.Performance.real_values;
		var xValues = [];
		var errorGraphic = [];

		//generamos el array con las x...
		for (i=0;i<valuesReal.length; i++){
			xValues.push(i+1);
			errorGraphic[i] = valuesReal[i]-valuesPredict[i];

		}

		//generamos el grafico...
		createGraphicData(valuesReal, valuesPredict, xValues);
		createGraphicDataOnlyTrace(errorGraphic, xValues);


	});
}

//funcion para cargar el grafico
function createGraphicData(valuesReal, valuesPredict, xValues){

	var trace1 = {
		x: xValues,
	  y: valuesReal,
	  mode: 'markers',
	  type: 'scatter',
		name: 'Real Values'
	};

	var trace2 = {
		x: xValues,
	  y: valuesPredict,
	  mode: 'lines+markers',
	  type: 'scatter',
		name: 'Predict Values',
		line: {
      line: {shape: 'spline'}
    },
	};

	var data = [trace1, trace2];

	Plotly.newPlot('predictionData', data);

}

//funcion para cargar el grafico
function createGraphicDataOnlyTrace(values, xValues){

	var trace2 = {
		x: xValues,
	  y: values,
	  mode: 'lines+markers',
		name: 'Error Values',
		line: {
      line: {shape: 'spline'}
    },
	};

	var data = [trace2];

	Plotly.newPlot('errorGraphic', data);

}


//funcion para cargar la definicion del algoritmo
function loadInfoAlgorithm(){

	var algorithm = getQuerystring('alg');
	console.log(algorithm);
	var nameFile = "http://localhost/smartTraining/view/user/resourceData/dataDefinitions.json";

	readTextFile(nameFile, function(text){
		var data = JSON.parse(text);
		$(".algorithmName").html(data.predictionAlgorithm[algorithm].nameAlgorithm);
		$(".explanation").html(data.predictionAlgorithm[algorithm].definition);
    $(".paramsDefinition").html(data.predictionAlgorithm[algorithm].params);
		$(".interpret").html(data.resultPrediction[0].definition);
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
