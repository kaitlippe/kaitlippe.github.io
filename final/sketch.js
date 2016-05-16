// var express = require('express'); 
// var app = express();
// var server = app.listen(3000);
// app.use(express.static('public'));

//TWITTER
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);
var stream = T.stream('user');
stream.on('tweet', tweetEvent);

var exec = require('child_process').exec;
var fs = require('fs');

//WEATHER
var weatherJSON;
var baseURI = "http://api.openweathermap.org/data/2.5/weather?q=";
var cityQuery = "New York";
var unitsQuery = "&units=metric";
var apiKey = "&appid=a8b35013c0263b6ec52bb3daa41e3be7";

//GIPHY
var baseGiphy = "http://api.giphy.com/v1/gifs/search?";
var giphyApiKey = "&api_key=dc6zaTOxFJmzC";
var giphyQuery = "&q=" + cityDescr;

var drawGiphy = false;
var cityDescr;
var cityTemp;


// function setup() {
// 	var giphyQuery = "&q=" + "clear skies";
// 	var url = baseGiphy + giphyApiKey + giphyQuery;
// 	loadJSON(url, giphyData);
// }

//WEATHER
function getWeather(data) {
	weatherJSON = data;
	cityHeader.html(weatherJSON.name);
	cityDescr.html(weatherJSON.weather[0].description);
	cityTemp.html(weatherJSON.main.temp + "degrees C");
}

function askWeather() {
	cityQuery = "New York";
	var theURI = baseURI + cityQuery + unitsQuery + apiKey;
	loadJSON(theURI, getWeather);
	// giphyQuery = "&q=" + cityQuery;
	// var url = baseGiphy + giphyApiKey + gsiphyQuery;
	// loadJSON(url, giphyData);
}

//TWITTER
function tweetEvent(eventMsg) {
	var replyto = eventMsg.in_reply_to_screen_name;
	var text = eventMsg.text;
	var from = eventMsg.user.screen_name;


	//see if reply is to GiphyWeather
	if (replyto === 'GiphyWeather') {
		var newtweet = '@' + from + ' There is ' + cityDescr;
		tweetIt(newtweet);
	}

}

function tweetIt(txt) {
	// function giphyData(giphy) {
	// 	var r = Math.floor(Math.random(giphy.data.length));
	// 	var filename = createImg(giphy.data[r].images.original.url);
	// 	var params = {
	// 		encoding: 'base64'
	// 	}
	// 	var b64 = fs.readFileSync(filename, params);
	// 	T.post('media/upload', {
	// 		media_data: b64
	// 	}, uploaded);

	// 	function uploaded(err, data, response) {
	// 		var id = data.media_id_string;

	// 		var tweet = {
	// 			status: txt,
	// 			media_ids: [id]
	// 		}
	// 	}
	// }

	var tweet = {
		status: txt,
	}


	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response) {
		if (err) {
			console.log("somethings wrong");
		} else {
			console.log("it works");
		}
	}
}

//WEATHER AND GIPHY
// function setup() {
// 	cityHeader = createElement('h1', "");
// 	cityDescr = createP("");
// 	cityTemp = createP("");

// 	noCanvas();

// 	field = select("#city"); //selects s/t in dom lib
// 	button = select("#submit");

// 	button.mousePressed(askWeather); //callback to function
// }