$(function () {
	var processed_json = new Array();
	$.getJSON('../php/dataSet/showJobsByStatus.php', function(data) {
		// Populate series
		for (i = 0; i < data.length; i++){
			var cantidad = parseInt(data[i].cantidad);
			processed_json.push([data[i].tipoDataSet, cantidad]);
		}

		// draw chart
        $('#dataSetKind').highcharts({
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
						name: 'Kind Data Set',
            data: processed_json
			}]
		});
	});
})
