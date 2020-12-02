// COntainer

var con = document.createElement("div");
con.setAttribute("class","container");
document.body.append(con);


// // Deck Base

var deck = document.createElement("div");
deck.setAttribute("class", "row");
con.appendChild(deck);


// MAIN JS

async function cdata() {

    try {
        var countryData = await fetch("https://restcountries.eu/rest/v2/all");
        var countryResult = await countryData.json();
        return countryResult;
    } catch (error) {
        console.log(error)
    }
}


async function programStart() {
    try {
        var data = await cdata();  // taking restcountries data

        for (i = 0; i < data.length; i++) {

            let wdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data[i]["capital"]}&appid=ce1a1c40a7579f15dafbbf24c4adc272&units=metric`)

            let wresult = await wdata.json();


            var card1 = document.createElement("div");
            card1.setAttribute("class", "card col-lg-4 col-sm-12");
            card1.style.padding = '20px'
           card1.style.display = "inline-block"
            deck.appendChild(card1);

            var head1 = document.createElement("h5");
            head1.setAttribute("class", "card-header");
            head1.innerText = data[i]["name"];
            head1.style.backgroundColor = 'gainsboro';
            card1.appendChild(head1);

            var img1 = document.createElement("img");
            img1.setAttribute("class", "card-body");
            img1.src = data[i]["flag"];
            img1.style.width = '300px'
            img1.style.height = '200px'
            card1.appendChild(img1);

            var cbody1 = document.createElement("div");
            cbody1.setAttribute("class", "card-body");
            card1.appendChild(cbody1);

            var p1 = document.createElement("div");
            p1.innerHTML = `Capital : <p style="display:inline;background-color:red;color:white">${data[i]["capital"]}</p>`;
            cbody1.appendChild(p1);

            var p2 = document.createElement("p");
            p2.innerText = "Country Codes : " + data[i]["alpha2Code"] + ", " + data[i]["alpha3Code"];
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

            var butt = document.createElement("button");
            butt.setAttribute("class","btn btn-primary");
            butt.innerText = "Click for Weather";
            butt.onclick = function(){alert("Weather: " + wresult.main.temp + " °C" )}
            cbody1.appendChild(butt);    

        }


    } catch (error) {
        console.log(error);
    }
}

programStart();