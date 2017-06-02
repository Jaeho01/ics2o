/*Summative Game
  Jaeho Jang
  2017-05-30 */

var posX = 250;
var posY = 250;
var ballWidth = 50;
var speedX = 2;
var speedY = 5;
var brickX = 200;
var brickY = 475;
var speedBrick = 10;



function setup() {
  createCanvas(500, 500);
  
}

function draw() {
  background(152,251,152);
  ellipse(posX, posY, ballWidth, ballWidth);
  posX = posX + speedX;
  posY = posY + speedY;
  if (posX > 475) {
      speedX = -speedX
      }
  if (posX < 25) {
      speedX = -speedX
    }

  if (posY < 25) {
      speedY = -speedY
    }
  
  if (keyIsDown(RIGHT_ARROW)) { 
		brickX += speedBrick;
		if (brickX >= 400) {
			brickX = 400;
		  } 
	}
  if (keyIsDown(LEFT_ARROW)) { 
		brickX -= speedBrick;
		if (brickX <= 0) {
			brickX = 0;
		  }
		  
	}
  if ((posX >= brickX) && (posX < brickX+100) && (posY >= brickY-25)) {
	  speedX = -speedX;
	  speedY = -speedY;
	  posY > brickY-25;
  }
  
  brickB();
  
}

function brickB() {
	rect(brickX, brickY, 100, 25);
}
