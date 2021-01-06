// DOM 

let con = document.createElement("div");
con.setAttribute("class", "container-fluid");


let bar = document.createElement("div");
bar.setAttribute("class", "row align-items-start");
bar.style.overflow = "hidden";
bar.style.position = 'fixed'
bar.style.top = '0';
bar.style.width = '100%';
bar.style.zIndex = '9';
bar.style.backgroundColor = "#fff"
con.appendChild(bar);

let div1bar = document.createElement("div");
div1bar.setAttribute("class", "align-self-center");
bar.appendChild(div1bar);

let logo = document.createElement("img");
logo.setAttribute("src", "logo.svg");
logo.setAttribute("width", "64px");
logo.setAttribute("height", "64px");
logo.innerHTML = `<a href="index.html"></a>`;
div1bar.appendChild(logo);

let div2bar = document.createElement("div");
div2bar.setAttribute("class", "col-2 align-self-center display-4");
div2bar.innerHTML = `<a href="index.html">Youtube</a>`;
bar.appendChild(div2bar);


let fsearch1 = document.createElement("div");
fsearch1.setAttribute("class", "col-4 offset-md-1 d-flex align-self-center");
bar.appendChild(fsearch1);

let search1 = document.createElement("input");
search1.setAttribute("class", "form-control me-2");
search1.setAttribute("type", "search");
search1.placeholder = 'Search';
fsearch1.appendChild(search1);

let searchbut = document.createElement("button");
searchbut.setAttribute("class", "btn btn-outline-sucess");
searchbut.setAttribute("type", "submit");
searchbut.innerHTML = "Search";
searchbut.onclick = search;
fsearch1.appendChild(searchbut)




let div3bar = document.createElement("div");
div3bar.setAttribute("class", "col-1 offset-md-3 align-self-center");
bar.appendChild(div3bar);



let login = document.createElement("button");
login.setAttribute("class", "btn btn-dark");
login.innerHTML = `<i class="far fa-user-circle"></i> Login`;
div3bar.appendChild(login);

let logout = document.createElement("button");
logout.setAttribute("class", "btn btn-dark");
logout.innerHTML = `<i class="far fa-user-circle"></i> Logout`;
div3bar.appendChild(logout);

// 2nd row

var secrow = document.createElement("div");
secrow.setAttribute("class", "row");
secrow.style.marginTop = "80px";
con.appendChild(secrow);

// Side Nav

var sidebar = document.createElement("div");
sidebar.setAttribute("class", "col-2");
sidebar.style.overflow = "hidden";
sidebar.style.position = 'fixed'
sidebar.style.top = '80px';
// sidebar.style.width = '100%';
sidebar.style.zIndex = '9';
sidebar.style.backgroundColor = "#fff"
secrow.appendChild(sidebar);

// Channel info
var rw1 = document.createElement("div");
rw1.setAttribute("class","row");
sidebar.appendChild(rw1);
var but1 = document.createElement("button");
but1.setAttribute("class", "btn btn-outline-sucess");
but1.style.margin = '20px';
but1.innerHTML = `<i class="fas fa-info"></i> Channel Info`;
but1.onclick = newDeck;
rw1.appendChild(but1);


// Create Playlist
var rw2 = document.createElement("div");
rw2.setAttribute("class","row");
sidebar.appendChild(rw2);
var but2 = document.createElement("button");
but2.setAttribute("class", "btn btn-outline-sucess");
but2.style.margin = '20px';
but2.innerHTML =  `<i class="fas fa-list"></i> Create Playlist`;
but2.onclick = playlist;
rw2.appendChild(but2);

// Subscription
var rw3 = document.createElement("div");
rw3.setAttribute("class","row");
sidebar.appendChild(rw3);
var but3 = document.createElement("button");
but3.setAttribute("class", "btn btn-outline-sucess");
but3.style.margin = '20px';
but3.innerHTML = `<i class="fas fa-address-book"></i> Subscriptions`
but3.onclick = subs;
rw3.appendChild(but3);

// Library
var rw4 = document.createElement("div");
rw4.setAttribute("class","row");
sidebar.appendChild(rw4);
var but4 = document.createElement("button");
but4.setAttribute("class", "btn btn-outline-sucess");
but4.style.margin = '20px';
but4.innerHTML = `<i class="fab fa-youtube"></i> Library`
but4.onclick = myLibrary;
rw4.appendChild(but4);


