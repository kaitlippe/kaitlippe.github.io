var dropzone;
var input;
var button;
var theText;

function setup() {
  createCanvas(800, 500);

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
  dropzone.style('background', '#f5f8f8');
}

function unhighlight() {
  dropzone.style('background', '');
}

function gotFile(file) {
  if (file.type === 'text') {
    theText = file.data;
    processText(theText);
  } else {
    alert('not a text file');
  }
}

function handleInput() {
  theText = input.value();
  processText(theText);
}

function processText(data) {
  if(data.length === 0){
    alert("nothing was entered, try again");
  } else {
    var totalWords = 0;
    var totalRepeat = 0;
    
    var delimiters = '. !?;#%$&*()@:,/';
    var words = splitTokens(data, delimiters);
    for (var i = 0; i < words.length; i++){
      var word = words[i];
      words.sort(words, words.length)
      totalWords++;
    }
    
    var report = "";
    report += "total words: " + totalWords + "<br>";
    
    var finishedResults = createP(report);
    console.log(report);
  }
}


// function repeatWord(data) {
//   var words = data.split(' '),
//   var sorted = words.sort(),
//   var totalWords = 0;
  
//   for (var i = 0; i < sorted.length; i++){
//     var current = sorted[i];
//     if (current === sorted[i+1]){
//       totalWords++;
//     }
//     console.log(totalWords);
//   }
// }



