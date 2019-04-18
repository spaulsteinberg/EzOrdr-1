function addThisItemToList(elmnt) {  // elmnt is 'this' from the onclick function
		var newItemCheckboxElement = elmnt;  // element sent in function
			//= document.getElementById("House Salad"); grabbing by id
		newItem = newItemCheckboxElement.name;  // this is a string
		//console.log(typeof newItem);
		var currentListElement = document.getElementById("checkedItems");
		currentList = currentListElement.textContent;  // this is a string 
		//console.log(typeof currentList);
		
		var alreadyIn = currentList.includes(newItem); // returns true if item is already in the list
	  
		if (newItemCheckboxElement.checked == true){
			
			if (alreadyIn) {  // do nothing
			} else {
				updatedList = currentList.concat(newItem,"\n\n");
				document.getElementById("checkedItems").innerHTML = updatedList;
			}
			
		} else { // checkbox is not checked
	
			if (alreadyIn) { // item was already in there, so we want to remove it
				updatedList = currentList.replace(newItem+"\n\n", "");
				document.getElementById("checkedItems").innerHTML = updatedList; //updated list, item removed
			} else {  // do nothing
			}
		}
		}

// Convert checked menu items to json format
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
	return selectedItems;
}

function senddata(){

	var dessertsList = parse_order("desserts1");
	dessertsListString = dessertsList.toString();

	var sidesList = parse_order("sides1");
	sidesListString = sidesList.toString();
	
	var burritosList = parse_order("burritos1");
	burritosListString = burritosList.toString();

	var burgersList = parse_order("burgers1");
	burgersListString = burgersList.toString();

	var appetizersList = parse_order("appetizers1");
	appetizersListString = appetizersList.toString();

	var	data = JSON.stringify({dessertOrder: dessertsListString, sideOrder: sidesListString, 
		burritoOrder: burritosListString, burgerOrder: burgersListString, appetizerOrder: appetizersListString, order: "active"});
	console.log(data);
	// Sending and receiving data in JSON format using POST method

	if (dessertsListString.length > 0 || sidesListString.length > 0 || burritosListString.length > 0 || burgersListString.length > 0 || appetizersListString.length > 0) {
		// Object is NOT empty	
		var xhr = new XMLHttpRequest();
		var url = "http://localhost:5000/orders";
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4 && xhr.status === 200) {
				var json = JSON.parse(xhr.responseText);
				console.log("Success: sent order to server");
			}
		};
		xhr.send(data);
		var x = document.getElementById("snackbar");
		x.innerHTML = "Order submitted successfully";
		x.className = "show";
		setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
	}	
	else {
		var x = document.getElementById("snackbar");
		x.className = "show";
		setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
	}
}