// Search Body


var deck = document.createElement("div");
deck.setAttribute("class", "col-10");
deck.style.marginLeft = "300px"
secrow.appendChild(deck);


document.body.append(con);



// GAPI DEFAULTS


const CLIENT_ID = '441588213784-10tcvb3ltc57578pmeusjnrkejjaoodh.apps.googleusercontent.com';

const DISCOVERY_DOCS = [
    'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'
];
const SCOPES = 'https://www.googleapis.com/auth/youtube';

const API = 'AIzaSyBJ1kgnhJEB5nwp9Z77UiKJFdL_b8jtyDQ';

// GAPI


function clientLoad() {
    gapi.load('client:auth2', initClient);
}


function initClient() {
    gapi.client
        .init({
            discoveryDocs: DISCOVERY_DOCS,
            clientId: CLIENT_ID,
            scope: SCOPES
        })
        .then(() => {
            // API KEY
            gapi.client.setApiKey(API);
            // Listen for sign in state changes
            gapi.auth2.getAuthInstance().isSignedIn.listen(signStatus);
            // Handle initial sign in state
            signStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
            login.onclick = handleAuthClick;
            logout.onclick = handleSignoutClick;
        });
}

function signStatus(isSignedIn) {
    if (isSignedIn) {
        login.style.display = 'none';
        logout.style.display = 'block';
    } else {
        login.style.display = 'block';
        logout.style.display = 'none';
    }
}

// Handle login
function handleAuthClick() {
    gapi.auth2.getAuthInstance().signIn();
}

// Handle logout
function handleSignoutClick() {
    gapi.auth2.getAuthInstance().signOut();
}





// Create functionality to Retrieve channel information


