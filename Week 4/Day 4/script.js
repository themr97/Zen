var baseDiv = document.createElement("div");
baseDiv.setAttribute("class","container");

var div1 = document.createElement("div");
div1.setAttribute("id","home");
div1.setAttribute("class","flex-center flex-column");

var h11 = document.createElement("h1");
h11.innerHTML = "OpenTrivia Quiz";

var but1 = document.createElement("button");
but1.setAttribute("id","play");
but1.setAttribute("class","btn");
but1.setAttribute("onclick","location.href = './game.html';");
but1.innerHTML = "Play";

var but2 = document.createElement("button");
but2.setAttribute("id","highscores");
but2.setAttribute("class","btn");
but2.setAttribute("onclick","location.href = './highscores.html';");
but2.innerHTML = "High Scores";

div1.appendChild(h11);
div1.appendChild(but1);
div1.appendChild(but2);

baseDiv.appendChild(div1);

document.body.append(baseDiv);