var weatherJSON;

var baseURI = "http://api.openweathermap.org/data/2.5/weather?q=";
var cityQuery = "New York";
var unitsQuery = "&units=metric";

var baseGiphy = "http://api.giphy.com/v1/gifs/search?";
var giphyApiKey = "&api_key=dc6zaTOxFJmzC";
var giphyQuery = "&q=" + "clear skies";

var apiKey = "&appid=a8b35013c0263b6ec52bb3daa41e3be7";

var drawGiphy = false;

var button;
var field;

var cityHeader;
var cityDescr;
var cityTemp;
var descr;


function setup() {
	cityHeader = createElement('h1', "");
	cityDescr = createP(""); 
	cityTemp = createP(""); 
	
	descr = cityDescr;
	noCanvas();

	field = select("#city"); //selects s/t in dom lib
	button = select("#submit");

	button.mousePressed(askWeather); //callback to function
}

function getWeather(data) {
	weatherJSON = data;

	cityHeader.html(weatherJSON.name);
	cityDescr.html(weatherJSON.weather.description); 
	cityTemp.html(weatherJSON.main.temp + "degrees C");

	console.log(cityDescr.html(weatherJSON.weather[0].description));
	
	giphyQuery = "&q=" + cityDescr.html(weatherJSON.weather.description);
 	var url = baseGiphy + giphyApiKey + giphyQuery;
	loadJSON(url, giphyData);
	console.log(giphyQuery);
}

function askWeather() { //function to callback to getWeather
	cityQuery = field.value();
	console.log(cityQuery);
	var theURI = baseURI + cityQuery + unitsQuery + apiKey;
	loadJSON(theURI, getWeather);
}

function giphyData(giphy){
	for (var i = 0; i < giphy.data.random; i++) {
		createImg(giphy.data[0].images.original.url);
	}
}

function draw() {
}
