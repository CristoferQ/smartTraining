$(window).on('load', function() {

	listar();
	removeDataSet();

});

$.fn.DataTable.ext.pager.numbers_length = 5;

var listar = function(){
	var t = $('#dataSets').DataTable({
		"responsive": true,
		"destroy":true,
		"ajax":{
			"method":"POST",
			"url": "../php/dataSet/showDataSet.php"
		},
		"columns":[
			{"data":"nameDataSet"},
			{"data":"createdDataSet"},
			{"data":"tipoDataSet"},
			{"data":"job"},
			{"defaultContent": "<button type='button' class='download btn btn-success'><i class='fa fa-download'></i></button> <button type='button' class='delete btn btn-danger' data-toggle='modal' data-target='#myModalEditar'><i class='fa fa-trash'></i></button>"}
		]
	});

	getID("#dataSets tbody", t);
	getIDDownlad("#dataSets tbody", t);

}

//metodo para obtener el id y asi generar la edicion del usuario...
var getID = function(tbody, table){
	$(tbody).on("click", "button.delete", function(){
		var data = table.row( $(this).parents("tr") ).data();
		var idjob = $("#frmEditar #iddataSet").val( data.iddataSet );
	});
}

//metodo para obtener el id del job y el nombre y generar la descarga
var getIDDownlad = function(tbody, table){
	$(tbody).on("click", "button.download", function(){
		var data = table.row( $(this).parents("tr") ).data();
		var job = data.job;
		var nameDataSet = data.nameDataSet;
		var user = 1;
		location.href="../../../dataStorage/"+user+"/"+job+"/"+nameDataSet;
	});
}

var removeDataSet = function(){
	$("#editar-user").on("click", function(){

		var iddataSet = $("#frmEditar #iddataSet").val();

		$.ajax({
			method: "POST",
			url: "../php/dataSet/dropDataSet.php",
			data: {
					"iddataSet"   : iddataSet
				}

		}).done( function( info ){

			var json_info = JSON.parse( info );
			mostrar_mensaje( json_info );
			location.reload(true);
		});
	});
}

var mostrar_mensaje = function( informacion ){

	var texto = "", color = "";
	if( informacion.response == "BIEN" ){
		texto = "<strong>Ok!</strong> Job deleted successful!.";
		color = "#379911";
	}else{
		texto = "<strong>Error</strong>, It is not feasible delete this job.";
		color = "#C9302C";
	}

	$(".mensaje").html( texto ).css({"color": color });
	$(".mensaje").fadeOut(5000, function(){
		$(this).html("");
		$(this).fadeIn(3000);
	});
}
