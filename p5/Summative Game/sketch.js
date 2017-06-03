/*Summative Game
  Jaeho Jang
  2017-05-30 */

var posX = 250;
var posY = 250;
var ballWidth = 25;
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
	if (posX > 487.5) {
      speedX = -speedX
		}
	if (posX < 12.5) {
      speedX = -speedX
		}
	if (posY < 12.5) {
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
	if ((posX >= brickX) && (posX < brickX+100) && (posY >= brickY-12.5)) {
		speedX = -speedX;
		speedY = -speedY;
		posY > brickY-25;
		}
	brickB();
	if (posY >= 525) {
		fill(255, 0, 0);
		rect (0, 0, 500, 500);
		textSize(30);
		text("YOU FAILED", 200, 150);
		fill(50, 205, 50);
		rect(125, 350, 250, 50);
		}
	

	
  
}

function brickB() {
	rect(brickX, brickY, 100, 25);
}
