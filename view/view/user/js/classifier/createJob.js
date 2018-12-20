$(document).ready(function() {

	$(function() {

    $('#algorithm').change(function(){

				if($('#algorithm').val() == 1) {//All
						$('#kData').hide();
						$('#linkageValues').hide();
						$('#affinityValues').hide();
				}

				if($('#algorithm').val() == 5) {//Affinity
						$('#kData').hide();
						$('#linkageValues').hide();
						$('#affinityValues').hide();
				}

				if($('#algorithm').val() == 6) {//Mean
						$('#kData').hide();
						$('#linkageValues').hide();
						$('#affinityValues').hide();
				}

				if($('#algorithm').val() == 7) {//DBScan
						$('#kData').hide();
						$('#linkageValues').hide();
						$('#affinityValues').hide();
				}

				if($('#algorithm').val() == 2) {//K-Means
            $('#kData').show();
						$('#linkageValues').hide();
						$('#affinityValues').hide();
				}
				if($('#algorithm').val() == 3) {//Birch
		            $('#kData').show();
								$('#linkageValues').hide();
								$('#affinityValues').hide();
        }

				if($('#algorithm').val() == 4) {//Agglomerative
            $('#kData').show();
						$('#linkageValues').show();
						$('#affinityValues').show();
        }
    });
	});

	$('#initNewJob').bootstrapValidator({
				feedbackIcons: {
						valid: 'glyphicon glyphicon-ok',
						invalid: 'glyphicon glyphicon-remove',
						validating: 'glyphicon glyphicon-refresh'
				},
				fields: {
						nameJob: {
								validators: {
										notEmpty: {
												message: 'The nameJob is required'
										}
								}
						},
						descJob: {
								validators: {
										notEmpty: {
												message: 'The description Job is required'
										}
								}
						}
				}
		}).on('success.form.bv', function(e) {
			e.preventDefault();
			div = document.getElementById('loading');
			div.style.display = '';
			var nameJob = $("#initNewJob #nameJob").val();
			var descJob = $("#initNewJob #descJob").val();
      var algorithm = $("#initNewJob #algorithm").val();

			if (algorithm == 1){//esta trabajando con todos los algoritmos en metodo exploratorio o servicio
				$.ajax({
					method: "POST",
					url: "../php/clustering/createJob.php",
					data: {
						"nameJob"   : nameJob,
						"descJob"   : descJob,
	          "algorithm"   : algorithm
					}
				}).done( function( info ){
					var parse = JSON.parse(info);

	        var job=parse.job;
					location.href="responseJob.php?job="+job+"&user=1";

				});
			}else{//seleccion de un algoritmo con sus respectivos parametros
				kValues = $("#initNewJob #kValues").val();
				linkageValues = $("#initNewJob #linkage").val();
				affinityValues = $("#initNewJob #affinity").val();

				$.ajax({
					method: "POST",
					url: "../php/clustering/createJobOneProcess.php",
					data: {
						"nameJob"   : nameJob,
						"descJob"   : descJob,
	          "algorithm"   : algorithm,
						"kValues"   : kValues,
						"linkageValues"   : linkageValues,
	          "affinityValues"   : affinityValues,
					}
				}).done( function( info ){
					var parse = JSON.parse(info);
					console.log(parse);
					var job=parse.job;
					location.href="viewResult.php?job="+job+"&user=1";

				});
			}
    });

});
