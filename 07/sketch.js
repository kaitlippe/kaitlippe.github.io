var concordance = {};
var data = '';
var barHeight;

function setup() {
	input = createInput();
	button = createButton('GO');
	button.mousePressed(doIt);
	createCanvas(windowWidth, windowHeight);
}

function doIt() {
	reset();

	// inputText = input.value();
	data = "Throughout my life No matter what I've done. You've been merciful and your love endureth Through all things. For that I am eternally grateful";
	var tokens = data.split(/\W+/);

	var keys = [];
	for (var i = 0; i < tokens.length; i++) {
		var word = tokens[i];
		if (concordance[word] === undefined) {
			concordance[word] = 1;
			keys.push(word);
		} else {
			concordance[word]++;
		}
	}
	keys.sort(function(a, b) {
		return (concordance[b] - concordance[a]);
	});


	for (var i = 0; i < keys.length; i++) {
		if (concordance[keys[i]] > 1) {
			barHeight += 5;
		} else {
			barHeight = 5;
		}
		fill(0);
		textSize(20);
		var posX = random(0, windowWidth);
		var posY = random(0, windowHeight);

		noStroke();
		text(keys[i], posX, posY);
		fill(random(50, 200), 150);
		rect(10, barHeight, posX, posY);
		console.log(barHeight);
	}
}

function reset() {
	concordance = {};
	data = '';
	keys = [];
}

function draw() {}