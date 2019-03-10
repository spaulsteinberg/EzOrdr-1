var TestFunction = "Viktort";
	$.ajax({
		url:"http://localhost:5000/orders",
		type: "GET",
		dataType: 'json',
		success: function(data){
			console.log("Success");
			//var data = JSON.parse(data)
			TestFunction = data.email;
			$(document).ready(function(){
				$("p").append(TestFunction);
			});
		},
		error: function() {
			console.log("Failure");
			TestFunction = "failure";
		}
	});

