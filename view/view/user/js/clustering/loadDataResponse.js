$(window).on('load', function() {

	listar();
});

$.fn.DataTable.ext.pager.numbers_length = 5;

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

//listamos los datos...
var listar = function(){
	var job = getQuerystring('job');
	var url = "../php/clustering/loadDataCSV.php?job="+job;
	console.log(url);
  var t = $('#summary').DataTable({
      
      "responsive": true,
      "dom": '<"newtoolbar">frtip',

      "destroy":true,
      "ajax":{
        "method":"POST",
        "url": url
      },

      "columns":[
        {"data":"algorithm"},
        {"data":"params"},
        {"data":"groups"},
        {"data":"calinski_harabaz_score"},
        {"data":"silhouette_score"}
      ]
  });
  $('#demo-custom-toolbar2').appendTo($("div.newtoolbar"));
}
