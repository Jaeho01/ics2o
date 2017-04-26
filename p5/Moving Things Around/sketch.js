
var posX = 400;
var posY = 400;
var ballLength = 100;
var speedX = 5;
var speedY = 5;
var rectX = 400;
var rectY = 750;


function setup() {
  createCanvas(1000, 800);
}

function draw() {
	background(0, 104, 10);
	//soccer ball
	fill(255, 255, 255);
	strokeWeight(1.5);
	ellipse(posX, posY, ballLength, ballLength);
	fill(0, 0, 0);
	//pentagon
	beginShape();
	vertex(posX, posY - ballLength/4);
	vertex(posX - ballLength/3.5, posY);
	vertex(posX - ballLength/5.5, posY + ballLength/3.5);
	vertex(posX + ballLength/5.5, posY + ballLength/3.5);
	vertex(posX + ballLength/3.5, posY);
	endShape(CLOSE);
	//lines
	line(posX, posY - ballLength/4, posX, posY - ballLength/2);
	line(posX - ballLength/3.5, posY, posX - ballLength/2, posY - ballLength/9);
	line(posX - ballLength/5.5, posY + ballLength/3.5, posX - ballLength/3.5, posY + ballLength/2.5);
	line(posX + ballLength/5.5, posY + ballLength/3.5, posX + ballLength/3.5, posY + ballLength/2.5);
	line(posX + ballLength/3.5, posY, posX + ballLength/2, posY - ballLength/9);
	posX = posX + speedX;
	posY = posY + speedY;
	if (posX <= 50) {
	  speedX = -speedX + random(-10, 10)
	  };
	if (posX >= 950) {
	  speedX = -speedX + random(-10, 10)
	  };
	if (posY <= 50) {
	  speedY = -speedY + random(-10, 10)
	  };
	if (posY >= 750) {
	  speedY = -speedY + random(-10, 10)
	  };
	goalie();
	
}

function goalie() {
  fill(0, 0, 255);
  rect (rectX, rectY, 200, 50);
}

function keyPressed() {
	if (keyCode == RIGHT_ARROW) {
		rectX += 10;
	}
	else if (keyCode == LEFT_ARROW) {
		rectX -= 10;
	}
}


