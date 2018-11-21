//Global variables
// Used to record how many times a letter can be pressed
var doubleWord = ['a','b','c',
				  'd','e','f',
				  'g','h','i',
				  'j','k','l',
				  'm','n','o',
				  'p','q','r',
				  's','t','u',
				  'v','w','x',
                  'y','z'];
                  
           
const wordBank = ['elf','noel','carols','frosty','naughty','nice','snowflake','rudolph','grinch','fairy','angel','holiday','family'];
let randNum = [Math.floor(Math.random() * wordBank.length)];
let choosenWord = wordBank[randNum];
let wrongWord = [];
let underScore = [];
let reset = [];

//Dom manipulation
let docUnderScore = document.getElementsByClassName('underScore');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');
console.log(choosenWord);

//Main
//=============================================================
// Split chosen word into an array


//let  generateUnderScore = () => {
    for(let i = 0; i < choosenWord.length; i++){
        underScore.push('_');
       console.log(choosenWord);
    }
 //   return underScore;
//}
 //console.log(choosenWord);

//Push underScore on to page

//underScore.push(keyword);
var stuff = document.getElementById("underScore");
// console.log(stuff);
stuff.innerHTML = underScore.join(' ')

//var stuff = document.getElementById("underScore");
//console.log(stuff);
//stuff.innerHTML("<p>Blah</p>");
// console.log(document.getElementById("underScore"))
//get user guess

document.addEventListener('keypress', (event) => { 
let keyword = String.fromCharCode(event.keyCode)// if users guess is right
   if(choosenWord.indexOf(keyword) > -1){

	
    //add to right words array
   
//replace undrscore with right letter
     underScore[choosenWord.indexOf(keyword)] = keyword;
     console.log(choosenWord.indexOf(keyword), underScore); 
     stuff.innerHTML = underScore;
     //docUnderScore[0].innerHTML = underScore.join(' ');
     //choosenWord[0].innerHTML = rightGuess;
// checks to see if user word matches guesses 
    if(underScore.join('') == choosenWord) {
    alert('You Win');
   
}
   }  
   else{
       wrongWord.push(keyword);
       docWrongGuess[0].innerHTML = wrongWord;
   } 
    });
    function resetGame() {
        remainingGuesses = maxTries;
        gameStarted = false;}
        document.onkeydown = function(event) {
            // If we finished a game, dump one keystroke and reset.
            if(hasFinished) {
                resetGame();
                hasFinished = false;
            } else {
                // Check to make sure a-z was pressed.
                if(event.keyCode >= 65 && event.keyCode <= 90) {
                    makeGuess(event.key.toLowerCase());
                }
            }
        };