/*Soccer Game
Jaeho Jang
2017-4-13*/

var posX = 400;
var posY = 400;
var ballLength = 100;
var speedX = 5;
var speedY = 5;
var boxX = 200;
var boxY = 400;
var box2X = 700;
var box2Y = 200;

function setup() {
	createCanvas(1000, 800);
	frameRate(30);
}

function draw() {
	background(0, 104, 10); //background
	strokeWeight(1.5); 
	soccerBall();
	
	speedY = speedY + 2;

	posY = posY + speedY;
	posX = posX + speedX;
	
	speedX = speedX - 0.000001;
	speedY = speedY - 0.000001;
	
	if (posX >= 950) {
		speedX = -speedX
	};
	if (posX <= 50) {
		speedX = -speedX
	};
	if (posY >= 750 && speedY > 0) {
		speedY = -speedY
	};
	if (posY <= 50) {
		speedY = -speedY
	};
	objects();
	if (posX >= boxX && posX <= boxX+50 && posY >= boxY && posY <= boxY +50) { //ball hits the left side of the ball
		speedX = -speedX
	};
	if (posX >= boxX && posX <= boxX +50 && posY > boxY +1 && posY <= boxY) { //top side
		speedY = -speedY
	};
	if (posX <= boxX +50 && posX >= boxX && posY <= boxY +50 && posY >= boxY) { //right side
		speedX = -speedX
	};
	if (posX >= boxX && posX <= boxX +50 && posY <= boxY && posY >= boxY +50) {
		speedY = -speedY
	};
}

function mouseClicked () {
	soccerBall();
	posX = mouseX;
	posY = mouseY;
	};

function objects () {
	stroke(255, 153, 0);
	fill(135, 206, 250);
	rect(boxX, boxY, 50, 50);
	rect(box2X, box2Y, 50, 100);
	};

function soccerBall () {
	fill(255, 255, 255); //colour of the ball (only for the circle)
	stroke(0, 0, 0);
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
	};
