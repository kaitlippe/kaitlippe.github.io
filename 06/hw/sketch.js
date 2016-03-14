var dropzone;
var input;
var button;
var myText;

function setup() {
	noCanvas();
	input = select('#textinput');
	button = select('#thebutton');
	button.mousePressed(handleInput);
	dropzone = select('#dropzone');
	dropzone.dragOver(highlight);
	dropzone.dragLeave(unhighlight);
	dropzone.drop(gotFile, unhighlight);
}

function draw() {

}

function highlight() {
	dropzone.style('background', '#efbbb0');
}

function unhighlight() {
	dropzone.style('background', '');
}

function gotFile(file) {
	if (file.type === 'text') {
		myText = file.data;
		translateText(myText);
	} else {
		alert('ERROR: not a txt file. Please try again.');
	}
}

function handleInput() {
	theText = input.value();
	translateText(theText);
}

function translateText(data) {
	if (data.length === 0) {
		alert("Nothing was entered. Please try again.")
		console.log(data.length);
	} else {
		var newTxt = data.replace(/love/gi, "🚫").replace(/hate|mad|angry/gi,"💗").replace(/happy|excited|smile|smiling/,"😢").replace(/sad|mad/gi, "😃");
		console.log(newTxt);
		var endResults = createP(newTxt);
	}
}





