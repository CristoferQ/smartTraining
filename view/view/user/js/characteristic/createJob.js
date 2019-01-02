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
			$('#loading').show();
			var nameJob = $("#initNewJob #nameJob").val();
			var descJob = $("#initNewJob #descJob").val();
      var processJob = $("#initNewJob #processJob").val();

			if (processJob == 1){//correlation option
				$.ajax({
					method: "POST",
					url: "../php/characteristic/execCorrelation.php",
					data: {
						"nameJob"   : nameJob,
						"descJob"   : descJob
					}
				}).done( function( info ){
					var response = JSON.parse(info);
					responseData = response.fileResponse;
					console.log(response);
					readTextFile(responseData, function(text){
						var data = JSON.parse(text);
						console.log(data);
						//trabajamos con la respuesta...
						if (data.Response == "OK"){
							location.href="responseCorrelation.php?job="+response.job;
						}else{
							console.log("Job Error");
						}
					});

				});
			}
    });
});

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
