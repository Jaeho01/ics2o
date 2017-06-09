/*Summative Game
  Jaeho Jang
  2017-05-30 */

var posX = 250; //x position of the ball
var posY = 250; //y position of the ball
var ballWidth = 25; //width of the ball
var speedX = 2; //x speed of the ball
var speedY = 5; //y speed of the ball
var brickX = 200; //x position of the brick
var brickY = 475; //y position of the brick
var speedBrick = 10; //speed of the brick
var score = 0; //starting score
var status = 0; 



function setup() {
  createCanvas(500, 500);
  status = 0;
}

function draw() {
	if (status == 0) {
		startup();
	}
	else if (status == 1) {
		playGame();
	}
	else if (status == 2) {
		endGame();
	}
}
	
function startup() {
	background(0, 191, 255);
	fill(0, 0, 128)
	rect(125, 350, 250, 50);
	textSize(30);
	fill(255, 255, 255);
	text("Play", 220, 385);
	if((mouseIsPressed()) && (mouseX >= 125) && (mouseX <= 375) && (mouseY >= 350) && (mouseY <= 400)) {
		status = 1;
	}
}	
	
function playGame() {
	background(124 ,252 ,0);
	fill(255, 153, 0); //color of the ball (orange)
	ellipse(posX, posY, ballWidth, ballWidth); //ball that bounces around
	posX = posX + speedX; //changes the x value for the ball
	posY = posY + speedY; //changes the y value for the ball
	if (posX > 487.5) {//if the ball hits the right wall, it bounces back
		speedX = -speedX
			}
	if (posX < 12.5) {//if the ball hits the left wall, it bounces back
		speedX = -speedX
			}
	if (posY < 12.5) {//if the ball hit the top wall, it bounces back
		speedY = -speedY
			}
	if (keyIsDown(RIGHT_ARROW)) { //if right arrow is pressed, the brick moves right
		brickX += speedBrick;
			if (brickX >= 400) { //the brick doesn't go past the right wall
				brickX = 400;
					} 
			}
	if (keyIsDown(LEFT_ARROW)) { //if left arrow is pressed, the brick moves right
		brickX -= speedBrick;
			if (brickX <= 0) { //the brick doesn't go past the left wall
				brickX = 0;
					}
			}
	if ((posX >= brickX) && (posX < brickX+100) && (posY >= brickY-12.5)) {
		speedX = -speedX;
		speedY = -speedY;
		posY > brickY-25;
		score = score + 1;
			}
	fill(0, 0, 0);
	textSize(15);
	text(score, 25,25);
	if (posY >= 525) {
		status = 2;
		}		
}
				
function endGame() {
	background(255, 0, 0);
	textSize(30);
	fill(0, 0, 0);
	text("YOU FAILED", 155, 150);
	fill(50, 205, 50);
	rect(125, 350, 250, 50);
	speedY = 0;
	if((mouseIsPressed()) && (mouseX >= 125) && (mouseX <= 375) && (mouseY >= 350) && (mouseY <= 400)) {
		fill(0, 255, 127);
		status = 0;
		}
}

		/*fill(255, 153, 0); //color of the ball (orange)
		ellipse(posX, posY, ballWidth, ballWidth); //ball that bounces around
		posX = posX + speedX; //changes the x value for the ball
		posY = posY + speedY; //changes the y value for the ball
		if (posX > 487.5) {//if the ball hits the right wall, it bounces back
		  speedX = -speedX
			}
		if (posX < 12.5) {//if the ball hits the left wall, it bounces back
		  speedX = -speedX
			}
		if (posY < 12.5) {//if the ball hit the top wall, it bounces back
		  speedY = -speedY
			}
		if (keyIsDown(RIGHT_ARROW)) { //if right arrow is pressed, the brick moves right
			brickX += speedBrick;
				if (brickX >= 400) { //the brick doesn't go past the right wall
					brickX = 400;
					} 
			}
		if (keyIsDown(LEFT_ARROW)) { //if left arrow is pressed, the brick moves right
			brickX -= speedBrick;
				if (brickX <= 0) { //the brick doesn't go past the left wall
					brickX = 0;
					}
			}
		if ((posX >= brickX) && (posX < brickX+100) && (posY >= brickY-12.5)) {
			speedX = -speedX;
			speedY = -speedY;
			posY > brickY-25;
			score = score + 1;
			}

		fill(0, 0, 0);
		textSize(15);
		text(score, 25,25);
		brickB();
		bricks();
		bricks();
		bricks();
		bricks();
		bricks();
		bricks();
		bricks();
		bricks();
		if (posY >= 525) {
			fill(255, 0, 0);
			rect (0, 0, 500, 500);
			textSize(30);
			fill(0, 0, 0);
			text("YOU FAILED", 155, 150);
			fill(50, 205, 50);
			rect(125, 350, 250, 50);
			speedY = 0;
				if((mouseISpressed()) && (mouseX >= 125) && (mouseX <= 375) && (mouseY >= 350) && (mouseY <= 400)) {
					fill(0, 255, 127);
					
					}
			}
	}

		
	  
}*/

function brickB() {
	fill(4, 255, 0);
	rect(brickX, brickY, 100, 25);
}
function bricks() {
	fill(0, 255, 127);
	rect(random(0, 500), random(0, 400), 75, 25);
}
