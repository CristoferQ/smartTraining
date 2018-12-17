$(window).on('load', function() {

	listar();
	editar();
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

$.fn.DataTable.ext.pager.numbers_length = 5;

var listar = function(){
	var data = getQuerystring('data');
	var t = $('#users').DataTable({
		"responsive": true,
		"order": [[ 4, "desc" ]],
		"destroy":true,
		"ajax":{
			"method":"POST",
			"url": "../php/usersJobs/showData.php?data="+data
		},
		"columns":[
			{"data":"idjob"},
			{"data":"nameJob"},
			{"data":"descriptionJob"},
			{"data":"statusJob"},
			{"data":"createdJob"},
			{"defaultContent": "<button type='button' class='editar btn btn-primary' data-toggle='modal' data-target='#myModalEditar'><i class='fa fa-pencil-square-o'></i></button>"}
		]
	});

	getID("#users tbody", t);
	getIDredirect("#users tbody", t);
}

//metodo para obtener el id y asi generar la edicion del usuario...
var getID = function(tbody, table){
	$(tbody).on("click", "button.editar", function(){
		var data = table.row( $(this).parents("tr") ).data();
		var idjob = $("#frmEditar #idjob").val( data.idjob );
	});
}

//metodo para obtener el id y redireccionar a
var getIDredirect = function(tbody, table){
	$(tbody).on("click", "button.jobsUser", function(){
		var data = table.row( $(this).parents("tr") ).data();
		var iduserMOSST = data.iduserMOSST;
		location.href="../jobsUser?data="+iduserMOSST;
	});
}

var editar = function(){
	$("#editar-user").on("click", function(){

		var idjob = $("#frmEditar #idjob").val();
		var status = $("#frmEditar #status").val();

		$.ajax({
			method: "POST",
			url: "../php/usersJobs/editData.php",
			data: {
					"idjob"   : idjob,
					"status" : status
				}

		}).done( function( info ){

			var json_info = JSON.parse( info );
			//mostrar_mensaje( json_info );
			location.reload(true);
		});
	});
}
