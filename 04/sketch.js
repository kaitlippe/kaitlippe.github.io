//i wanted to have text generate when a bubble is clicked but i couldnt get it to work nor the intersection

var bubbles = [];
var p;
var myText;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 20; i++) {
    bubbles[i] = new Bubble();
  }
  p = createP('no');
}

function draw() {
  clear();
  noStroke();
  myText = "";
  for (var i = 0; i < 20; i++) {
    bubbles[i].update();
    bubbles[i].display();
    for (var j = i + 1; j < 20; j++) {
      // if (bubbles[i].intersects(bubbles[j])) {
      //   myText += bubbles[i].text;
      //   myText += bubbles[j].text;
      //   p.html(myText);
      // }
    }
  }
  p.html(myText);
}

// function mousePressed() {
//   text('no', mouseX, mouseY, 50, 50);
// }

function Bubble() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.velX = random(-5, 5);
  this.velY = random(-5, 5);
  this.text1 = 'hello';
  this.text2 = 'goodbye';

  this.display = function() {
    fill(0, 50);
    ellipse(this.x, this.y, 50, 50);
  };

  this.update = function() {
    if (this.x >= width - 25 || this.x <= 25) {
      this.velX = -this.velX;
      myText += this.text1;
    }
    if (this.y >= width - 25 || this.y <= 25) {
      this.velY = -this.velY;
      myText += this.text2;
    }
    this.x += this.velX;
    this.y += this.velY;
  };

  this.intersect = function(other) {
    var d = dist(this.x, this.y, other.x, other.y);
    if (d < 50) {
      return true;
    } else {
      return false;
    }
  }

}