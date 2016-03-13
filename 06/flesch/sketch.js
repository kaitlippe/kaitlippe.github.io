//Adapted from Daniel Shiffman's A2Z example
//Code 2 Data Poetics, SP16, Bryan Ma

//read input file into string object
//count words
//count syllables
//count sentences
//apply formula
//write out report file

var dropzone, input, button;
var theText;

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log("MOUSEPRESSED WONT WORK ANYMORE ?")
  
  input = select('#textinput');
  button = select('#submit');
  button.mousePressed(handleInput);
  dropzone = select('#dropzone');
  dropzone.dragOver(highlight);
  dropzone.dragLeave(unhighlight);
  dropzone.drop(gotFile, unhighlight);
}

function highlight() {
  dropzone.style('background', '#AAA');
}

function unhighlight() {
  dropzone.style('background', '');
}

function gotFile(file) {
  if (file.type === 'text') {
    theText = file.data;
    processFlesch(theText);
  } else {
    alert('not a text file');
  }
}

function handleInput() {
  theText = input.value();
  processFlesch(theText);
}


function processFlesch(data) {
  var len = data.length;
  if (data.length === 0) {
    alert("Nothing entered");
  } else {
    var totalSyllables = 0;
    var totalSentences = 0;
    var totalWords = 0;
    
    //look for word delimiters
    var delR = /[.:;?! !@#$%^&*()+]/;
   var words = data.split(delR);
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      totalSyllables += countSyllables(word);
      totalWords++;
    }
    
    //look for sentence delimiters
   //  var sentenceDelim = '.:;?!';
    var sentenceR = /[.:;?!]/g;
   //  var sentences = splitTokens(data, sentenceDelim);
    var sentences = data.split(sentenceR);
    totalSentences = sentences.length;
    
    //calculate flesch index
    var f1 = 206.835;
    var f2 = 84.6;
    var f3 = 1.015;
    var r1 = totalSyllables / totalWords;
    var r2 = totalWords / totalSentences;
    var flesch = f1 - (f2 * r1) - (f3 * r2);
    
    var report = "";
    
    report += "Total Syllables: " + totalSyllables + "<br>";
    report += "Total Words    : " + totalWords + "<br>";
    report += "Total Sentences: " + totalSentences + "<br>";
    report += "Flesch Index   : " + flesch + "\n";
    
    var fleschResults = createP(report);
    // fleschResults.class('text');
  }
}

//count syllables of a word based on number of vowels
function countSyllables(word) {
  var syl = 0;
  var vowel = false;
  
  //check each word for vowels (don't count more than one vowel in a row)
  for (var i = 0; i < word.length; i++) {
    if (isVowel(word.charAt(i)) && (vowel == false)) {
      vowel = true;
      syl++;
    } else if (isVowel(word.charAt(i)) && (vowel == true)) {
      vowel = true;
    } else {
      vowel = false;
    }
  }
  
  var tempChar = word.charAt(word.length-1);
  //check for an 'e' at the end, as long as its not a word with one syllable
  //this is something we would need to change if we wanted this to analyze more than one word.
  if ((tempChar == 'e' || tempChar == 'E') && syl != 1) {
    syl--;
  }
  return syl;
}

function isVowel(c) {
   var vowelR = /([aeiou])/i;
   if (vowelR.test(c) === true) {
      return true;
   } else {
      return false;
   }

}




