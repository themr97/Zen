// DOM Creation

var con = document.createElement("div");
con.setAttribute("class","container");

var h1d = document.createElement("h1");
h1d.setAttribute("class","display-1");
h1d.setAttribute("class","text-center");
h1d.innerText = "Hangman Game"
con.appendChild(h1d);


var div1 = document.createElement("div")
div1.setAttribute("class","float-right");
div1.innerHTML = `Wrong Guesses: <span id='mistakes'>0</span> of <span id='maxWrong'></span></div><br>`
con.appendChild(div1);

var div2 = document.createElement("div")
div2.setAttribute("class","text-center");
con.appendChild(div2);

var img1 = document.createElement("img");
img1.setAttribute("id","hangmanPic");
img1.style.width = '15%';
img1.style.marginLeft = '150px'
img1.src = './img/0.png';
div2.appendChild(img1);

var p1 = document.createElement("p");
p1.setAttribute("id","wordSpotlight");
div2.appendChild(p1);

var keyboard = document.createElement("div");
keyboard.setAttribute("id","keyboard");
div2.appendChild(keyboard);

var but1 = document.createElement("button");
but1.setAttribute("class","btn btn-info");
but1.innerText = "Try Again";
div2.appendChild(but1);


document.body.append(con);





//  MAIN JS




var programming_languages = [
	"python",
	"javascript",
	"json",
	"java",
	"csharp",
	"php",
	"sql",
	"ruby"
]

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
  answer = programming_languages[Math.floor(Math.random() * programming_languages.length)];
}

function generateButtons() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangmanPicture();
  }
}

function updateHangmanPicture() {
  document.getElementById('hangmanPic').src = './img/' + mistakes + '.PNG';
}

function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = 'Correct answer! You Won!';
  }
}

function checkIfGameLost() {
  if (mistakes === maxWrong) {
    document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
    document.getElementById('keyboard').innerHTML = 'You Lost';
  }
}

function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
  document.getElementById('wordSpotlight').innerHTML =`Guess the programing language! : ${wordStatus}`;
}

function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}

but1.onclick = function () {
  mistakes = 0;
  guessed = [];
  document.getElementById('hangmanPic').src = './img/0.PNG';

  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
}

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generateButtons();
guessedWord();
