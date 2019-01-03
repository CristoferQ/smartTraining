$(document).ready(function() {

	var job = getQuerystring('job');
	var nameDocument = "http://localhost/smartTraining/dataStorage/1/"+job+"/rankingImportance_"+job+".csv";

	Plotly.d3.csv(nameDocument, function(err, rows){

		function unpack(rows, key) {
				return rows.map(function(row) { return row[key.replace('.',' ')]; });
		}

		var attributes = unpack(rows,'feature');

		var importance = unpack(rows,'importance');
		for (i=0; i<importance.length; i++){
			importance[i] = importance[i]*100;
		}

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
		    title: 'Relevance in Percentage',
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
