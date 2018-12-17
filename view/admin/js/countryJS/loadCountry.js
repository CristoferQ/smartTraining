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
			"url": "../php/country/showData.php"
		},
		"columns":[
			{"data":"idcountry"},
			{"data":"name"},
			{"data":"createdCountry"},
			{"data":"modifiedCountry"}
		]
	});
}
