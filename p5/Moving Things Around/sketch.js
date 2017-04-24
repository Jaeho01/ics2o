
var posX = 800;
var posY = 400;
var ballLength = 100;


function setup() {
  createCanvas(1600, 800);
  background(0, 104, 10);
}

function draw() {
  //soccer ball
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
  line(posX - posX/14, posY, posX - posX/8, posY - posY/36);
  line(posX - posX/22, posY + posY/14, posX - posX/14, posY + posY/10);
  line(posX + posX/22, posY + posY/14, posX + posX/14, posY + posY/10);
  line(posX + posX/14, posY, posX + posX/8, posY - posY/36);
}
