$(window).on('load', function() {

	listar();
	removeJob();

});

$.fn.DataTable.ext.pager.numbers_length = 5;

var listar = function(){
	var t = $('#jobs').DataTable({
		"responsive": true,
		"destroy":true,
		"order": [[ 5, "desc" ]],
		"ajax":{
			"method":"POST",
			"url": "../php/jobs/showJobs.php"
		},
		"columns":[
			{"data":"idjob"},
			{"data":"nameJob"},
			{"data":"descriptionJob"},
			{"data":"tipo_job"},
			{"data":"statusJob"},
			{"data":"createdJob"},
			{"data":"modifiedJob"},
			{"defaultContent": "<button type='button' class='detail btn btn-success'><i class='fa fa-file'></i></button> <button type='button' class='delete btn btn-danger' data-toggle='modal' data-target='#myModalEditar'><i class='fa fa-trash'></i></button>"}
		]
	});

	getID("#jobs tbody", t);
	getIDForDetail("#jobs tbody", t);

}

//metodo para obtener el id y asi generar la edicion del usuario...
var getID = function(tbody, table){
	$(tbody).on("click", "button.delete", function(){
		var data = table.row( $(this).parents("tr") ).data();
		var idjob = $("#frmEditar #idjob").val( data.idjob );
	});
}

//metodo para obtener el id y asi generar la edicion del usuario...
var getIDForDetail = function(tbody, table){
	$(tbody).on("click", "button.detail", function(){
		var data = table.row( $(this).parents("tr") ).data();
		var idjob = data.idjob;
		var tipo = data.tipo_job;

		if (tipo == "CORRELATION"){

			location.href="../characteristic/responseCorrelation.php?job="+idjob;

		}else if (tipo == "CHARACTERISTICS") {

			location.href="../characteristic/responseSpatial.php?job="+idjob;

		}else if (tipo == "CLASSIFICATION") {
			location.href="../training/responseTraining.php?job="+idjob;

		}else if (tipo == "PREDICTION") {
			location.href="../prediction/responseTraining.php?job="+idjob;

		}else if (tipo == "CLUSTERING-FULL") {
			location.href="../clustering/responseJob.php?job="+idjob+"&user=1";

		}else if (tipo == "CLUSTERING") {
			location.href="../clustering/viewResult.php?job="+idjob+"&user=1";
		}




	});
}


var removeJob = function(){
	$("#editar-user").on("click", function(){

		var idjob = $("#frmEditar #idjob").val();

		$.ajax({
			method: "POST",
			url: "../php/jobs/dropJob.php",
			data: {
					"idjob"   : idjob
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
