
var posX = 400;
var posY = 400;
var ballLength = 100;
var ballSpeedX = 1;
var ballSpeedY = 1;


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
  vertex(posX, posY - posY/16);
  vertex(posX - ballLength/3.5, posY);
  vertex(posX - posX/22, posY + posY/14);
  vertex(posX + posX/22, posY + posY/14);
  vertex(posX + posX/14, posY);
  endShape(CLOSE);
  line(posX, posY - posY/16, posX, posY - posY/8);
  line(posX - posX/14, posY, posX - posX/8, posY - posY/36);
  line(posX - posX/22, posY + posY/14, posX - posX/14, posY + posY/10);
  line(posX + posX/22, posY + posY/14, posX + posX/14, posY + posY/10);
  line(posX + posX/14, posY, posX + posX/8, posY - posY/36);
  posX = posX + ballSpeedX;
  posY = posY + ballSpeedY;
  if (posX <= 0) {
    ballSpeedX = -ballSpeedX
    };
  if (posX >= 1000) {
    ballSpeedX = -ballSpeedX
    };
  if (posY <= 0) {
    ballSpeedY = -ballSpeedY
    };
  if (posY >= 800) {
    ballSpeedY = -ballSpeedY
    };
  
  
  
  
  
  
}
