/*Soccer Game
Jaeho Jang
2017-4-13*/

var posX = 600;
var posY = 400;
var speedX = 7;
var speedY = 5;

function setup() {
  createCanvas(1200, 800);
}

function draw() {
	background(0, 104, 10); 
	stroke(255, 255, 255);
	line(600, 0, 600, 800);
	fill(255, 255, 255);
	stroke(0, 0, 0);
	ellipse(posX, posY, 60, 60);
    posX = posX + speedX;
	posY = posX + speedY;
	if (posX <= 0 && posX >= 600 && posY >= 400 && posY <= 0) {
		speedX = -speedX;
		speedY = -speedY;
	};
  
}