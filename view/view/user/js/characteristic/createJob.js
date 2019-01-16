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
			var kindDataSet = $("#initNewJob #kindDataSet").val();

			if (processJob == 1){//correlation option
				$.ajax({
					method: "POST",
					url: "../php/characteristic/execCorrelation.php",
					data: {
						"nameJob"   : nameJob,
						"descJob"   : descJob,
						"kindDataSet" : kindDataSet
					}
				}).done( function( info ){
					var response = JSON.parse(info);

					if (response.exec== "ERROR"){
						$('#loading').hide();
						$('#errorResponse').show();
						setTimeout("location.href=''", 5000);
					}else{
						responseData = response.fileResponse;
						console.log(response);
						readTextFile(responseData, function(text){
							var data = JSON.parse(text);
							console.log(data);
							//trabajamos con la respuesta...
							if (data.Response == "OK"){
								location.href="responseCorrelation.php?job="+response.job;
							}else{
								$('#loading').hide();
								$('#errorResponse').show();
								setTimeout("location.href=''", 5000);
							}
						});
					}
				});
			}else if (processJob == 2) {
				$.ajax({
					method: "POST",
					url: "../php/characteristic/execSpatial.php",
					data: {
						"nameJob"   : nameJob,
						"descJob"   : descJob,
						"kindDataSet" : kindDataSet
					}
				}).done( function( info ){
					var response = JSON.parse(info);

					if (response.exec== "ERROR"){
						$('#loading').hide();
						$('#errorResponse').show();
						setTimeout("location.href=''", 5000);
					}else{
						responseData = response.fileResponse;
						console.log(response);
						readTextFile(responseData, function(text){
							var data = JSON.parse(text);
							console.log(data);
							//trabajamos con la respuesta...
							if (data.Response == "OK"){
								location.href="responseSpatial.php?job="+response.job;

							}else{
								$('#loading').hide();
								$('#errorResponse').show();
								setTimeout("location.href=''", 5000);
							}
						});
					}
				});
			}else if (processJob == 4) {
				$.ajax({
					method: "POST",
					url: "../php/characteristic/execMutualInformation.php",
					data: {
						"nameJob"   : nameJob,
						"descJob"   : descJob,
						"kindDataSet" : kindDataSet
					}
				}).done( function( info ){
					var response = JSON.parse(info);

					if (response.exec== "ERROR"){
						$('#loading').hide();
						$('#errorResponse').show();
						setTimeout("location.href=''", 5000);
					}else{
						responseData = response.fileResponse;
						console.log(response);
						readTextFile(responseData, function(text){
							var data = JSON.parse(text);
							console.log(data);
							//trabajamos con la respuesta...
							if (data.Response == "OK"){
								//location.href="responseSpatial.php?job="+response.job;
								console.log("Exec OK!!!");
							}else{
								$('#loading').hide();
								$('#errorResponse').show();
								setTimeout("location.href=''", 5000);
							}
						});
					}
				});
			}else if (processJob == 3) {
				$.ajax({
					method: "POST",
					url: "../php/characteristic/execPCA.php",
					data: {
						"nameJob"   : nameJob,
						"descJob"   : descJob,
						"kindDataSet" : kindDataSet
					}
				}).done( function( info ){
					var response = JSON.parse(info);

					if (response.exec== "ERROR"){
						$('#loading').hide();
						$('#errorResponse').show();
						setTimeout("location.href=''", 5000);
					}else{
						responseData = response.fileResponse;
						console.log(response);
						readTextFile(responseData, function(text){
							var data = JSON.parse(text);
							console.log(data);
							//trabajamos con la respuesta...
							if (data.Response == "OK"){
								location.href="responsePCA.php?job="+response.job;
								console.log("Exec OK!!!");
							}else{
								$('#loading').hide();
								$('#errorResponse').show();
								setTimeout("location.href=''", 5000);
							}
						});
					}
				});
			}
			else if (processJob == 6) {
				$.ajax({
					method: "POST",
					url: "../php/characteristic/execPCAIncremental.php",
					data: {
						"nameJob"   : nameJob,
						"descJob"   : descJob,
						"kindDataSet" : kindDataSet
					}
				}).done( function( info ){
					var response = JSON.parse(info);

					if (response.exec== "ERROR"){
						$('#loading').hide();
						$('#errorResponse').show();
						setTimeout("location.href=''", 5000);
					}else{
						responseData = response.fileResponse;
						console.log(response);
						readTextFile(responseData, function(text){
							var data = JSON.parse(text);
							console.log(data);
							//trabajamos con la respuesta...
							if (data.Response == "OK"){
								location.href="responseIncrementalPCA.php?job="+response.job;
								console.log("Exec OK!!!");
							}else{
								$('#loading').hide();
								$('#errorResponse').show();
								setTimeout("location.href=''", 5000);
							}
						});
					}
				});
			}else if (processJob == 5) {
				$.ajax({
					method: "POST",
					url: "../php/characteristic/execKernelPCA.php",
					data: {
						"nameJob"   : nameJob,
						"descJob"   : descJob,
						"kindDataSet" : kindDataSet
					}
				}).done( function( info ){
					var response = JSON.parse(info);

					if (response.exec== "ERROR"){
						$('#loading').hide();
						$('#errorResponse').show();
						setTimeout("location.href=''", 5000);
					}else{
						responseData = response.fileResponse;
						console.log(response);
						readTextFile(responseData, function(text){
							var data = JSON.parse(text);
							console.log(data);
							//trabajamos con la respuesta...
							if (data.Response == "OK"){
								location.href="responseKPCA.php?job="+response.job;
								console.log("Exec OK!!!");
							}else{
								$('#loading').hide();
								$('#errorResponse').show();
								setTimeout("location.href=''", 5000);
							}
						});
					}
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
