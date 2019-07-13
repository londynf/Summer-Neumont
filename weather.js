var weatherData;
var request = new XMLHttpRequest();
var date = new Date();

loadData();

function loadData() {
    
    request.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?zip=84037,us&units=imperial&cnt=5&mode=json&appid=e638afe8a8350ed39e29c8e16698e581');
    request.onload = loadComplete;
    request.send();
}

function loadComplete(evt) {
    weatherData = JSON.parse(request.responseText);
    console.log(weatherData);
    
    
    var i;
    for (i = 0; i < weatherData.list.length; i++) {
        document.getElementById("day"+i).innerHTML = (date.getMonth()+1) + "/" + (date.getDate()+i);
        document.getElementById("currentTemp"+i).innerHTML = weatherData.list[i].main.temp;
        document.getElementById("conditions"+i).innerHTML = weatherData.list[i].weather[0].main;
        document.getElementById("conditionsDesc"+i).innerHTML = weatherData.list[i].weather[0].description;
        if (weatherData.list[i].weather[0].main === "Clear") {
            document.getElementById("picture"+i).src = "/Sun.jpg"
        }
        if (weatherData.list[i].weather[0].main === "Clouds") {
            document.getElementById("picture"+i).src = "http://openweathermap.org/img/wn/02d@2x.png"
        } 
        if (weatherData.list[i].weather[0].main === "Thunderstorm") {
            document.getElementById("picture"+i).src = "http://openweathermap.org/img/wn/11d@2x.png"
        }   
        if (weatherData.list[i].weather[0].main === "Drizzle") {
            document.getElementById("picture"+i).src = "http://openweathermap.org/img/wn/09d@2x.png"
        }   
        if (weatherData.list[i].weather[0].main === "Rain") {
            document.getElementById("picture"+i).src = "http://openweathermap.org/img/wn/09d@2x.png"
        }   
        if (weatherData.list[i].weather[0].main === "Snow") {
            document.getElementById("picture"+i).src = "http://openweathermap.org/img/wn/13d@2x.png"
        }   
        if (weatherData.list[i].weather[0].main === "Atmosphere") {
            document.getElementById("picture"+i).src = "http://openweathermap.org/img/wn/50d@2x.png"
        }   
        if (weatherData.list[i].weather[0].main === "Clear") {
            document.getElementById("picture"+i).src = "http://openweathermap.org/img/wn/01d@2x.png"
        }   
        }
}
makeGuess = (form) => {
    document.getElementById("gif").src = gif;
    
}
let gif = "/WebsitePictures/batman.gif";

