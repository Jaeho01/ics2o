
var posX = 400;
var posY = 400;
var ballLength = 100;
var ballSpeedX = 5;
var ballSpeedY = 5;


function setup() {
  createCanvas(1000, 800);
}

function draw() {
  background(0, 104, 10);
  //soccer ball
  fill(255, 255, 255);
  strokeWeight(1.5);
  ellipse(posX, posY, ballLength, ballLength);
  fill(0, 0, 0);
  beginShape();
  vertex(posX, posY - ballLength/4);
  vertex(posX - ballLength/3.5, posY);
  vertex(posX - ballLength/5.5, posY + ballLength/3.5);
  vertex(posX + ballLength/5.5, posY + ballLength/3.5);
  vertex(posX + ballLength/3.5, posY);
  endShape(CLOSE);
  line(posX, posY - ballLength/4, posX, posY - ballLength/2);
  line(posX - ballLength/3.5, posY, posX - ballLength/2, posY - ballLength/9);
  line(posX - ballLength/5.5, posY + ballLength/3.5, posX - ballLength/3.5, posY + ballLength/2.5);
  line(posX + ballLength/5.5, posY + ballLength/3.5, posX + ballLength/3.5, posY + ballLength/2.5);
  line(posX + ballLength/3.5, posY, posX + ballLength/2, posY - ballLength/9);
  posX = posX + ballSpeedX;
  posY = posY + ballSpeedY;
  if (posX <= 50) {
    ballSpeedX = -ballSpeedX + random(-10, 10)
    };
  if (posX >= 950) {
    ballSpeedX = -ballSpeedX + random(-10, 10)
    };
  if (posY <= 50) {
    ballSpeedY = -ballSpeedY + random(-10, 10)
    };
  if (posY >= 750) {
    ballSpeedY = -ballSpeedY + random(-10, 10)
    };
  goalie();
}

function goalie() {
  fill(0, 0, 255);
  rect (400, 750, 200, 50);
}



