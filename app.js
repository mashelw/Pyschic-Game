

	var wins = 0;
	var losses = 0;
	var guessesLeft = 10;
	var wrongGuesses = [];
	var computerChoice = "";
	var userChoice = "";

	function computerMakesChoice() {
		var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		var randomIndex = Math.floor(Math.random () * alphabet.length);
		computerChoice = alphabet[randomIndex];
		console.log('computerChoice', computerChoice);
	}
	
	function gameReset(){
		guessesLeft = 10;
		wrongGuesses = [];
		computerMakesChoice();
	}

		document.onkeyup = function(event) {
			
			userChoice = event.key;
			console.log(userChoice);
		
			if(userChoice === computerChoice){
				wins++;
				alert("Awesome, you are psychic!");
				document.querySelector('#wins').innerHTML = "Wins: " + wins;
				console.log('wins', wins);
				console.log(computerChoice);
				gameReset();
			}	
			else if(guessesLeft === 0){
				losses++;
				document.querySelector('#losses').innerHTML = "Losses: " + losses;
				alert("You are not psychic! That's okay.");
				console.log('losses', losses);
				console.log('guessesLeft', guessesLeft);
				console.log(computerChoice);
				gameReset();
			}

			else {
				guessesLeft--;
				wrongGuesses.push(userChoice);
				document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
				document.querySelector('#wrongGuesses').innerHTML = "Letters used: " + wrongGuesses;
				console.log('wrongGuesses', wrongGuesses);
				console.log('userChoice', userChoice);
				console.log('guessesLeft', guessesLeft);
				console.log(computerChoice);
			}}

			gameReset();
		

		