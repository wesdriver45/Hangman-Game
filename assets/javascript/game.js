


//display letter user chose, a list of 12 guesses


//use an alphabet array
//var playerChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var wordList = [];
var guessesLeft = 12;
var guessesMade = [];

//user chooses a letter - use  var userguess = String.fromCharCode(event.keyCode).toLowerCase();
document.onkeyup = function(event) {

	var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
	//var userGuess = event.key;
	
	//display guesses so far
	guessesMade.push(userGuess);

	console.log(userGuess);



	
	// if (userGuess === computerGuess) {
	// 	wins++;
	// 	guessesLeft = 12;
	// 	guessesMade = [];

	// }
	// else {
	// 	guessesLeft--;
	// }
	// 	//reset game at end

	// if (guessesLeft === 0) {
	// 	losses++;
	// 	guessesLeft = 12;
	// 	guessesMade = [];
	// }	
	
	var html = "<p>Press any key to get started!</p><br>" +
				//"<p>Current Word: "" + + "</p><br>" +
				//"<p>Number of Guesses Remaining: " + guessesLeft + "</p><br>" +
				"<p>Letters Already Guessed: " + guessesMade + "</p>"

	document.querySelector("#game").innerHTML = html;
};

 			   
