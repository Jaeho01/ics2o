
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
  vertex(posX, posY - posY/16);
  vertex(posX - posX/14, posY);
  vertex(posX - posX/22, posY + posY/14);
  vertex(posX + posX/22, posY + posY/14);
  vertex(posX + posX/14, posY);
  endShape(CLOSE);
  line(posX, posY - posY/16, posX, posY - posY/8);
  line(posX - posX/14, posY, posX - posX/8, posY - posY/14);
  line(posX - posX/22, posY + posY/14, posX - posX/16, posY + posY/16);
}
