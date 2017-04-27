/*Soccer Game
Jaeho Jang
2017-4-13*/

var posX = 400;
var posY = 400;
var ballLength = 100;
var speedX = 5;
var speedY = 5;

function setup() {
	createCanvas(1000, 800);
}

function draw() {
	background(0, 104, 10); //background
	strokeWeight(1.5); 
	fill(255, 255, 255); //colour of the ball (only for the circle)
	ellipse(posX, posY, ballLength, ballLength); //circle part of the ball
	fill(0, 0, 0); //colour for the lines and the pentagon on the ball
	//pentagon
	beginShape();
	vertex(posX, posY - ballLength/4); //top point of the pentagon
	vertex(posX - ballLength/3.5, posY); //left point of the pentagon
	vertex(posX - ballLength/5.5, posY + ballLength/3.5); //bottom left point of the pentagon
	vertex(posX + ballLength/5.5, posY + ballLength/3.5); //bottom right point of the pentagon
	vertex(posX + ballLength/3.5, posY); //right point of the pentagon
	endShape(CLOSE);
	//lines on the ball
	line(posX, posY - ballLength/4, posX, posY - ballLength/2);
	line(posX - ballLength/3.5, posY, posX - ballLength/2, posY - ballLength/9);
	line(posX - ballLength/5.5, posY + ballLength/3.5, posX - ballLength/3.5, posY + ballLength/2.5);
	line(posX + ballLength/5.5, posY + ballLength/3.5, posX + ballLength/3.5, posY + ballLength/2.5);
	line(posX + ballLength/3.5, posY, posX + ballLength/2, posY - ballLength/9);	
	
	speedY = speedY + 2;

	posY = posY + speedY;
	posX = posX + speedX;
	
	speedX = speedX - 1;
	speedY = speedY - 1;
	
	if (posX >= 950) {
		speedX = -speedX
	};
	if (posX <= 0) {
		speedX = -speedX
	};
	if (posY >= 750) {
		speedY = -speedY - 5
	};
	if (posY <= 0) {
		speedY = -speedY
	};
}
	
