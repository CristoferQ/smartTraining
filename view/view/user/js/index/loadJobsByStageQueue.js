$(function () {
	var processed_json = new Array();
	$.getJSON('php/index/showJobsByStatusQueue.php', function(data) {
		// Populate series
		for (i = 0; i < data.length; i++){
			var cantidad = parseInt(data[i].cantidad);
			processed_json.push([data[i].statusJob, cantidad]);
		}

		if (processed_json.length == 0){
			$(".jobsQueueAlert").html( "No data available in the system yet." );
		}else{
			// draw chart
	        $('#jobsQueue').highcharts({
				chart: {
					plotBackgroundColor: null,
					plotBorderWidth: null,
					plotShadow: false,
					type: 'pie'
				},

				plotOptions: {
					pie: {
						allowPointSelect: true,
						cursor: 'pointer',
						dataLabels: {
							enabled: false
						},
						showInLegend: true
					}
				},
				credits: {
				  enabled: false
				},

				title: {
					text: ""
				},

	            series: [{
					name: 'Categoría',
	                data: processed_json
				}]
			});
		}
	});
})
