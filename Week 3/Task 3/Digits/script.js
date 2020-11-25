
var con = document.createElement("div");
con.setAttribute("class","container");

var hdb = document.createElement("h1");
hdb.setAttribute("class","display-1");
hdb.style.justifyContent = "center";
hdb.innerText = "8 Unique Digits Generator";
con.appendChild(hdb);


var div1 = document.createElement("div");
div1.setAttribute("class","row");
div1.style.marginTop = "40%"
con.appendChild(div1);


var result1 = document.createElement("p");
result1.setAttribute("class","col-6 md-offset-6")
result1.setAttribute("id","result");
result1.innerHTML = "Generated Number : "
div1.appendChild(result1);

var butt = document.createElement("button");
butt.setAttribute("type","button");
butt.setAttribute("class","btn btn-primary col-4 md-offset 6");
butt.setAttribute("id","sub");
butt.innerHTML = "Generate";


div1.appendChild(butt);

document.body.append(con);



var but = document.getElementById("sub");


but.onclick = function () {

    result1.innerHTML = ""
  let min = 10000000;
  let max = 100000000;
  let result = randomn(min, max);

  while (!check(result)) {
    result = randomn(min, max);
  }
  displayresult(result);
}

function randomn(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function check(num) {
    let digitarr = String(num).split("");
    let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    for (i of digits) {
        if (digitarr.filter((data) => data == i).length > 1) {
            return false;
        }else {

        }
    }
    return true;
}

function displayresult(data) {
  result1.innerHTML += "Generated Number : " + data;
}
