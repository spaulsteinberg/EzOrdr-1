  $.ajax({
		url:"http://localhost:5000/orders",
		type: "GET",
		dataType: 'json',
		success: function(data){
			console.log(data);
			for(let i = 0; i < data.length; i++){
				console.log(data[i]);
				console.log(data[i]['appetizerOrder']);
			}
			//data = JSON.parse(data[0])
			//console.log(data)
			//email = data.email;
			//_id = data._id;
			//password = data.password;

			/*
			var desserts = data.dessertOrder;
			var dessertsComma = desserts.replace("\n",", ");
			var sides = data.sideOrder;
			var sidesComma = sides.replace("\n",", ");
			var burritos = data.burritoOrder;
			var burritosComma = burritos.replace("\n",", ");*/


			$(document).ready(function(){
				//$("#email").append("email " + email);
				//$("#_id").append("ID " + _id);
				//$("#password").append("Password: " +password);

				//$("#dessertsQ").append("Desserts: " +dessertsComma);
				//$("#sidesQ").append("Sides: " +sidesComma);
				//$("#burritosQ").append("Burritos: " +burritosComma);

				/* Try creating a new div for each order, appending to a paragraph, and then to the body */
				var dessert = "<div>"+ dessertsComma +"</div>";
				$("body").append(dessert);
			});
		},
		error: function() {
			console.log("Failure");
		}
	});

