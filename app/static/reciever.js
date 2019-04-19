//Big function to pull and format new orders from 
//database for display on page
var pollOrder = function(){
	$.ajax({
		url:"http://localhost:5000/orders",
		type: "GET",
		dataType: 'json',
		success: function(data){
			for(let i = 0; i < data.length; i++){
				//Grab items ordered and remove newlines
				var db_desserts = data[i].dessertOrder.replace("\n",", ");
				var db_sides = data[i].sideOrder.replace("\n",", ");
				var db_burritos = data[i].burritoOrder.replace("\n",", ");
				var db_burgers = data[i].burgerOrder.replace("\n",", ");
				var db_appetizers = data[i].appetizerOrder.replace("\n",", ");
				
				//Grab OrderID for identifying
				var orderID = data[i]._id.$oid;

				//Create html strings
				var sides = "<h2>Sides:</h2> <p>" + db_sides + "</p><br>";
				var burritos = "<h2>Burritos:</h2><p>" + db_burritos + "</p><br>";
				var dessert = "<h2>Desserts:</h2><p>" + db_desserts + "</p><br>";
				var appetizer = "<h2>Appetizers:</h2><p>" + db_appetizers + "</p><br>";
				var burger = "<h2>Burgers:</h2><p>" + db_burgers + "</p><br>";
				
				//Create new div with order
				var $newdiv = $("<div id = '" + orderID + "' onclick='deleteOrders(\""+ orderID + "\")'>" + sides + burritos + dessert + appetizer + burger + "</div>");
				//If order is new, add it to list
				if(document.getElementById(orderID) === null){
					$("body").prepend($newdiv);
				}
			}
		},
		error: function() {
			console.log("Failure");
		},
	});
}

//Call Ajax
pollOrder();
//Update page every 5seconds for new orders
setInterval(pollOrder,5000);

//Sends HTTPrequest to webserver to remove an entry after it has
//been clicked
function deleteOrders(id){
	var xhr = new XMLHttpRequest();
	var url = "http://localhost:5000/orders";
	xhr.open("PUT", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var json = JSON.parse(xhr.responseText);
			console.log("Success: yeeted order from server");
		}
	};
	var temp = JSON.stringify(id);
	console.log(temp);

	xhr.send(temp);
	document.getElementById(id).remove();
}