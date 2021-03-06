/*Summative Game
  Jaeho Jang
  2017-06-19 */

var posX = 300; //x position of the ball
var posY = 250; //y position of the ball
var pos2X = 100; //x position of the second ball
var pos2Y = 200; //y position of the second ball
var ballWidth = 25; //width of the ball
var speedX = 2; //x speed of the ball
var speedY = 5; //y speed of the ball
var brickX = 200; //x position of the brick
var brickY = 475; //y position of the brick
var speedBrick = 20; //speed of the brick
var score = 0; //starting score
var status = 0; //makes the status 0 
var speed2X = 5; //x speed of the second ball
var speed2Y = 5; //y speed of the second ball
var boxX1 = 50; //first x coordinate for the brick
var boxX2 = 200; //second x coordinate for the brick
var boxX3 = 350; //third x coordinate for the brick
var boxY1 = 50; //first y coordinate for the brick
var boxY2 = 150; //second y coordinate for the brick
var boxY3 = 250; //third y coordinate for the brick
var boxW = 75; //width of the brick
var boxL = 25; //length of the brick
var mySound; // Creates a variable to hold the sound
//took it out because of copyright
/*var myMusic; // Creates a variable to hold the music 
var myMusic2; // Creates a variable to hold the music
var myMusic3; // Creates a variable to hold the music
var myMusic4; // Creates a variable to hold the music
var myMusic5; // Creates a variable to hold the music
var myMusic6; // Creates a variable to hold the music*/

function preload() {
  mySound = loadSound('Jump-SoundBible.com-1007297584.mp3');  // Loads the sound file into the variable 
  //took it out because of copyright
  /*myMusic = loadSound('R. City ft. Adam Levine - Locked Away.mp3'); // Loads the sound file into the variable (Locked Away)
  myMusic2 = loadSound('audio.mp3'); // Loads the sound file into the variable (That's What I Like)
  myMusic3 = loadSound('12. Supermarket Flowers - (www.SongsLover.com).mp3'); // Loads the sound file into the variable (Supermarket Flowers)
  myMusic4 = loadSound('tumblr_m4z6fjOaDA1qe5g8ko1.mp3'); // Loads the sound file into the variable (All I Do Is Win)
  myMusic5 = loadSound('Will Champlin and Adam Levine-Tiny Dancer-The Voice 5 Top 3 (1).mp3'); // Loads the sound file into the variable (Tiny Dancer)
  myMusic6 = loadSound('AliciaKeys_NewYork.mp3'); // Loads the sound file into the variable (Empire State Of Mind)*/
}

function setup() {
  createCanvas(500, 500);
  status = 0; //makes sure that the status is 0 when the game starts
  speed2X = 5; //x speed of the second ball
  speed2Y = 5; //y speed of the second ball
  mySound.setVolume(0.1); //set the volume to 0.1
  //took it out because of copyright
  /*myMusic.setVolume(0.2); //set the volume to 0.2
  myMusic2.setVolume(0.2); //set the volume to 0.2
  myMusic3.setVolume(0.3); //set the volume to 0.3
  myMusic4.setVolume(0.2); //set the volume to 0.2
  myMusic5.setVolume(0.2); //set the volume to 0.2
  myMusic6.setVolume(0.2); //set the volume to 0.2
  myMusic.play(); //play the song #1*/
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
	else if (status == 3) { //When the status is 3, display the howTo page
		howTo();
	}
}
	
