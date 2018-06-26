var toDos = [];

window.setTimeout(function() {
  // put all of your JS code from the lecture here
  var ans = " ";
  do {
  	ans = prompt("What would you like to do?").toLowerCase();
  	if(ans === "quit"){
  		break;
  	} else if(ans === "new") {
  		var newToDo = prompt("Enter new ToDo: ");
  		toDos.push(newToDo);
  	} else if(ans === "list") {
  		console.log("****************");
  		toDos.forEach(function(todo){
  			console.log(toDos.indexOf(todo) + ": " + todo)
  		});
  		console.log("****************");
  	} else if(ans === "delete") {
  		var delAns = Number(prompt("What index to delete?"));
  		toDos.splice(delAns, 1);
  		console.log("ToDo deleted.");
  	} else {
  		alert("Sorry, please enter a valid response.");
  	}
  } while(true);

  console.log("You quite the app.");
}, 500);