$(window).on('load', function() {

	listar();
	removeJob();
	guardar();

});

$.fn.DataTable.ext.pager.numbers_length = 5;

var listar = function(){
	var t = $('#jobs').DataTable({
		"responsive": true,
		"dom": '<"newtoolbar">frtip',
		"destroy":true,
		"order": [[ 5, "desc" ]],
		"ajax":{
			"method":"POST",
			"url": "../php/queue/showJobs.php"
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

	$('#demo-custom-toolbar2').appendTo($("div.newtoolbar"));
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

		var statusJob = data.statusJob;

		if (statusJob == "INIT"){
			$('#init').show();
			setTimeout("location.href=''", 3000);
		}

		if (statusJob == "PROCESSING"){
			$('#processing').show();
			setTimeout("location.href=''", 3000);
		}

		if (statusJob == "ERROR"){
			$('#errorResponse').show();
			setTimeout("location.href=''", 3000);
		}

	});
}

var guardar = function(){
	$("#add-job").on("click", function(){

		var name = $("#frmAgregar #name").val();
		var desc = $("#frmAgregar #desc").val();
		var option = $("#frmAgregar #option").val();

		$.ajax({
			method: "POST",
			url: "../php/queue/addData.php",
			data: {
					"name"   : name,
					"desc"   : desc,
					"option"   : option
				}

		}).done( function( info ){

			var json_info = JSON.parse( info );
			console.log(json_info);
			mostrar_mensaje( json_info );
			location.reload(true);
		});
	});
}


var removeJob = function(){
	$("#editar-user").on("click", function(){

		var idjob = $("#frmEditar #idjob").val();

		$.ajax({
			method: "POST",
			url: "../php/queue/dropJob.php",
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
	if( informacion.exec == "OK" ){
		texto = "<strong>Ok!</strong> Job add successful!.";
		color = "#379911";
	}else{
		texto = "<strong>Error</strong>, It is not feasible add this job.";
		color = "#C9302C";
	}

	$(".mensaje").html( texto ).css({"color": color });
	$(".mensaje").fadeOut(5000, function(){
		$(this).html("");
		$(this).fadeIn(3000);
	});
}