function startup() {
	background(0, 191, 255); //set the background to light blue
	strokeWeight(2); //set the outline thickness to 2
	fill(0, 0, 128); //make the colour of the rectangle blue
	rect(125, 350, 250, 50); //draw the rectangle
	rect(125, 290, 250, 50); //draw the rectangle
	textSize(50); //set the text size to 50
	text("Bouncy Ball", 120, 200); //Display "Bouncy Ball" on the screen
	textSize(30); //set the text size to 30
	fill(255, 255, 255); //set the text colour to white
	text("How to Play", 170, 325); //display "How to Play" in the rectangle that had been drawn 
	text("Play", 220, 385); //display "Play" in the rectangle that had been drawn 
	if(mouseIsPressed && (mouseX >= 125) && (mouseX <= 375) && (mouseY >= 290) && (mouseY <= 340)) { //when the play box is clicked, change the status to 1
		status = 3;
	}
	if(mouseIsPressed && (mouseX >= 125) && (mouseX <= 375) && (mouseY >= 350) && (mouseY <= 400)) { //when the play box is clicked, change the status to 1
		status = 1;
	}
	//took it out because of copyright
	/*fill(124, 252, 0);
	rect(450, 0, 50, 50);
	if(mouseIsPressed && (mouseX >= 450) && (mouseX <= 500) && (mouseY >= 0) && (mouseY <= 50)) { //when the box is clicked, play music #1
		myMusic.stop();
  		myMusic2.setVolume(0.0); //turn the volume off
  		myMusic3.setVolume(0.0); //turn the volume off
		myMusic4.setVolume(0.0); //turn the volume off
		myMusic5.setVolume(0.0); //turn the volume off
		myMusi6.setVolume(0.0); //turn the volume off
		myMusic.play();
	}
	rect(450, 60, 50, 50);
	if(mouseIsPressed && (mouseX >= 450) && (mouseX <= 500) && (mouseY >= 60) && (mouseY <= 110)) { //when the box is clicked, play music #2
  		myMusic2.stop();
		myMusic.setVolume(0.0); //turn the volume off
  		myMusic3.setVolume(0.0); //turn the volume off
  		myMusic4.setVolume(0.0); //turn the volume off
		myMusic5.setVolume(0.0); //turn the volume off
		myMusic6.setVolume(0.0); //turn the volume off
		myMusic2.play();
	}
	rect(450, 120, 50, 50);
	if(mouseIsPressed && (mouseX >= 450) && (mouseX <= 500) && (mouseY >= 120) && (mouseY <= 170)) { //when the box is clicked, play music #3
		myMusic3.stop();
		myMusic.setVolume(0.0); //turn the volume off
  		myMusic2.setVolume(0.0); //turn the volume off
  		myMusic4.setVolume(0.0); //turn the volume off
		myMusic5.setVolume(0.0); //turn the volume off
		myMusic6.setVolume(0.0); //turn the volume off
		myMusic3.play();
	}
	rect(450, 180, 50, 50);
	if(mouseIsPressed && (mouseX >= 450) && (mouseX <= 500) && (mouseY >= 180) && (mouseY <= 230)) { //when the box is clicked, play music #4
		  myMusic4.stop();
		  myMusic.setVolume(0.0); //turn the volume off
  		  myMusic2.setVolume(0.0); //turn the volume off
  		  myMusic3.setVolume(0.0); //turn the volume off
		  myMusic5.setVolume(0.0); //turn the volume off
		  myMusic6.setVolume(0.0); //turn the volume off
		  myMusic4.play();
	}
	rect(450, 240, 50, 50);
	if(mouseIsPressed && (mouseX >= 450) && (mouseX <= 500) && (mouseY >= 240) && (mouseY <= 290)) { //when the box is clicked, play music #5
		  myMusic5.stop();
		  myMusic.setVolume(0.0); //turn the volume off
  		  myMusic2.setVolume(0.0); //turn the volume off
  		  myMusic3.setVolume(0.0); //turn the volume off
		  myMusic4.setVolume(0.0); //turn the volume off
		  myMusic6.setVolume(0.0); //turn the volume off
		  myMusic5.play();
	}
	rect(450, 300, 50, 50);
	if(mouseIsPressed && (mouseX >= 450) && (mouseX <= 500) && (mouseY >= 300) && (mouseY <= 350)) { //when the box is clicked, play music #6
		  myMusic6.stop();
		  myMusic.setVolume(0.0); //turn the volume off
  		  myMusic2.setVolume(0.0); //turn the volume off
  		  myMusic3.setVolume(0.0); //turn the volume off
		  myMusic4.setVolume(0.0); //turn the volume off
		  myMusic5.setVolume(0.0); //turn the volume off
		  myMusic6.play();
	}
	fill(255, 0, 0);
	rect(450, 360, 50, 50);
	if(mouseIsPressed && (mouseX >= 450) && (mouseX <= 500) && (mouseY >= 360) && (mouseY <= 410)) { //when the box is clicked, play music #3
		  myMusic.setVolume(0.0); //turn the volume off
  		  myMusic2.setVolume(0.0); //turn the volume off
  		  myMusic3.setVolume(0.0); //turn the volume off
		  myMusic4.setVolume(0.0); //turn the volume off
		  myMusic5.setVolume(0.0); //turn the volume off
		  myMusic6.setVolume(0.0); //turn the volume off
	}
	fill(0, 0, 0);
	textSize(20);
	text("1", 470, 30);
	text("2", 470, 90);
	text("3", 470, 150);
	text("4", 470, 210);
	text("5", 470, 270);
	text("6", 470, 330); */
}

