var posX = 0;
var posY = 0;
var sizeX = 100;
var sizeY = 100;
var sizeModY;
var sizeModX;

var pressed;

var time = 0;

var whichState = 0;

function setup() {
  createCanvas(1000, 800);
  background(255);
  //noStroke();
}

function draw() {
  fill(255, 10);
  rect(0, 0, 1000, 800);

  time++;


  for (var i = 0; i < 30; i++) {
    for (var j = 0; j < 30; j++) {
      ellipse(posX + 400 * i, posY + 375 * j, sizeX +  sizeModX, sizeY + sizeModY);
    }
  }

  if (whichState == 0) {
    posX = sin(time * 0.1) * 10;
    posY = cos(time * 0.1) * 10;
    sizeModY = map(posY, 0, height, 0, 1000);
    sizeModX = map(posX, 0, width, 0, 1000);
    sizeX = 100;
    sizeY = 100;
    
  }
  if (whichState == 1) {
    posX = cos(time * 0.1) * 100;
    posY = sin(time * 0.1) * 50;
    sizeModY = map(posY, 0, height, 0, 500);
    sizeModX = map(posX, 0, width, 0, 100);
  }
  if (whichState == 2) {
    posX = cos(time * 0.1) * 100;
    posY = sin(time * 0.1) * 100;
    sizeX = 1000;
    sizeY = 1000;
  }
}

function keyPressed() {
  if (key == ' ') {
    whichState++;
    if (whichState > 2) {
      whichState = 0;
    }
  }
}