//Create an array of words from which we can randomly pick a word for the user to guess
var wordlist = ["trait", "hover", "blame", "basin", "raise", "title", "shell", "tight", "chalk", "study", "blade",
"issue", "guard", "spill", "tiger"];

//We should be able to randomly pick a word from the array

var rnumber = wordlist[Math.floor(Math.random() * wordlist.length)]; 

//We should be able to display the number of characters in the word to the user

var dArr = [];
for (var i = 0; i < rnumber.length; i++) {
dArr[i] = "_";
}

//How many characters were guessed and the remaining characters should be stored

var ralpha=rnumber.length;


//While loop to keep guessing the word


//User's guess



//Scenarios involved while guessing
Scenario1
Scenario2
Scenario3


//if the character is part of the guess word then update display array



