$(document).ready(function() {

  histogramSiluetas();
  histogramCalinski();

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

var histogramSiluetas = function(){

  var job = getQuerystring('job');
  var user = getQuerystring('user');
  var url = "http://localhost/smartTraining/dataStorage/"+user+"/"+job+"/ResponseProcess_Job_Clustering.csv";
  console.log(url);
  Plotly.d3.csv(url, function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) {
          return row[key.replace('.',' ')];
        });
    }

    var trace1 = {
      x: unpack(rows,'silhouette_score'),
      name: 'control',
      autobinx: true,
      histnorm: "count",
      marker: {
        color: "rgba(100, 150, 102, 0.7)",
        line: {
          color:  "rgba(100, 150, 102, 1)",
          width: 1
        }
      },
      opacity: 0.5,
      type: "histogram",
    };

    var data = [trace1];
    var layout = {
      bargap: 0.05,
      bargroupgap: 0.2,
      barmode: "overlay",
      xaxis: {title: "Value"},
      yaxis: {title: "Frequence"}
    };
    Plotly.newPlot('histogramSiluetas', data, layout);

  });
}

var histogramCalinski = function(){

  var job = getQuerystring('job');
  var user = getQuerystring('user');
  var url = "http://localhost/smartTraining/dataStorage/"+user+"/"+job+"/ResponseProcess_Job_Clustering.csv";

  Plotly.d3.csv(url, function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) {
          return row[key.replace('.',' ')];
        });
    }

    var trace1 = {
      x: unpack(rows,'calinski_harabaz_score'),
      name: 'control',
      autobinx: true,
      histnorm: "count",
      marker: {
        color: "rgba(255, 100, 102, 0.7)",
        line: {
          color:  "rgba(255, 100, 102, 1)",
          width: 1
        }
      },
      opacity: 0.5,
      type: "histogram",
    };

    var data = [trace1];
    var layout = {
      bargap: 0.05,
      bargroupgap: 0.2,
      barmode: "overlay",
      xaxis: {title: "Value"},
      yaxis: {title: "Frequence"}
    };
    Plotly.newPlot('histogramCalinski', data, layout);

  });
}
