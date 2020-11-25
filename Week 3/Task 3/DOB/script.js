var con = document.createElement("div");
con.setAttribute("class","container");


var hdb = document.createElement("h1");
hdb.setAttribute("class","display-1");
hdb.style.justifyContent = "center";
hdb.innerText = "Age Difference Calculator";
con.appendChild(hdb);

var form1 = document.createElement("div");
form1.setAttribute("class","form-group row");
form1.style.marginTop = "30%";

con.appendChild(form1);

var lab = document.createElement("label");
lab.setAttribute("for","dob");
lab.setAttribute("class","col-14 col-form-label");
lab.innerText = "Enter Date of Birth";
form1.appendChild(lab);

var div1 = document.createElement("div");
div1.setAttribute("class","col-4");
form1.appendChild(div1);


var input1 = document.createElement("input");
input1.setAttribute("class","form-control");
input1.setAttribute("type","date");
input1.setAttribute("id","dob");
div1.appendChild(input1);

var butt = document.createElement("button");
butt.setAttribute("type","button");
butt.setAttribute("class","btn btn-primary col-4");
butt.setAttribute("id","sub");
butt.innerHTML = "Submit";
form1.appendChild(butt);

var pre = document.createElement("p");
pre.setAttribute("id","result");
con.appendChild(pre);



document.body.append(con);

var but = document.getElementById("sub");

var res = document.getElementById("result");
 
var currentDate = new Date();

but.onclick = function (){ 

    var tt = new Date(input1.value);
    var milli =  currentDate.getTime() - tt.getTime();

    let year = Math.floor(milli / (1000 * 3600 * 24 * 365));
    let month  = year * 12;
    let day = Math.floor(milli / (1000 * 3600 * 24));
    let minutes = Math.floor(milli / (1000 * 60));
    let seconds =   Math.floor(milli / 1000);

    if(tt == 'Invalid Date')
    {
        alert("Enter a Date!!");
    }
    else if(2020 < tt.getFullYear){
        alert("Enter year less or equal to 2020!!");
    }
    else{

        document.getElementById("result").innerHTML = ""

        document.getElementById("result").innerHTML += `Result: <br> Day Diffference: ${day} <br>  Year Difference: ${year} <br>   Month Difference:  ${month} <br>   Minutes Difference:  ${minutes} <br>  Seconds Difference:   ${seconds} <br>   Milliseconds Difference: ${milli}`;

    }           

};