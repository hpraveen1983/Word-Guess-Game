//Create an array of words from which we can randomly pick a word for the user to guess
var wordlist = ["trait"];

//We should be able to randomly pick a word from the array

var rnumber = wordlist[Math.floor(Math.random() * wordlist.length)];

//number of guesses remaining 

//var guessesLeft;


//We should be able to display the number of characters in the word to the user

var dispArr = [];
for (var i = 0; i < rnumber.length; i++) {
    dispArr[i] = "_";
    //alert("Your progress: "+dispArr[i])
}

//How many characters were guessed and the remaining characters should be stored

var ralpha = rnumber.length;

var guessCount=0;
//var rGuess=8;
var lArr=[];

while (ralpha > 0) {
    alert(dispArr.join(" "));


    //User's guess

    var uGuess = prompt("What is your guess?");
    guessCount=guessCount+1;
    //document.getElementById("empty-div1").innerHTML = guessCount;
/*     rGuess=rGuess-guessCount;
        alert("You have "+rGuess+" guesses remaining"); */


    //Scenarios involved where remaining alphabets is greater than zero

    if (uGuess == null) { break;}
    else if (uGuess.length !== 1) {
        alert("Enter one alphabet please!");
    }  else if(guessCount>7) {
        document.write("You lost the game");
        break;
    }     
    else {
        for (var x = 0; x < rnumber.length; x++) {
            if (rnumber[x] === uGuess) {
                dispArr[x] = uGuess;
                    ralpha--;
                    //alert(dispArr[x]);
                    lArr.push(dispArr[x])
                    //document.getElementById("empty-div2").innerHTML = ralpha;
/*                     rGuess=rGuess-guessCount;
                    alert("You have "+rGuess+" guesses remaining");    */         
/*                     console.log(ralpha);
                guessesLeft=(8-ralpha);
                alert("You have "+ guessesLeft+" more characters to guess") */
               
            } 
        }
    }

}  
document.getElementById("guess-log").innerHTML = lArr;
document.getElementById("remaining-alpha").innerHTML = ralpha;

/* else if(guessCount>=8) {
    alert("You lost the game")
}  */
//alert(dispArr.join(" "));

//document.write("<h1> You Guessed the Word!<h1>");
//document.write("It took you "+guessCount+ " tries to get the word "+rnumber);



