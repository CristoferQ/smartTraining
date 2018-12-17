$(window).on('load', function() {

	cargarInfo();

});

var cargarInfo = function(){
	$.ajax({
			method:"POST",
			url: "php/statisticsData/loadDataPanel.php",

		}).done( function( info ){
			$(".userMost").html( info.userMost );
			$(".countries").html( info.countries )
			$(".institution").html( info.institution )
			$(".jobs").html( info.jobs )

		});
}
