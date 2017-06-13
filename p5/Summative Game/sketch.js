/*Summative Game
  Jaeho Jang
  2017-06-13 */

var posX = 250; //x position of the ball
var posY = 250; //y position of the ball
var pos2X = 100; //x position of the second ball
var pos2Y = 200; //y position of the second ball
var ballWidth = 25; //width of the ball
var speedX = 2; //x speed of the ball
var speedY = 5; //y speed of the ball
var brickX = 200; //x position of the brick
var brickY = 475; //y position of the brick
var speedBrick = 10; //speed of the brick
var score = 0; //starting score
var status = 0; //makes the status 0 
var speed2X = 5; //x speed of the second ball
var speed2Y = 5; //y speed of the second ball



function setup() {
  createCanvas(500, 500);
  status = 0; //makes sure that the status is 0 when the game starts
}

function draw() {
	if (status == 0) { //when the status is 0, display the startup page
		startup(); 
	}
	else if (status == 1) { //When the status is 1, display the playGame page
		playGame();
	}
	else if (status == 2) { //When the status is 2, display the endGame page
		endGame();
	}
}
	
function startup() {
	background(0, 191, 255); //set the background to light blue
	fill(0, 0, 128); //make the colour of the rectangle blue
	rect(125, 350, 250, 50); //draw the rectangle
	textSize(50); //set the text size to 50
	text("Bouncy Ball", 120, 200); //Display "Bouncy Ball" on the screen
	textSize(30); //set the text size to 30
	fill(255, 255, 255); //set the text colour to white
	text("Play", 220, 385); //display "Play" in the rectangle that had been drawn 
	if(mouseIsPressed && (mouseX >= 125) && (mouseX <= 375) && (mouseY >= 350) && (mouseY <= 400)) { //when the play box is clicked, change the status to 1
		status = 1;
	}
}	
	
function playGame() {
	background(124 ,252 ,0); //set the background to green
	fill(255, 153, 0); //set the colour of the ball orange
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
			if (brickX >= 400) { //This makes sure that the brick doesn't go past the right wall
				brickX = 400;
					} 
			}
	if (keyIsDown(LEFT_ARROW)) { //if left arrow is pressed, the brick moves left
		brickX -= speedBrick;
			if (brickX <= 0) { //This makes sure that the brick doesn't go past the left wall
				brickX = 0;
					}
			}
	if ((posX >= brickX) && (posX < brickX+100) && (posY >= brickY-12.5)) { //when the ball hits the brick
		speedX = -speedX; //speedX reverses
		speedY = -speedY; //speedY reverses
		speedX = speedX - 0.5; //speedX increases by 0.5
		speedY = speedY - 0.5; //speedY increases by 0.5
		posY > brickY-25; //This makes sure that the ball doesn't go under the brick
		score = score + 1; //Makes the score go up 1
			}
	brickB();
	if (score >= 7) { //if the score is 7 or larger
		fill(0, 0, 128); //set the colour of the ball to blue
		ellipse(pos2X, pos2Y, ballWidth, ballWidth); //second ball that bounces around
		pos2X = pos2X + speed2X; //moves the ball horizontally
		pos2Y = pos2Y + speed2Y; //moves the ball vertically
		if (pos2X > 487.5) {//if the ball hits the right wall, it bounces back
			speed2X = -speed2X
		}
		if (pos2X < 12.5) {//if the ball hits the left wall, it bounces back
			speed2X = -speed2X
		}
		if (pos2Y < 12.5) {//if the ball hit the top wall, it bounces back
			speed2Y = -speed2Y
		}
		if ((pos2X >= brickX) && (pos2X < brickX+100) && (pos2Y >= brickY-12.5)) { //if the second ball hits the brick
			speed2X = -speed2X; //speed2X reverses
			speed2Y = -speed2Y; //speed2Y reverses
			speed2X = speed2X - 0.5; //speed2X increases by 0.5
			speed2Y = speed2Y - 0.5; //speed2Y increases by 0.5
			pos2Y > brickY-25; //This makes sure that the ball doesn't go under the brick
			score = score + 1; //Makes the score go up 1
		}
		if (pos2Y >= 525){ //if the ball goes out of the screen
			status = 2; //make status 2
		}
	}
	fill(0, 0, 0); //make the font colour black
	textSize(15); //make the text size 15
	text(score, 25,25); //display the score on the top left on the screen
	if (posY >= 525) { //if the ball goes out of the screen
		status = 2; //make status 2
		}		
}
				
function endGame() {
	background(255, 0, 0); //sets the background colour to red
	textSize(30); //set the text size to 30
	fill(0, 0, 0); //set the text colour to black
	text("YOU FAILED", 155, 150); //display text "YOU FAILED"
	fill(50, 205, 50); //set the colour of the rectangle to green
	rect(125, 400, 250, 50); //draw the rectangle
	fill(0, 0, 0); //set the font colour to black
	text("Restart", 200, 440); //display "Restart" inside the rectangle that is drawn
	speedY = 0; //make sure that the ball doesn't bounce back up
	speed2Y = 0; //make sure that the ball doesn't bounce back up
	text("Your Score is:", 100, 350); //tells the score
	text(score, 300, 350);
	if(score < 21689) { //if the score is lower than 21689
		textSize(15); //set the text size to 15
		text("Try Again!! My high score is 21689 points", 115, 300); //display text
	}
	if(score >= 21689) { //if the score is higher than 21689
		textSize(15); //set the text size to 15
		text("Congrats!!! You have beaten my high score", 115, 300); //display text
	}
	if(mouseIsPressed && (mouseX >= 125) && (mouseX <= 375) && (mouseY >= 400) && (mouseY <= 450)) { //if restart rectangle is clicked, reset all the variables to what it was before the game has been played
		status = 0; //make status 0
		posX = 250; //x position of the ball
		posY = 250; //y position of the ball
		ballWidth = 25; //width of the ball
		speedX = 2; //x speed of the ball
		speedY = 5; //y speed of the ball
		brickX = 200; //x position of the brick
		brickY = 475; //y position of the brick
		speedBrick = 10; //speed of the brick
		score = 0; //starting score
		}
}

function brickB() {
	fill(4, 255, 0);
	rect(brickX, brickY, 100, 25);
}
