var container = document.createElement("div");
container.setAttribute("class","container");
console.log(container);

var tt = document.createElement("div");

tt.style.postion = "relative";
tt.style.textAlign = "center";
tt.style.height = "30%";
tt.style.backgroundColor = "rgb(73, 61, 61)";
tt.style.borderBottomStyle = "solid";

var img12 = document.createElement("img");

img12.style.clipPath="circle(40%)";

img12.setAttribute("src","1.png");

tt.appendChild(img12);

container.appendChild(tt);


var ddv = document.createElement("div");
ddv.setAttribute("class","display-1");
ddv.style.fontSize = "xx-large";
ddv.style.backgroundColor = "orange";
ddv.style.padding = "5px";


ddv.innerText="MAHESH RANPISE";

tt.appendChild(ddv);

var div2 = document.createElement("div");
div2.setAttribute("style","background-color:white;");
div2.innerText="Vashi, Navi Mumbai 400703| 9619287478 | mahesh8276@gmail.com | themr.me";
tt.appendChild(div2);


var brow = document.createElement("div");

brow.setAttribute("class","row");
brow.style.marginTop = "20px";

var leftsec = document.createElement("div");


leftsec.className = "col-6";
leftsec.style.textAlign = "justify";
leftsec.style.borderRight = "2px";
leftsec.style.borderRightStyle = "solid";
leftsec.innerHTML = "<div><div style='font-size: x-large;'><i class='fas fa-user-circle'></i> Profile</div><br> My aim in life is to be successful in my field of work & motto is to preserve to the highest point& secure a position where I can effectively contribute my skills and abilities in the IT industry asa professional possessing competent technical skill.</div><br><br><br><div><div style='font-size: xx-large;'><i class='fas fa-keyboard'></i></i> Skills</div><br><div style='text-align: center; font-size: larger;'>Technical Skills</div><br><br><br><div>JavaScript &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='range' value='70' class='slider' id='myRange'><br> Python &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='range' value='50' class='slider' id='myRange2'><br> HTML and CSS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='range' value='60' class='slider' id='myRange5'><br> Java &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='range' value='90' class='slider' id='myRange3'><br> C++ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='range' value='90' class='slider' id='myRange4'></div> </div>";



var rightsec = document.createElement("div");


rightsec.className = "col-6";
rightsec.style.textAlign = "justify";
rightsec.innerHTML = "<div><div style='font-size: xx-large;'><i class='fas fa-university'></i> Education</div><br><div>B.E in <b>Information Technology</b> from Saraswati College of Engineering Kharghar <b>2017-2020</b></div><ul><b>Projects done</b><li>Wall Crack Detection using Image Processing.</li><li>IOT Wireless Notice Board for College</li><li>Smart Farming using IOT</li></ul></div><div>Diploma in <b>Computer Technology</b> from Bharati Vidyapeeth College of Information Technology <b>2015-2017</b></div><ul><b>Projects Done</b><li>Android Application : Buddy Tracker</li><li>Java Application: Library Management</li></ul></div>";



brow.appendChild(leftsec);
brow.appendChild(rightsec);
container.appendChild(brow);
document.body.append(container);



