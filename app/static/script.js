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
function senddata(){
	// Sending and receiving data in JSON format using POST method
	var xhr = new XMLHttpRequest();
	var url = "url";
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var json = JSON.parse(xhr.responseText);
			console.log(json.email + ", " + json.password);
		}
	};
	var data = JSON.stringify({"email": "hey@mail.com", "password": "101010"});
	xhr.send(data);
}
    