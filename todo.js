var toDos = [];

window.setTimeout(function() {
  // put all of your JS code from the lecture here
  var ans = " ";
  do {
  	ans = prompt("What would you like to do?").toLowerCase();
  	if(ans === "quit"){
  		break;
  	} else if(ans === "new") {
  		addToDo();
  	} else if(ans === "list") {
  		listToDo();
  	} else if(ans === "delete") {
  		delToDo();
  	} else {
  		alert("Sorry, please enter a valid response.");
  	}
  } while(true);

  console.log("You quite the app.");

  function addToDo() {
  	var newToDo = prompt("Enter new ToDo: ");
  		toDos.push(newToDo);
  		console.log("Added ToDo!");
  }

  function listToDo() {
  	console.log("****************");
  		toDos.forEach(function(todo, i){
  			console.log(i + ": " + todo)
  		});
  		console.log("****************");
  }

  function delToDo() {
  	var delAns = Number(prompt("What index to delete?"));
  		toDos.splice(delAns, 1);
  		console.log("ToDo deleted.");
  }
}, 500);