var baseDiv = document.createElement("div");
baseDiv.setAttribute("class","container");

var div1 = document.createElement("div");
div1.setAttribute("id","highScores");
div1.setAttribute("class","flex-center flex-column");

var h11 = document.createElement("h1");
h11.setAttribute("id","finalScore");
h11.innerHTML = "High Scores";

var ul1 = document.createElement("ul");
ul1.setAttribute("id","highScoresList");

var but1 = document.createElement("button");
but1.setAttribute("id","goHome");
but1.setAttribute("class","btn");
but1.setAttribute("onclick","location.href = './index.html';");
but1.innerHTML = "Go Home";

div1.appendChild(h11);
div1.appendChild(ul1);
div1.appendChild(but1);

baseDiv.appendChild(div1);

document.body.append(baseDiv);

const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");