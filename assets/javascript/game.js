//Global variables
const word = ['mistletoe','jinglebells','eggnog','naughty','nice','nutcracker','cookies','jolly','elves','snowman'];

let randNum = Math.floor(Math.random() * word.length);
let choosenWord = word[randNum];
//let word = [];
let wrongWord = [];
let underScore = [];

//Dom manipulation
let docUnderScore = document.getElementsByClassName('underScore');
let docWrongGuess = document.getElementsByClassName('wrongGuess');
//Main
//=============================================================

// Split chosen word into an array


//create underscore based on length of word

//let  generateUnderScore = () => {
    for(let i = 0; i < choosenWord.length; i++){
        underScore.push('_');
       console.log(underScore);
    }
 //   return underScore;
//}
 console.log(choosenWord);

//Push underScore on to page
//underScore.push(keyword);
var stuff = document.getElementById("underScore");
console.log(stuff);
stuff.innerHTML("<p>Blah</p>");
// console.log(document.getElementById("underScore"))


//get user guess
document.addEventListener('keypress', (event) => { 
   let keyword = String.fromCharCode(event.keyCode);
// if users guess is right
   if(choosenWord.indexOf(keyword) > -1){
//add to right words array
    rightWord.push(keyword);
   

//replace undrscore with right letter
     underScore[choosenWord.indexOf(keyword)] = keyword; 
     docUnderScore[0].innerHTML = underScore.join(' ');
     rightWord[0].innerHTML = rightGuess;
// checks to see if user word matches guesses 
    if(underScore.join('') == choosenWord){
    alert('You Win');
   
}
   }  
   else{
       wrongWord.push(keyword);
       docWrongGuess[0].innerHTML = wrongWord;
   } 
    });