function howTo() {
	background(192, 192, 192);
	fill(0, 0, 128); //make the colour of the rectangle blue
	textSize(30); //sets the text size to 30
	text("How to Play the Game", 100, 80);
	rect(125, 400, 250, 50); //draw the rectangle
	fill(0, 0, 0); //sets the font color to black
	textSize(15); //sets the font size to 15
	text("The goal of the game is to get the highest score by keeping the balls", 20, 150);
	text("in the screen", 200, 175);
	text("You will be able to control the brick at the bottom with your", 20, 200);
	text("left-arrow key and right-arrow key", 150, 225);
	text("The brick at the bottom will bounce the balls back to the screen", 20, 250);
	text("The ball will bounce off the bricks on the screen, sometimes", 20, 300);
	text("If one of the ball hits the bottom side, the game's over", 20, 350);
	fill(255, 255, 255); //set the text colour to white
	textSize(30); //sets the font size to 30
	text("Back", 157.5, 435); //display "Back" in the rectangle that had been drawn 
	text("Play", 282.5, 435); //display "Play" in the rectangle that had been drawn 
	strokeWeight(5); 
	fill(0, 0, 0);
	line(250, 400, 250, 450);
	if(mouseIsPressed && (mouseX >= 125) && (mouseX <= 250) && (mouseY >= 400) && (mouseY <= 450)) { //when the back box is clicked, change the status to 0
		status = 0;
	}
	if(mouseIsPressed && (mouseX >= 250) && (mouseX <= 375) && (mouseY >= 400) && (mouseY <= 450)) { //when the back box is clicked, change the status to 0
		status = 1;
	}
}
	
