/*Soccer Game
Jaeho Jang
2017-4-13*/

var posX = 100;
var posY = 200;
var speedX = 2;
var speedY = 1;

function setup() {
	createCanvas(400, 400);
  	background(0, 104, 10); 

}

function draw() {
	strokeWeight(0.5);
	fill(135,206,250);
	ellipse(posX, posY, 20, 20);	
	posY = posY + speedY;
	posX = posX + speedX;
	if (posX >= 400) {
		speedX = -speedX
	};
	if (posX <= 0) {
		speedX = -speedX
	};
	if (posY >= 400) {
		speedY = speedY - 1
	};
	if (posY <= 0) {
		speedY = -speedY
	};
}
	
