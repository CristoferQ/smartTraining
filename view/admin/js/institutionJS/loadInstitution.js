$(window).on('load', function() {

	listar();
});

$.fn.DataTable.ext.pager.numbers_length = 5;

var listar = function(){
	var t = $('#users').DataTable({
		"responsive": true,
		"destroy":true,
		"ajax":{
			"method":"POST",
			"url": "../php/institution/showData.php"
		},
		"columns":[
			{"data":"idinstitution"},
			{"data":"nameInstitution"},
			{"data":"name"},
			{"data":"createdInstitution"},
			{"data":"modifiedInstitution"}
		]
	});
}