function newDeck() {

    deck.innerHTML = "";

    var fsearch2 = document.createElement("div");
    fsearch2.setAttribute("class", "col-4 d-flex align-self-center");
    deck.appendChild(fsearch2);

    var search2 = document.createElement("input");
    search2.setAttribute("class", "form-control me-2");
    search2.setAttribute("type", "search");
    search2.placeholder = 'Enter Username';
    fsearch2.appendChild(search2);

    var searchbut1 = document.createElement("button");
    searchbut1.setAttribute("class", "btn btn-outline-sucess");
    searchbut1.setAttribute("type", "submit");
    searchbut1.innerHTML = "Search";
    searchbut1.onclick = retriveInfo;
    fsearch2.appendChild(searchbut1)

    function retriveInfo() {

        var usrname = search2.value;
        return gapi.client.youtube.channels.list({
                "part": [
                    "snippet,contentDetails,statistics"
                ],
                "forUsername": usrname
            })
            .then(function (response) {
                    // Handle the results here (response.result has the parsed body).
                    let channel = response.result.items[0];
                    // console.log("Response", response);
                    deck.innerHTML = `<ul class="collection">
                    <li class="collection-item">Title: ${channel.snippet.title}</li>
                    <li class="collection-item">ID: ${channel.id}</li>
                    <li class="collection-item">Subscribers: ${numberWithCommas(
                      channel.statistics.subscriberCount
                    )}</li>
                    <li class="collection-item">Views: ${numberWithCommas(
                      channel.statistics.viewCount
                    )}</li>
                    <li class="collection-item">Videos: ${numberWithCommas(
                      channel.statistics.videoCount
                    )}</li>
                  </ul>
                  <p>${channel.snippet.description}</p>
                  <hr>
                `
                },
                function (err) {
                    console.error("Execute error", err);
                });
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

}





// Create functionality to Uploaded videos and system-generated playlists

function myLibrary() {

    deck.innerHTML = "";
    return gapi.client.youtube.videos.list({
            "part": [
                "snippet,contentDetails,statistics"
            ],
            "myRating": "like"
        })
        .then(function (response) {
                // Handle the results here (response.result has the parsed body).
                var likevid = document.createElement("div");
                likevid.setAttribute("class", "display-4")
                likevid.innerHTML = "Liked Videos"
                likevid.style.marginBottom = '50px';
                deck.appendChild(likevid)
                let data = response;
                for (i = 0; i < data.result.items.length; i++) {

                    var card1 = document.createElement("div");
                    card1.setAttribute("class", "card col-lg-4 col-sm-12 align-self-center");
                    card1.style.padding = '20px'
                    card1.style.display = "inline-block"
                    deck.appendChild(card1);

                    var frame1 = document.createElement("iframe");
                    frame1.setAttribute("width", "400px");
                    frame1.setAttribute("height", "200px");
                    frame1.src = `https://www.youtube.com/embed/${data.result.items[i].id}`
                    card1.appendChild(frame1);


                }

            },
            function (err) {
                if(err.status === 403){
                    window.alert("Please login");
               }
               else{
                   console.error(err);
               }
            });

}



// Create functionality to Retrieve Subscriptions and user activity.

function subs() {
    deck.innerHTML = "";


    return gapi.client.youtube.subscriptions.list({
            "part": [
                "snippet"
            ],
            "maxResults": 500,
            "mine": true
        })
        .then(function (response) {
                let data = response;
                console.log(data);
                console.log(data.result.items[0].snippet.title);
                for (i = 0; i < data.result.items.length; i++) {

                    var divsub = document.createElement("ul");
                    divsub.innerHTML = `<li>${data.result.items[i].snippet.title}</li>`;
                    deck.appendChild(divsub);

                }
            },
            function (err) {
                if (err.status === 401) {
                    window.alert("Please login");
                } else {
                    console.error(err);
                }
            });
}



// Create functionality for topic based searching and search for playlists or channels

function search() {
    var query = search1.value;
    deck.innerHTML = "";
    return gapi.client.youtube.search.list({
            "part": [
                "snippet"
            ],
            "maxResults": 24,
            "q": query
        })
        .then(function (response) {
                // Handle the results here (response.result has the parsed body).
                let data = response;
                console.log(data);
                console.log(data.result.items[0].id.videoId);
                for (i = 0; i < data.result.items.length; i++) {

                    var card1 = document.createElement("div");
                    card1.setAttribute("class", "card col-lg-4 col-sm-12 align-self-center");
                    card1.style.padding = '20px'
                    card1.style.display = "inline-block"
                    deck.appendChild(card1);

                    var frame1 = document.createElement("iframe");
                    frame1.setAttribute("width", "400px");
                    frame1.setAttribute("height", "200px");
                    frame1.src = `https://www.youtube.com/embed/${data.result.items[i].id.videoId}`
                    card1.appendChild(frame1);


                }
            },
            function (err) {
                console.error(err);
            });
}



// Create functionality to create and update a playlist. 


function playlist() {

    deck.innerHTML = "";

    var fsearch3 = document.createElement("div");
    fsearch3.setAttribute("class", "col-4 d-flex align-self-center");
    deck.appendChild(fsearch3);

    var search3 = document.createElement("input");
    search3.setAttribute("class", "form-control me-2");
    search3.setAttribute("type", "search");
    search3.placeholder = 'Enter Playlist Name!';
    fsearch3.appendChild(search3);

    var search4 = document.createElement("input");
    search4.setAttribute("class", "form-control me-2");
    search4.setAttribute("type", "search");
    search4.placeholder = 'Enter Playlist Discription!';
    fsearch3.appendChild(search4);

    var searchbut2 = document.createElement("button");
    searchbut2.setAttribute("class", "btn btn-outline-sucess");
    searchbut2.setAttribute("type", "submit");
    searchbut2.innerHTML = "GO";
    searchbut2.onclick = createPlaylist;
    fsearch3.appendChild(searchbut2)


    function createPlaylist() {
        var playlistName = search3.value;
        var playlistDis = search4.value;

        return gapi.client.youtube.playlists.insert({
                "part": [
                    "snippet,status"
                ],
                "resource": {
                    "snippet": {
                        "title": playlistName,
                        "description": playlistDis,
                        "tags": [
                            "sample playlist",
                            "API call"
                        ],
                        "defaultLanguage": "en"
                    },
                    "status": {
                        "privacyStatus": "private"
                    }
                }
            })
            .then(function (response) {
                    // Handle the results here (response.result has the parsed body).
                    console.log("Response", response);
                    window.alert("Playlist created!")
                },
                function (err) {
                    if (err.status === 401) {
                        window.alert("Please login");
                    } else {
                        console.error(err);
                    }
                });
    }



}
