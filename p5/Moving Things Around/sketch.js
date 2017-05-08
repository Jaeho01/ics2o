
var posX = 400;
var posY = 400;
var ballLength = 100;
var red = 0;
var green = 0;
var blue = 0;


function setup() {
	var myCanvas = createCanvas(1000, 800);
	myCanvas.parent('movingThingsAround');  
}

function draw() {
	background(red, green, blue);
	if (posX >= 200 && posX <= 350 && posY >= 200 && posY <= 350) { //left eye of the hidden face
		fill(138,43,226);
		rect(200, 200, 150, 150);
	}
	if (posX >= 650 && posX <= 800 && posY >= 200 && posY <= 350) { //right eye of the hidden face
		fill(138,43,226);
		rect(650, 200, 150, 150);
	}
	if (posX >= 200 && posX <= 800 && posY >= 550 && posY <= 700) { //mouth of the hidden face 
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
	vertex(posX, posY - ballLength/4); //top point of the pentagon
	vertex(posX - ballLength/3.5, posY); //left point of the pentagon
	vertex(posX - ballLength/5.5, posY + ballLength/3.5); //bottom left point of the pentagon
	vertex(posX + ballLength/5.5, posY + ballLength/3.5); //bottom right point of the pentagon
	vertex(posX + ballLength/3.5, posY); //right point of the pentagon
	endShape(CLOSE);
	//lines
	line(posX, posY - ballLength/4, posX, posY - ballLength/2);
	line(posX - ballLength/3.5, posY, posX - ballLength/2, posY - ballLength/9);
	line(posX - ballLength/5.5, posY + ballLength/3.5, posX - ballLength/3.5, posY + ballLength/2.5);
	line(posX + ballLength/5.5, posY + ballLength/3.5, posX + ballLength/3.5, posY + ballLength/2.5);
	line(posX + ballLength/3.5, posY, posX + ballLength/2, posY - ballLength/9);

	if (keyIsDown(RIGHT_ARROW)) { //when right arrow key is pressed, the ball moves right
		posX += 10;
	}
	if (keyIsDown(LEFT_ARROW)) { //when left arrow key is pressed, the ball moves left
		posX -= 10;
	}
	if (keyIsDown(UP_ARROW)) { //when up arrow key is pressed, the ball moves up
		posY -= 10;
	}
	if (keyIsDown(DOWN_ARROW)) { //when down arrow key is pressed, the ball moves down
		posY += 10;
	}
	if (keyIsDown(87)) { //when w key is pressed, the red value of the background goes up
		red = red +2;
	}
	if (keyIsDown(65)) { //when a key is pressed, the green value of the background goes up
		green = green +2;
	}
	if (keyIsDown(68)) { //when d key is pressed, the blue value of the background goes up
		blue = blue +2;
	}
	if (keyIsDown(82)) { //when r key is pressed, the red value of the background goes up
		red = red +2;
	}
	if (keyIsDown(71)) { //when g key is pressed, the green value of the background goes up
		green = green +2;
	}
	if (keyIsDown(66)) { //when b key is pressed, the blue value of the background goes up
		blue = blue +2;
	}
	if (keyIsDown(73)) { //when i key is pressed, the red value of the background goes down
		red = red -2;
	}
	if (keyIsDown(74)) { //when j key is pressed, the green value of the background goes down
		green = green -2;
	}
	if (keyIsDown(76)) { //wnen l key is pressed, the blue value of the background goes down
		blue = blue -2;
	}
	if (keyIsDown(79)) { //when o key is pressed, the background goes to its original colour (field green)
		red = 0;
		green = 104;
		blue = 10;
	}
	if (keyIsDown(83)) { //when s key is pressed, the background goes black 
		red = 0;
		green = 0;
		blue = 0;
	}
	
}



	
