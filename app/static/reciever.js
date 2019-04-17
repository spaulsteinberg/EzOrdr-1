  $.ajax({
		url:"http://localhost:5000/orders",
		type: "GET",
		dataType: 'json',
		success: function(data){
			// console.log(data);
			// for(let i = 0; i < data.length; i++){
			// 	console.log(data[i]);
			// 	console.log(data[i]['appetizerOrder']);
			// }
			//data = JSON.parse(data[0])
			//console.log(data)
			//email = data.email;
			//_id = data._id;
			//password = data.password;
			for(let i = 0; i < data.length; i++){
				var desserts = data[i].dessertOrder;
				var dessertsComma = desserts.replace("\n",", ");
				var sides = data[i].sideOrder;
				var sidesComma = sides.replace("\n",", ");
				var burritos = data[i].burritoOrder;
				var burritosComma = burritos.replace("\n",", ");	
				var appetizer = data[i].appetizerOrder;
				var appetizerComma = burritos.replace("\n",", ");
				var burgers = data[i].burgerOrder;
				var burgerComma = burgers.replace("\n",", ");
				$(document).ready(function(){
					/* Try creating a new div for each order, appending to a paragraph, and then to the body */
					var sides = "<div> Sides:  "+ sidesComma +"</div>";
					var burritos = "<div> Burritos:  "+ burritosComma +"</div>";
					var dessert = "<div> Dessert:  "+ dessertsComma +"</div>";
					var appetizer = "<div> Appetizer:  "+ appetizerComma +"</div>";
					var burger = "<div> Burger:  "+ burgerComma +"</div>";
					$("body").append(appetizer);
					$("body").append(sides);
					$("body").append(burritos);
					$("body").append(burger);
					$("body").append(burritos);
					$("body").append(dessert);
				});
			}
		},
		error: function() {
			console.log("Failure");
		}
	});

