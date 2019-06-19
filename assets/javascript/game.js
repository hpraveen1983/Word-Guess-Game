//Create an array of words from which we can randomly pick a word for the user to guess
var wordlist = ["hover", "scandal", "withdraw", "time", "tycoon", "relief", "revenge", "drill", "carriage", "resident"];

//We should be able to randomly pick a word from the array

var rWord = wordlist[Math.floor(Math.random() * wordlist.length)];


//We should be able to display the number of characters in the word to the user

var dispArr = [];
for (var i = 0; i < rWord.length; i++) {
    dispArr[i] = "_";
    //alert("Your progress: "+dispArr[i])
}

//How many characters were guessed and the remaining characters should be stored

var ralpha = rWord.length;
var wins = 0;
var loss = 0;

//set guess count to zero
var guessCount = 0;

//Create an array that does not have any value inside of it. This can be used to store all guesses
var lArr = [];

//while loop where the remaining alphabet is greater than zero
while (ralpha > 0) {

    alert(dispArr.join(" "));


    //User's guess

    var userGuess = prompt("What is your guess?");
    guessCount = guessCount + 1;

    //Scenarios involved where remaining alphabets is greater than zero

    if (userGuess == null) { break; }
    else if (userGuess.length !== 1) {
        alert("Enter one alphabet please!");
    } else if (guessCount > 10) {
        //loss=alert("You lost the game")
        loss++;
        break;
    }
    else {
        for (var x = 0; x < rWord.length; x++) {
            if (rWord[x] === userGuess) {
                dispArr[x] = userGuess;
                ralpha--;
                lArr.push(dispArr[x]);
            }
        }
        if (lArr.length === rWord.length) {
            wins++;
        }
    }
}

document.getElementById("guess-log").innerHTML = guessCount;
document.getElementById("remaining-alpha").innerHTML = loss;
document.getElementById("win-log").innerHTML = wins;
document.getElementById("rword").innerHTML = rWord;
//document.getElementById("totalGuess").innerHTML = 





