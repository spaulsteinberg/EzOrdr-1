  $.ajax({
		url:"http://localhost:5000/orders",
		type: "GET",
		dataType: 'json',
		success: function(data){
			console.log("Success");
			//var data = JSON.parse(data)
			email = data.email;
			_id = data._id;
			password = data.password
			$(document).ready(function(){
				$("#email").append("email " + email);
				$("#_id").append("ID " + _id);
				$("#password").append("Password: " +password);
			});
		},
		error: function() {
			console.log("Failure");
		}
	});

