$(document).ready(function() {
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

        if (algorithm == 8){

					var job=parse.job;
					location.href="responseJob.php?job="+job+"&user=1";
				}
			});
    });

});
