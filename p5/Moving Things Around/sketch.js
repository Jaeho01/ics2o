
var posX = 400;
var posY = 400;
var ballLength = 100;


function setup() {
  createCanvas(800, 800);
  background(0, 104, 10);
}

function draw() {
  //pentagon
  fill(255, 255, 255);
  strokeWeight(1.5);
  ellipse(posX, posY, ballLength, ballLength);
  fill(0, 0, 0);
  beginShape();
  vertex(posX, posY - posY/8);
  vertex(posX - posX/7, posY);
  vertex(posX - posX/11, posY + posY/7);
  vertex(posX + posX/11, posY + posY/7);
  vertex(posX + posX/7, posY);
  endShape(CLOSE);
  line(posX, posY - posY/8, posX, posY - posY/4);
  line(posX - posX/7, posY, posX - posX/4, posY - posY*0.03);
  line(posX - posX/11, posY + posY/7, posX - posX/8, posY + posY/8);
}
