$(window).on('load', function() {

	cargarInfo();

});

var cargarInfo = function(){
	$.ajax({
			method:"POST",
			url: "php/index/loadDataPanel.php",

		}).done( function( info ){
			$(".panel1").html( info.panel1 );
			$(".panel2").html( info.panel2 )
			$(".panel3").html( info.panel3 )
			$(".panel4").html( info.panel4 )

		});
}
