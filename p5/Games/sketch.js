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
	frameRate(30);
}

function draw() {
	background(0, 104, 10);
	strokeWeight(1.5); 
	soccerBall();
	
	speedY = speedY + 2;

	posY = posY + speedY; //yvalue of the ball increases overtime
	posX = posX + speedX; //xvalue of the ball increases overtime
	
	//friction
	speedX = speedX - 0.000001;
	speedY = speedY - 0.000001;
	
	if (posX >= 950) { //bounces off the right wall when the ball hits the right wall
		speedX = -speedX
	};
	if (posX <= 50 && speedX < 0) { //bounces off the left wall when the ball hits the left wall
		speedX = -speedX
	};
	if (posY >= 750 && speedY > 0) { //bounces off the bottom when the ball hits the bottom
		speedY = -speedY
	};
	if (posY <= 50) { //bounces off the top when the ball hits the top
		speedY = -speedY
	};
	objects(); //box that the ball bounces off
	if (posX >= 150 && posX <= 154 && posY >= 350 && posY <= 550) { //ball hits the left side of the box
		speedX = -speedX
	};
	if (posX <= 350 && posX >= 346  && posY <= 550 && posY >= 350) { //ball hits the right side of the box
		speedX = -speedX
	};
	if (posX >= 150 && posX <= 350 && posY >= 350 && posY <= 354) { //ball hits the top side of the box
		speedY = -speedY
	};
	if (posX >= 150 && posX <= 350 && posY <= 550 && posY >= 546) {  //ball hits the bottom side of the box
		speedY = -speedY
	};
}

function mouseClicked () { //new soccer ball is formed where the mouse if when the mouse is clicked
	soccerBall();
	posX = mouseX;
	posY = mouseY;
	};

function objects () { //the box that the ball bounces off
	stroke(255, 153, 0);
	fill(135, 206, 250);
	rect(200, 400, 100, 100);
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
	//lines on the ball that goes from the points from the pentagon to the outline of the ball
	line(posX, posY - ballLength/4, posX, posY - ballLength/2); //line starting from the top point
	line(posX - ballLength/3.5, posY, posX - ballLength/2, posY - ballLength/9); //line starting from the left point
	line(posX - ballLength/5.5, posY + ballLength/3.5, posX - ballLength/3.5, posY + ballLength/2.5); //line starting from the bottom left point
	line(posX + ballLength/5.5, posY + ballLength/3.5, posX + ballLength/3.5, posY + ballLength/2.5); //line starting from the bottom right point
	line(posX + ballLength/3.5, posY, posX + ballLength/2, posY - ballLength/9); //line starting from the right point
	};
