$(document).ready(function() {

	var job = getQuerystring('job');
	///var/www/html/smartTraining/dataStorage/1/1547613663/PCTPCA_1547613663.csv
	var nameDocument = "http://localhost/smartTraining/dataStorage/1/"+job+"/varianzaExplained_"+job+".csv";

	Plotly.d3.csv(nameDocument, function(err, rows){

		function unpack(rows, key) {
				return rows.map(function(row) { return row[key.replace('.',' ')]; });
		}

		var attributes = unpack(rows,'Component');

		var importance = unpack(rows,'Variance');


		//make color...
		colorValues = [];
		for (i=0; i<importance.length; i++){
			if (i<3){
				colorValues[i] = 'rgba(222,45,38,0.8)';
			}else{
				colorValues[i] = 'rgba(204,204,204,1)';
			}
		}
		var trace1 = {
		  x: attributes,
		  y: importance,
		  marker:{
		    color: colorValues
		  },
		  type: 'bar'
		};

		var layout = {
		  yaxis: {
		    title: 'Explanation of variance for components (%)',
		  }
		};
		var data = [trace1];


		Plotly.newPlot('relevance', data, layout);

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
