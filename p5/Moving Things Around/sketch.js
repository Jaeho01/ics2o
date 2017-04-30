
var posX = 400;
var posY = 400;
var ballLength = 100;
var red = 0;
var green = 0;
var blue = 0;


function setup() {
  createCanvas(1000, 800);
}

function draw() {
	background(red, green, blue);
	if (posX >= 200 && posX <= 350 && posY >= 200 && posY <= 350) {
		fill(138,43,226);
		rect(200, 200, 150, 150);
	}
	if (posX >= 650 && posX <= 800 && posY >= 200 && posY <= 350) {
		fill(138,43,226);
		rect(650, 200, 150, 150);
	}
	if (posX >= 200 && posX <= 800 && posY >= 550 && posY <= 700) {
		fill(138,43,226);
		rect(200, 550, 600, 150);
	}
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

	if (keyIsDown(RIGHT_ARROW)) {
		posX += 10;
	}
	if (keyIsDown(LEFT_ARROW)) {
		posX -= 10;
	}
	if (keyIsDown(UP_ARROW)) {
		posY -= 10;
	}
	if (keyIsDown(DOWN_ARROW)) {
		posY += 10;
	}
	if (keyIsDown(87)) {
		red = red +1;
	}
	if (keyIsDown(65)) {
		green = green +1;
	}
	if (keyIsDown(68)) {
		blue = blue +1;
	}
	
}



	