function playGame() {
	background(124 ,252 ,0); //set the background to green
	strokeWeight(2); //set the outline thickness to 2
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
	if ((posX >= brickX +15) && (posX < brickX+113) && (posY >= brickY-12.5)) { //when the ball hits the brick
		speedX = -speedX; //speedX reverses
		speedY = -speedY; //speedY reverses
		speedX = speedX - 0.5; //speedX increases by 0.5
		speedY = speedY - 0.5; //speedY increases by 0.5
		posY > brickY-25; //This makes sure that the ball doesn't go under the brick
		score = score + 1; //Makes the score go up 1
		mySound.play(); //plays the sound
			}
	if (posY >= brickY-12.5 && posX >= brickX && posX < brickX+113) { //If the ball gets trapped in the brick, it puts it back up in the screen
		posY = brickY-12.5;
	}
	if (pos2Y >= brickY-12.5 && pos2X >= brickX && pos2X < brickX+113) { //If the ball gets trapped in the brick, it puts it back up in the screen
		pos2Y = brickY-12.5;
	}
	brickB();
	if (score >= 14) { //if the score is 12 or larger
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
		if ((pos2X >= brickX - 20) && (pos2X < brickX+120) && (pos2Y >= brickY-12.5)) { //if the second ball hits the brick
			speed2X = -speed2X; //speed2X reverses
			speed2Y = -speed2Y; //speed2Y reverses
			speed2X = speed2X - 0.5; //speed2X increases by 0.5
			speed2Y = speed2Y - 0.5; //speed2Y increases by 0.5
			//pos2Y > brickY-25; //This makes sure that the ball doesn't go under the brick
			score = score + 1; //Makes the score go up 1
		}
		if (pos2Y >= 525){ //if the ball goes out of the screen
			status = 2; //make status 2
		}
	}
	fill(192, 192, 192); //set the colour to grey
	
	rect(boxX1, boxY1, boxW, boxL); //draw rectangle 1
	
	if ((posX >= boxX1 - 12.5) && (posX <= boxX1 + boxW + 12.5) && (posY <= boxY1 - 12.5) && (posY >= boxY1 - 2 - 12.5)) { //top
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX1 - 12.5) && (pos2X <= boxX1 + boxW + 12.5) && (pos2Y <= boxY1 - 12.5) && (pos2Y >= boxY1 - 2 - 12.5)) { //top
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}
	if ((posX >= boxX1 - 12.5) && (posX <= boxX1 + boxW + 12.5) && (posY >= boxY1 + boxL + 12.5) && (posY <= boxY1 + boxL + 2 + 12.5)) { //bottom
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX1 - 12.5) && (pos2X <= boxX1 + boxW + 12.5) && (pos2Y >= boxY1 + boxL + 12.5) && (pos2Y <= boxY1 + boxL + 2 + 12.5)) { //bottom
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}
	if ((posX >= boxX1 - 2 - 12.5) && (posX <= boxX1 - 12.5) && (posY >= boxY1) && (posY <= boxY1 + boxL)) { //left
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX1 - 2 - 12.5) && (pos2X <= boxX1 - 12.5) && (pos2Y >= boxY1) && (pos2Y <= boxY1 + boxL)) { //left
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}
	if ((posX >= boxX1 + boxW) && (posX <= boxX1 + boxW + 2) && (posY >= boxY1) && (posY <= boxY1 +boxL)) { //right
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX1 + boxW) && (pos2X <= boxX1 + boxW + 2) && (pos2Y >= boxY1) && (pos2Y <= boxY1 +boxL)) { //right
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}
	
	rect(boxX1, boxY2, boxW, boxL); //draw rectangle 2
	
	if ((posX >= boxX1 - 12.5) && (posX <= boxX1 + boxW + 12.5) && (posY <= boxY2 - 12.5) && (posY >= boxY2 - 2 - 12.5)) { //top
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX1 - 12.5) && (pos2X <= boxX1 + boxW + 12.5) && (pos2Y <= boxY2 - 12.5) && (pos2Y >= boxY2 - 2 - 12.5)) { //top
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}
	if ((posX >= boxX1 - 12.5) && (posX <= boxX1 + boxW + 12.5) && (posY >= boxY2 + boxL + 12.5) && (posY <= boxY2 + boxL + 2 + 12.5)) { //bottom
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX1 - 12.5) && (pos2X <= boxX1 + boxW + 12.5) && (pos2Y >= boxY2 + boxL + 12.5) && (pos2Y <= boxY2 + boxL + 2 + 12.5)) { //bottom
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}	
	if ((posX >= boxX1 - 2 - 12.5) && (posX <= boxX1 - 12.5) && (posY >= boxY2) && (posY <= boxY2 + boxL)) { //left
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX1 - 2 - 12.5) && (pos2X <= boxX1 - 12.5) && (pos2Y >= boxY2) && (pos2Y <= boxY2 + boxL)) { //left
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}
	if ((posX >= boxX1 + boxW) && (posX <= boxX1 + boxW + 2) && (posY >= boxY2) && (posY <= boxY2 +boxL)) { //right
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX1 + boxW) && (pos2X <= boxX1 + boxW + 2) && (pos2Y >= boxY2) && (pos2Y <= boxY2 +boxL)) { //right
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}
	    
	rect(boxX1, boxY3, boxW, boxL); //draw rectangle 3
	
	if ((posX >= boxX1 - 12.5) && (posX <= boxX1 + boxW + 12.5) && (posY <= boxY3 - 12.5) && (posY >= boxY3 - 2 - 12.5)) { //top
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX1 - 12.5) && (pos2X <= boxX1 + boxW + 12.5) && (pos2Y <= boxY3 - 12.5) && (pos2Y >= boxY3 - 2 - 12.5)) { //top
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}
	if ((posX >= boxX1 - 12.5) && (posX <= boxX1 + boxW + 12.5) && (posY >= boxY3 + boxL + 12.5) && (posY <= boxY3 + boxL + 2 + 12.5)) { //bottom
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX1 - 12.5) && (pos2X <= boxX1 + boxW + 12.5) && (pos2Y >= boxY3 + boxL + 12.5) && (pos2Y <= boxY3 + boxL + 2 + 12.5)) { //bottom
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}
	if ((posX >= boxX1 - 2 - 12.5) && (posX <= boxX1 - 12.5) && (posY >= boxY3) && (posY <= boxY3 + boxL)) { //left
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX1 - 2 - 12.5) && (pos2X <= boxX1 - 12.5) && (pos2Y >= boxY3) && (pos2Y <= boxY3 + boxL)) { //left
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}
	if ((posX >= boxX1 + boxW) && (posX <= boxX1 + boxW + 2) && (posY >= boxY3) && (posY <= boxY3 +boxL)) { //right
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX1 + boxW) && (pos2X <= boxX1 + boxW + 2) && (pos2Y >= boxY3) && (pos2Y <= boxY3 +boxL)) { //right
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}
	    
	rect(boxX2, boxY1, boxW, boxL); //draw rectangle 4
	
	if ((posX >= boxX2 - 12.5) && (posX <= boxX2 + boxW + 12.5) && (posY <= boxY1 - 12.5) && (posY >= boxY1 - 2 - 12.5)) { //top
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX2 - 12.5) && (pos2X <= boxX2 + boxW + 12.5) && (pos2Y <= boxY1 - 12.5) && (pos2Y >= boxY1 - 2 - 12.5)) { //top
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}
	if ((posX >= boxX2 - 12.5) && (posX <= boxX2 + boxW + 12.5) && (posY >= boxY1 + boxL + 12.5) && (posY <= boxY1 + boxL + 2 + 12.5)) { //bottom
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX2 - 12.5) && (pos2X <= boxX2 + boxW + 12.5) && (pos2Y >= boxY1 + boxL + 12.5) && (pos2Y <= boxY1 + boxL + 2 + 12.5)) { //bottom
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}
	if ((posX >= boxX2 - 2 - 12.5) && (posX <= boxX2 - 12.5) && (posY >= boxY1) && (posY <= boxY1 + boxL)) { //left
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX2 - 2 - 12.5) && (pos2X <= boxX2 - 12.5) && (pos2Y >= boxY1) && (pos2Y <= boxY1 + boxL)) { //left
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}
	if ((posX >= boxX2 + boxW + 12.5) && (posX <= boxX2 + boxW + 2 + 12.5) && (posY >= boxY1) && (posY <= boxY1 +boxL)) { //right
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX2 + boxW + 12.5) && (pos2X <= boxX2 + boxW + 2 + 12.5) && (pos2Y >= boxY1) && (pos2Y <= boxY1 +boxL)) { //right
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}
	    
	rect(boxX3, boxY1, boxW, boxL); //draw rectangle 5
	
	if ((posX >= boxX3 - 12.5) && (posX <= boxX3 + boxW + 12.5) && (posY <= boxY1 - 12.5) && (posY >= boxY1 - 2 - 12.5)) { //top
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX3 - 12.5) && (pos2X <= boxX3 + boxW + 12.5) && (pos2Y <= boxY1 - 12.5) && (pos2Y >= boxY1 - 2 - 12.5)) { //top
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}
	if ((posX >= boxX3 - 12.5) && (posX <= boxX3 + boxW + 12.5) && (posY >= boxY1 + boxL + 12.5) && (posY <= boxY1 + boxL + 2 + 12.5)) { //bottom
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX3 - 12.5) && (pos2X <= boxX3 + boxW + 12.5) && (pos2Y >= boxY1 + boxL + 12.5) && (pos2Y <= boxY1 + boxL + 2 + 12.5)) { //bottom
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}
	if ((posX >= boxX3 - 2 - 12.5) && (posX <= boxX3 - 12.5) && (posY >= boxY1) && (posY <= boxY1 + boxL)) { //left
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX3 - 2 - 12.5) && (pos2X <= boxX3 - 12.5) && (pos2Y >= boxY1) && (pos2Y <= boxY1 + boxL)) { //left
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}
	if ((posX >= boxX3 + boxW + 12.5) && (posX <= boxX3 + boxW + 2 + 12.5) && (posY >= boxY1) && (posY <= boxY1 +boxL)) { //right
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX3 + boxW + 12.5) && (pos2X <= boxX3 + boxW + 2 + 12.5) && (pos2Y >= boxY1) && (pos2Y <= boxY1 +boxL)) { //right
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}
	    
	rect(boxX2, boxY2, boxW, boxL); //draw rectangle 6

	if ((posX >= boxX2 - 12.5) && (posX <= boxX2 + boxW + 12.5) && (posY <= boxY2 - 12.5) && (posY >= boxY2 - 2 - 12.5)) { //top
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX2 - 12.5) && (pos2X <= boxX2 + boxW + 12.5) && (pos2Y <= boxY2 - 12.5) && (pos2Y >= boxY2 - 2 - 12.5)) { //top
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}
	if ((posX >= boxX2 - 12.5) && (posX <= boxX2 + boxW + 12.5) && (posY >= boxY2 + boxL + 12.5) && (posY <= boxY2 + boxL + 2 + 12.5)) { //bottom
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX2 - 12.5) && (pos2X <= boxX2 + boxW + 12.5) && (pos2Y >= boxY2 + boxL + 12.5) && (pos2Y <= boxY2 + boxL + 2 + 12.5)) { //bottom
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}
	if ((posX >= boxX2 - 2 - 12.5) && (posX <= boxX2 - 12.5) && (posY >= boxY2) && (posY <= boxY2 + boxL)) { //left
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX2 - 2 - 12.5) && (pos2X <= boxX2 - 12.5) && (pos2Y >= boxY2) && (pos2Y <= boxY2 + boxL)) { //left
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}
	if ((posX >= boxX2 + boxW + 12.5) && (posX <= boxX2 + boxW + 2 + 12.5) && (posY >= boxY2) && (posY <= boxY2 +boxL)) { //right
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX2 + boxW + 12.5) && (pos2X <= boxX2 + boxW + 2 + 12.5) && (pos2Y >= boxY2) && (pos2Y <= boxY2 +boxL)) { //right
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}
	
	rect(boxX3, boxY2, boxW, boxL); //draw rectangle 7
	
	if ((posX >= boxX3 - 12.5) && (posX <= boxX3 + boxW + 12.5) && (posY <= boxY2 - 12.5) && (posY >= boxY2 - 2 - 12.5)) { //top
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX3 - 12.5) && (pos2X <= boxX3 + boxW + 12.5) && (pos2Y <= boxY2 - 12.5) && (pos2Y >= boxY2 - 2 - 12.5)) { //top
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}
	if ((posX >= boxX3 - 12.5) && (posX <= boxX3 + boxW + 12.5) && (posY >= boxY2 + boxL + 12.5) && (posY <= boxY2 + boxL + 2 + 12.5)) { //bottom
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX3 - 12.5) && (pos2X <= boxX3 + boxW + 12.5) && (pos2Y >= boxY2 + boxL + 12.5) && (pos2Y <= boxY2 + boxL + 2 + 12.5)) { //bottom
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}	
	if ((posX >= boxX3 - 2 - 12.5) && (posX <= boxX3 - 12.5) && (posY >= boxY2) && (posY <= boxY2 + boxL)) { //left
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX3 - 2 - 12.5) && (pos2X <= boxX3 - 12.5) && (pos2Y >= boxY2) && (pos2Y <= boxY2 + boxL)) { //left
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}
	if ((posX >= boxX3 + boxW + 12.5) && (posX <= boxX3 + boxW + 2 + 12.5) && (posY >= boxY2) && (posY <= boxY2 +boxL)) { //right
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX3 + boxW + 12.5) && (pos2X <= boxX3 + boxW + 2 + 12.5) && (pos2Y >= boxY2) && (pos2Y <= boxY2 +boxL)) { //right
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}
	     
	rect(boxX2, boxY3, boxW, boxL); //draw rectangle 8
	
	if ((posX >= boxX2 - 12.5) && (posX <= boxX2 + boxW + 12.5) && (posY <= boxY3 - 12.5) && (posY >= boxY3 - 2 - 12.5)) { //top
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX2 - 12.5) && (pos2X <= boxX2 + boxW + 12.5) && (pos2Y <= boxY3 - 12.5) && (pos2Y >= boxY3 - 2 - 12.5)) { //top
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}
	if ((posX >= boxX2 - 12.5) && (posX <= boxX2 + boxW + 12.5) && (posY >= boxY3 + boxL + 12.5) && (posY <= boxY3 + boxL + 2 + 12.5)) { //bottom
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX2 - 12.5) && (pos2X <= boxX2 + boxW + 12.5) && (pos2Y >= boxY3 + boxL + 12.5) && (pos2Y <= boxY3 + boxL + 2 + 12.5)) { //bottom
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}
	if ((posX >= boxX2 - 2 - 12.5) && (posX <= boxX2 - 12.5) && (posY >= boxY3) && (posY <= boxY3 + boxL)) { //left
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX2 - 2 - 12.5) && (pos2X <= boxX2 - 12.5) && (pos2Y >= boxY3) && (pos2Y <= boxY3 + boxL)) { //left
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}
	if ((posX >= boxX2 + boxW + 12.5) && (posX <= boxX2 + boxW + 2 + 12.5) && (posY >= boxY3) && (posY <= boxY3 +boxL)) { //right
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX2 + boxW + 12.5) && (pos2X <= boxX2 + boxW + 2 + 12.5) && (pos2Y >= boxY3) && (pos2Y <= boxY3 +boxL)) { //right
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}
	     
	rect(boxX3, boxY3, boxW, boxL); //draw rectangle 9
	
	if ((posX >= boxX3 - 12.5) && (posX <= boxX3 + boxW + 12.5) && (posY <= boxY3 - 12.5) && (posY >= boxY3 - 2 - 12.5)) { //top
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX3 - 12.5) && (pos2X <= boxX3 + boxW+ 12.5) && (pos2Y <= boxY3 - 12.5) && (pos2Y >= boxY3 - 2 - 12.5)) { //top
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}
	if ((posX >= boxX3 - 12.5) && (posX <= boxX3 + boxW + 12.5) && (posY >= boxY3 + boxL + 12.5) && (posY <= boxY3 + boxL + 2 + 12.5)) { //bottom
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX3 - 12.5) && (pos2X <= boxX3 + boxW + 12.5) && (pos2Y >= boxY3 + boxL + 12.5) && (pos2Y <= boxY3 + boxL + 2 + 12.5)) { //bottom
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}
	if ((posX >= boxX3 - 2 - 12.5) && (posX <= boxX3 - 12.5) && (posY >= boxY3) && (posY <= boxY3 + boxL)) { //left
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX3 - 2 - 12.5) && (pos2X <= boxX3 - 12.5) && (pos2Y >= boxY3) && (pos2Y <= boxY3 + boxL)) { //left
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
	}
	if ((posX >= boxX3 + boxW + 12.5) && (posX <= boxX3 + boxW + 2 + 12.5) && (posY >= boxY3) && (posY <= boxY3 +boxL)) { //right
		score = score + 1;
		speedX = -speedX;
		speedY = -speedY;
	} 
	if ((pos2X >= boxX3 + boxW + 12.5) && (pos2X <= boxX3 + boxW + 2 + 12.5) && (pos2Y >= boxY3) && (pos2Y <= boxY3 +boxL)) { //right
		score = score + 1;
		speed2X = -speed2X;
		speed2Y = -speed2Y;
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
	strokeWeight(2); //set the outline thickness to 2
	textSize(30); //set the text size to 30
	fill(0, 0, 0); //set the text colour to black
	text("YOU FAILED", 155, 150); //display text "YOU FAILED"
	fill(50, 205, 50); //set the colour of the rectangle to green
	rect(125, 400, 250, 50); //draw the rectangle
	fill(0, 0, 0); //set the font colour to black
	text("Restart", 200, 440); //display "Restart" inside the rectangle that is drawn
	speedY = 0; //make sure that the ball doesn't bounce back up
	speed2Y = 0; //make sure that the ball doesn't bounce back up
	text("Your Score is:", 125, 350); //tells the score
	text(score, 325, 350);
	if(score < 42) { //if the score is lower than 42
		textSize(15); //set the text size to 15
		text("Try Again!! My high score is 42 points", 115, 310); //display text
	}
	if(score >= 42) { //if the score is higher than 42
		textSize(15); //set the text size to 15
		text("Congrats!!! You have beaten my high score", 115, 300); //display text
	}
	if(mouseIsPressed && (mouseX >= 125) && (mouseX <= 375) && (mouseY >= 400) && (mouseY <= 450)) { //if restart rectangle is clicked, reset all the variables to what it was before the game has been played
		posX = 300; //x position of the ball
		posY = 250; //y position of the ball
		pos2X = 100; //x position of the second ball
		pos2Y = 200; //y position of the second ball
		ballWidth = 25; //width of the ball
		speedX = 2; //x speed of the ball
		speedY = 5; //y speed of the ball
		brickX = 200; //x position of the brick
		brickY = 475; //y position of the brick
		speedBrick = 20; //speed of the brick
		score = 0; //starting score
		status = 0; //makes the status 0 
		speed2X = 5; //x speed of the second ball
		speed2Y = 5; //y speed of the second ball
		boxX1 = 50;
		boxX2 = 200;
		boxX3 = 350;
		boxY1 = 50;
		boxY2 = 150; 
		boxY3 = 250;
		boxW = 75;
		boxL = 25;
		}
}

function brickB() {
	fill(4, 255, 0);
	rect(brickX, brickY, 100, 25);
}
