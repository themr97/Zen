// Deck Base

var deck = document.createElement("div");
deck.setAttribute("class", "card-columns");
deck.setAttribute("style","column-count: 4");
document.body.append(deck);


// MAIN JS

let myPromise = new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest();
    request.addEventListener("load", function () {
        if (this.status == 200 && this.readyState == 4) {
            resolve(this.responseText);
        } else {
            reject("Error Code : " + this.status);
        }
    })

    //2. open a connection 
    request.open('GET', 'https://restcountries.eu/rest/v2/all', true)
    //3. send the request 
    request.send();
});

myPromise.then((responseText) => {
    console.log(responseText);
    let data = JSON.parse(responseText);

    for (i = 0; i < data.length; i++) {
        var card1 = document.createElement("div");
        card1.setAttribute("class", "card");
        card1.style.display = "inline-block"
        deck.appendChild(card1);

        var head1 = document.createElement("h5");
        head1.setAttribute("class", "card-title");
        head1.innerText = data[i]["name"];
        head1.style.backgroundColor = 'gainsboro';
        card1.appendChild(head1);

        var img1 = document.createElement("img");
        img1.setAttribute("class", "card-img-top");
        img1.src = data[i]["flag"];
        img1.style.width = '400px'
        img1.style.height = '200px'
        card1.appendChild(img1);

        var cbody1 = document.createElement("div");
        cbody1.setAttribute("class", "card-body");
        card1.appendChild(cbody1);

        var p1 = document.createElement("div");
        p1.innerHTML = `Capital : <p style="display:inline;background-color:red;color:white">${data[i]["capital"]}</p>`;
        cbody1.appendChild(p1);

        var p2 = document.createElement("p");
        p2.innerText = "Country Codes : " + data[i]["alpha2Code"]+ ", " + data[i]["alpha3Code"];
        cbody1.appendChild(p2);

        var p3 = document.createElement("p");
        p3.innerText = "Region : " + data[i]["region"];
        cbody1.appendChild(p3);

        var p3 = document.createElement("p");
        p3.innerText = "Lat,Long : " + data[i]["latlng"];
        cbody1.appendChild(p3);

        var p4 = document.createElement("p");
        p4.innerHTML = `Currency Name: ${data[i]["currencies"][0]["name"]} <br> Currency Code: ${data[i]["currencies"][0]["code"]} <br> Currency Symbol: ${data[i]["currencies"][0]["symbol"]}`
        cbody1.appendChild(p4);

    }

})

myPromise.catch((error) => {
    console.error(error);
})
