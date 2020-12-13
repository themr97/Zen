var container = document.createElement("div");
container.setAttribute("class", "container-fluid");
var row1 = document.createElement("div");
row1.setAttribute("class", "row");
row1.style.borderBottom = '1px solid grey';
var col1 = document.createElement("div");
col1.setAttribute("class", "col");
col1.setAttribute("style", "text-align:center;");
var h2 = document.createElement("h2");
h2.innerText = "Cricket 10";
h2.setAttribute("class", "h2-display");
col1.appendChild(h2);
row1.appendChild(col1);
container.appendChild(row1);
// Team 1 hit
var row2 = document.createElement("div");
row2.setAttribute("class", "row");
row2.setAttribute("style", "padding-top:10px;padding-bottom:10px;");
row2.style.borderBottom = '1px solid grey';
var row2col1 = document.createElement("div");
row2col1.setAttribute("class", "col-md-4");
row2col1.setAttribute("style", "text-align:center;");
var team1 = document.createElement("h4");
team1.innerText = "TEAM 1 SCORE";
row2col1.appendChild(team1);
var team1score = document.createElement("h5");
team1score.setAttribute("id", "team1score");
team1score.innerText = "0";
row2col1.appendChild(team1score);
var team1btn = document.createElement("button");
team1btn.setAttribute("class", "btn btn-primary");
team1btn.setAttribute("id", "hit1");
team1btn.setAttribute("onclick", "hit1()");
team1btn.innerText = "Hit 1";
row2col1.appendChild(team1btn);
row2.appendChild(row2col1);
//Team 2 Hit
var row2col2 = document.createElement("div");
row2col2.setAttribute("class", "col-md-4");
row2col2.setAttribute("style", "text-align:center;");
var timer = document.createElement("h4");
timer.innerText = "TIMER";
row2col2.appendChild(timer);
var time = document.createElement("h4");
time.setAttribute("id", "time");
time.innerText = "60";
row2col2.appendChild(time);
row2.appendChild(row2col2);
var row2col3 = document.createElement("div");
row2col3.setAttribute("class", "col-md-4");
row2col3.setAttribute("style", "text-align:center;");
var team2 = document.createElement("h4");
team2.innerText = "TEAM 2 SCORE";
row2col3.appendChild(team2);
var team2score = document.createElement("h5");
team2score.setAttribute("id", "team2score");
team2score.innerText = "0";
row2col3.appendChild(team2score);
var team2btn = document.createElement("button");
team2btn.setAttribute("class", "btn btn-primary");
team2btn.setAttribute("onclick", "hit2()");
team2btn.setAttribute("id", "hit2");
team2btn.innerText = "Hit 2";
row2col3.appendChild(team2btn);
row2.appendChild(row2col3);
container.appendChild(row2);
var row3 = document.createElement("div");
row3.setAttribute("class", "row");
row3.setAttribute("style", "padding-top:10px;padding-bottom:5px;");
var row3col1 = document.createElement("div");
row3col1.setAttribute("class", "col-12");
row3col1.setAttribute("style", "text-align:center;");
var getres = document.createElement("button");
getres.setAttribute("class", "btn btn-primary");
getres.setAttribute("onclick", "getresult()");
getres.setAttribute("id", "getresult");
getres.innerText = "Generate Result";
row3col1.appendChild(getres);
row3.appendChild(row3col1);
container.appendChild(row3);
var row4 = document.createElement("div");
row4.setAttribute("class", "row");
var row4col1 = document.createElement("div");
row4col1.setAttribute("class", "col-md-4 table-responsive");
row4col1.setAttribute("style", "text-align:center;");
var team1scoreboard = document.createElement("h4");
team1scoreboard.innerText = "Team 1 Score Board";
row4col1.appendChild(team1scoreboard);
var table = document.createElement("table");
table.setAttribute("class", "table table-bordered");
var thead = document.createElement("thead");
var tr = document.createElement("tr");
var th = document.createElement("th");
th.setAttribute("scope", "col");
th.innerText = "TEAM1";
tr.appendChild(th);
for (var i = 1; i <= 6; i++) {
    th = document.createElement("th");
    th.setAttribute("scope", "col");
    th.innerText = "B" + i;
    tr.appendChild(th);
}
th = document.createElement("th");
th.setAttribute("scope", "col");
th.innerText = "TOTAL";
tr.appendChild(th);
thead.appendChild(tr);
table.appendChild(thead);
var tbody = document.createElement("tbody");
for (var j = 1; j <= 10; j++) {
    tr = document.createElement("tr");
    th = document.createElement("th");
    th.setAttribute("scope", "col");
    th.innerText = "Player" + j;
    tr.appendChild(th);
    for (var i = 1; i <= 6; i++) {
        th = document.createElement("th");
        th.setAttribute("scope", "col");
        th.setAttribute("id", "T1P" + j + "B" + i);
        tr.appendChild(th);
    }
    th = document.createElement("th");
    th.setAttribute("scope", "col");
    th.setAttribute("id", "T1total" + j);
    tr.appendChild(th);
    thead.appendChild(tr);
}
table.appendChild(tbody);
row4col1.appendChild(table);
row4.appendChild(row4col1);
//...........................row4 col2...............................
var row4col2 = document.createElement("div");
row4col2.setAttribute("class", "col-md-4");
row4col2.setAttribute("style", "text-align:center;padding-top:65px;");
var matchwonby = document.createElement("h3");
matchwonby.innerText = "MATCH WON BY";
row4col2.appendChild(matchwonby);
var mwb = document.createElement("h3");
mwb.setAttribute("id", "mwb");
row4col2.appendChild(mwb);
var hr = document.createElement("hr");
hr.setAttribute("style", "width:50%;text-align:center;margin-10px;");
row4col2.appendChild(hr);
var manofmatch = document.createElement("h3");
manofmatch.innerText = "MAN OF THE MATCH";
row4col2.appendChild(manofmatch);
var mom = document.createElement("h3");
mom.setAttribute("id", "manofmatch");
row4col2.appendChild(mom);
row4.appendChild(row4col2);
//............................row4 col3.................................
var row4col3 = document.createElement("div");
row4col3.setAttribute("class", "col-md-4 table-responsive");
row4col3.setAttribute("style", "text-align:center;");
var team2scoreboard = document.createElement("h4");
team2scoreboard.innerText = "Team 2 Score Board";
row4col3.appendChild(team2scoreboard);
table = document.createElement("table");
table.setAttribute("class", "table table-bordered");
thead = document.createElement("thead");
tr = document.createElement("tr");
th = document.createElement("th");
th.setAttribute("scope", "col");
th.innerText = "TEAM2";
tr.appendChild(th);
for (var i = 1; i <= 6; i++) {
    th = document.createElement("th");
    th.setAttribute("scope", "col");
    th.innerText = "B" + i;
    tr.appendChild(th);
}
th = document.createElement("th");
th.setAttribute("scope", "col");
th.innerText = "TOTAL";
tr.appendChild(th);
thead.appendChild(tr);
table.appendChild(thead);
tbody = document.createElement("tbody");
for (var j = 1; j <= 10; j++) {
    tr = document.createElement("tr");
    th = document.createElement("th");
    th.setAttribute("scope", "col");
    th.innerText = "Player" + j;
    tr.appendChild(th);
    for (var i = 1; i <= 6; i++) {
        th = document.createElement("th");
        th.setAttribute("scope", "col");
        th.setAttribute("id", "T2P" + j + "B" + i);
        tr.appendChild(th);
    }
    th = document.createElement("th");
    th.setAttribute("scope", "col");
    th.setAttribute("id", "T2total" + j);
    tr.appendChild(th);
    thead.appendChild(tr);
}
table.appendChild(tbody);
row4col3.appendChild(table);
row4.appendChild(row4col3);
container.appendChild(row4);
document.body.append(container);
// Team 1 Class
var Team1 = /** @class */ (function () {
    function Team1() {
        this.balls = [];
        this.totalscore = 0;
        this.mom = "";
        this.player = 1;
        this.ball = 1;
        this.score = 0;
    }
    Team1.prototype.hit = function () {
        var val = Math.floor(Math.random() * 6);
        console.log(val);
        this.score += val;
        this.ball++;
        return val;
    };
    Team1.prototype.skip = function () {
        this.player++;
        this.ball++;
    };
    Team1.prototype.out = function () {
        var temp = this.score;
        this.score = 0;
        this.player++;
        this.ball = 1;
        return temp;
    };
    Team1.prototype.timer = function () { };
    return Team1;
}());
// Team 2 Class
var Team2 = /** @class */ (function () {
    function Team2() {
        this.balls = [];
        this.totalscore = 0;
        this.mom = "";
        this.player = 1;
        this.ball = 1;
        this.score = 0;
    }
    Team2.prototype.hit = function () {
        var val = Math.floor(Math.random() * 6);
        this.score += val;
        this.ball++;
        return val;
    };
    Team2.prototype.skip = function () {
        this.player++;
        this.ball++;
    };
    Team2.prototype.out = function () {
        var temp = this.score;
        this.score = 0;
        this.player++;
        this.ball = 1;
        return temp;
    };
    Team2.prototype.timer = function () { };
    return Team2;
}());
var t1 = new Team1();
var t2 = new Team2();
document.getElementById("hit1").disabled = false;
document.getElementById("hit2").disabled = true;
document.getElementById("getresult").disabled = true;
var T1p = 1, score1 = 0, Totscore1 = 0;
var T2p = 1, score2 = 0, Totscore2 = 0;
var T1b = 1, inter;
var T2b = 1, man = "", max = 0, tim = 60;
cdtimer1(tim);
function hit1() {
    var val = t1.hit();
    score1 += val;
    tim = 60;
    clearInterval(inter);
    cdtimer2(tim);
    if (score1 > max) {
        max = score1;
        man = "PLAYER" + T1p + "\nTEAM1\nSCORE:" + score1;
    }
    Totscore1 += val;
    (document.getElementById("team1score")).innerText = "" + Totscore1;
    if (val !== 0) {
        (document.getElementById("T1P" + T1p + "B" + T1b)).innerText = "" + val;
        document.getElementById("hit1").disabled = true;
        document.getElementById("hit2").disabled = false;
        document.getElementById("getresult").disabled = false;
        if (T1b == 6) {
            (document.getElementById("T1total" + T1p)).innerText = "" + score1;
            T1p++;
            T1b = 1;
            score1 = 0;
            if (T1p == 11 || T2p == 11)
                getresult();
        }
        else
            T1b++;
    }
    else
        out1();
}
function hit2() {
    var val = t2.hit();
    Totscore2 += val;
    tim = 60;
    clearInterval(inter);
    cdtimer1(tim);
    (document.getElementById("team2score")).innerText = "" + Totscore2;
    score2 += val;
    if (score2 > max) {
        max = score2;
        man = "PLAYER" + T2p + "\nTEAM2\nSCORE:" + score2;
    }
    if (val !== 0) {
        (document.getElementById("T2P" + T2p + "B" + T2b)).innerText = "" + val;
        document.getElementById("hit2").disabled = true;
        document.getElementById("hit1").disabled = false;
        if (T2b == 6) {
            (document.getElementById("T2total" + T2p)).innerText = "" + score2;
            T2p++;
            T2b = 1;
            score2 = 0;
            if (T1p == 11 || T2p == 11)
                getresult();
        }
        else
            T2b++;
    }
    else
        out2();
}
function cdtimer1(tim) {
    inter = setInterval(function () {
        document.getElementById("time").innerText = "" + tim;
        tim--;
        if (tim == -1) {
            if (T1b == 6) {
                T1p++;
                T1b = 1;
            }
            else
                T1b++;
            document.getElementById("hit1").disabled = true;
            document.getElementById("hit2").disabled = false;
            tim = 60;
            cdtimer2(tim);
        }
    }, 1000);
}
function cdtimer2(tim) {
    inter = setInterval(function () {
        document.getElementById("time").innerText = "" + tim;
        tim--;
        if (tim == -1) {
            if (T2b == 6) {
                T2p++;
                T2b = 1;
            }
            else
                T2b++;
            document.getElementById("hit1").disabled = false;
            document.getElementById("hit2").disabled = true;
            tim = 60;
            cdtimer1(tim);
        }
    }, 1000);
}
function out1() {
    (document.getElementById("T1total" + T1p)).innerText = "" + score1;
    T1p++;
    T1b = 1;
    if (score1 > max) {
        max = score1;
        man = "PLAYER" + (T1p - 1) + "\nTEAM1\nSCORE:" + score1;
    }
    score1 = 0;
    document.getElementById("hit1").disabled = true;
    document.getElementById("hit2").disabled = false;
}
function out2() {
    (document.getElementById("T2total" + T2p)).innerText = "" + score2;
    T2p++;
    T2b = 1;
    if (score2 > max) {
        max = score2;
        man = "PLAYER" + (T2p - 1) + "\nTEAM2\nSCORE:" + score2;
    }
    score2 = 0;
    document.getElementById("hit1").disabled = false;
    document.getElementById("hit2").disabled = true;
}
function getresult() {
    if (Totscore1 > Totscore2) {
        document.getElementById("mwb").innerText = "TEAM1";
    }
    else {
        document.getElementById("mwb").innerText = "TEAM2";
    }
    document.getElementById("manofmatch").innerText = "" + man;
    document.getElementById("hit1").disabled = true;
    document.getElementById("hit2").disabled = true;
    clearInterval(inter);
}
