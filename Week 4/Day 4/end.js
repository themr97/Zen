var baseDiv = document.createElement("div");
baseDiv.setAttribute("class","container");

var div1 = document.createElement("div");
div1.setAttribute("id","end");
div1.setAttribute("class","flex-center flex-column");

var h11 = document.createElement("h1");
h11.setAttribute("id","finalScore");

var form1 = document.createElement("form");

var inp1 = document.createElement("input");
inp1.setAttribute("type","text");
inp1.setAttribute("id","username");
inp1.setAttribute("name","username");
inp1.setAttribute("placeholder","Your Name");

var but1 = document.createElement("button");
but1.setAttribute("id","saveScoreBtn");
but1.setAttribute("class","btn");
but1.setAttribute("type","submit");
but1.setAttribute("onclick","saveHighScore(event)");

but1.disabled = true;
but1.innerHTML = "Save Your Score";

form1.appendChild(inp1);
form1.appendChild(but1);

var but2 = document.createElement("button");
but2.setAttribute("id","playAgain");
but2.setAttribute("class","btn");
but2.setAttribute("onclick","location.href = './game.html';");
but2.innerHTML = "Play Again";

var but3 = document.createElement("button");
but3.setAttribute("id","goHome");
but3.setAttribute("class","btn");
but3.setAttribute("onclick","location.href = './index.html';");
but3.innerHTML = "Go Home";

div1.appendChild(h11);
div1.appendChild(form1);
div1.appendChild(but2);
div1.appendChild(but3);

baseDiv.appendChild(div1);

document.body.append(baseDiv);


const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');
};