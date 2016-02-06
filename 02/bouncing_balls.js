var myArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var posX = new int[myArray];
var posY = new int[myArray];
var velX = new float[myArray];
var velY = new float[myArray];

var c = new float[myArray];
var size = new float[myArray];
var accel = new float[myArray];

function setup() {
  createCanvas(800, 600);
  background(255);
  for (var i = 0; i < myArray; i++) {
    posX[i] = width / 2;
    posY[i] = height / 2;
    velX[i] = random(-5, 5);
    velY[i] = random(-5, 5);
    accel[i] = random(0.1, 0.5);
    c[i] = random(250);
    size[i] = random(10, 80);
  }
}

function draw() {
  background(255);


  for (var i = 0; i < myArray; i++) {
    posX[i] += velX[i];
    posY[i] += velY[i];
    velY[i] += accel[i];

    noStroke();
    fill(c[i], i * 30, c[i] * 2, 100);
    ellipse(posX[i], posY[i], size[i], size[i]);

    if (posX[i] > width - 100) {
      velX[i] = -velX[i] * (1 - accel[i]);
      c[i] = random(250);
      posX[i] = width / 2;
      posY[i] = height / 2;
    } else if (posX[i] < 100) {
      posX[i] = width / 2;
      posY[i] = height / 2;
      velX[i] = -velX[i] * (1 - accel[i]);
      c[i] = random(250);
    }

    if (posY[i] > height) {
      velY[i] = -velY[i] * (1 - accel[i]);
      posX[i] = width / 2;
      posY[i] = height / 2;
    } else if (posY[i] < 0) {
      posX[i] = width / 2;
      posY[i] = height / 2;
      velY[i] = -velY[i] * (1 - accel[i]);
    }
  }
}