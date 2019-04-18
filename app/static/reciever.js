  $.ajax({
		url:"http://localhost:5000/orders",
		type: "GET",
		dataType: 'json',
		success: function(data){
			for(let i = 0; i < data.length; i++){
				var desserts = data[i].dessertOrder;
				var dessertsComma = desserts.replace("\n",", ");
				var sides = data[i].sideOrder;
				var sidesComma = sides.replace("\n",", ");
				var burritos = data[i].burritoOrder;
				var burritosComma = burritos.replace("\n",", ");	
				var appetizer = data[i].appetizerOrder;
				var appetizerComma = appetizer.replace("\n",", ");
				var burgers = data[i].burgerOrder;
				var burgerComma = burgers.replace("\n",", ");

				var orderID = data[i]._id.$oid;

				var sides = "Sides:  "+ sidesComma +"<br>";
				var burritos = "Burritos:  "+ burritosComma +"<br>";
				var dessert = "Dessert:  "+ dessertsComma +"<br>";
				var appetizer = "Appetizer:  "+ appetizerComma +"<br>";
				var burger = "Burger:  "+ burgerComma;
				
				var $newdiv = $("<div id = '" + orderID + "'>" + "<p>" + orderID + "<input type='checkbox' name = '" + orderID + "' class = 'order'></p>" + sides + burritos + dessert + appetizer + burger + "</div>")
				$("body").prepend($newdiv);
			}
		},
		error: function() {
			console.log("Failure");
		}
	});

	function parse_order(selector){
		var items=document.getElementsByClassName(selector);
		var selectedItems="";
		console.log(items);
		for(var i=0; i<items.length; i++){
			if(items[i].type=="checkbox" && items[i].checked==true){
				selectedItems+=items[i].name+",";
			}	
		}
		//alert(selectedItems);
		selectedItems = JSON.stringify(selectedItems);
		console.log(selectedItems);
		return selectedItems;
	}
	
	function deleteOrders(){
		var items = parse_order("order");
		var xhr = new XMLHttpRequest();
		var url = "http://localhost:5000/orders";
		xhr.open("PUT", url, true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4 && xhr.status === 200) {
				var json = JSON.parse(xhr.responseText);
				console.log("Success: deleted order from server");
			}
		};
		xhr.send(items);
	}