$(window).on('load', function() {

	var id=0;
	var email = 0;

	listarData(id, email);
	console.log("Valor de id: "+id);
	console.log(email);

	editProfile();
	getID(id, email);

});

$.fn.DataTable.ext.pager.numbers_length = 5;

var listarData = function(id, email){

	$.ajax({
			method:"POST",
			url: "../php/profile/showData.php",

		}).done( function( info ){

			var info = JSON.parse(info);
			$(".nameUser").html( info.nameUser );
			$(".fullName").html( info.fullName );
			$(".emailUser").html( info.emailUser );
			$(".institution").html( info.nameInstitution );
			$(".country").html( info.name );
			id=info.iduserMOSST;
			email = info.email;
		});

}

//metodo para obtener el id y asi generar la edicion del usuario...
var getID = function(id, email){
	$("#editProfile").on("click", function(){

		var iduserMOSST = $("#frmEditar #iduserMOSST").val(id);
		var email = $("#frmEditar #emailUser").val(email);
	});
}

var editProfile = function(){

	console.log("iuuuyt");
}
