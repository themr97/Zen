//1. crete a request variable 

var request = new XMLHttpRequest();

//2. open a connection 

request.open('GET', 'https://restcountries.eu/rest/v2/all', true)

//3. send the request 

request.send();

//4. load the response 

request.onload = function () {
    var data = JSON.parse(this.response);
    {
        for(i=0;i<data.length-1;i++){
            console.log(data[i].flag);
        }
    }
}
