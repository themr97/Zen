//1. crete a request variable 

var request = new XMLHttpRequest();
var request1 = new XMLHttpRequest();
var request2 = new XMLHttpRequest();

//2. open a connection 

request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=ce1a1c40a7579f15dafbbf24c4adc272', true)
request1.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=1264527&appid=ce1a1c40a7579f15dafbbf24c4adc272', true)
request2.open('GET','https://api.openweathermap.org/data/2.5/weather?lat=20&lon=77&appid=ce1a1c40a7579f15dafbbf24c4adc272', true);
//3. send the request 

request.send();
request1.send();
request2.send();
//4. load the response 

request.onload = function () {
    var data = JSON.parse(this.response);
    console.log("By city name")
    console.log(data);
}
request1.onload = function () {
    var data = JSON.parse(this.response);
    console.log("By City ID")
    console.log(data);
}
request2.onload = function() {
    var data = JSON.parse(this.response);
    console.log("By Lat and Lon");
    console.log(data);

}