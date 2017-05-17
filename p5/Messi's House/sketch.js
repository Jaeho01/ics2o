/*Messi's House
  Jaeho Jang
  2017-05-16 */

function setup() {
  createCanvas(400, 400);
}

function draw() {
xPos = 60;
yPos = 210;
houseLength = 275;
houseHeight = 140;

// background
background(116, 171, 212);

// field
fill(0, 255, 0);
arc(198, 396, 445, 140, 3.14, 6.28);

// house
fill(219, 182, 81);
rect(xPos, yPos, houseLength, houseHeight);

// roof
fill(97, 39, 0);
triangle(xPos, yPos, xPos+houseLength*1.0, yPos, xPos+houseLength*0.5, yPos-houseHeight*0.5);

// frontDoor
fill(29, 152, 196);
rect(xPos+houseLength/2.1, yPos+houseHeight*1.0, houseLength*0.10, houseHeight*-0.50);
fill(0, 0, 0);
ellipse(xPos+houseLength*0.55, yPos+houseHeight*0.80, houseLength*0.02, houseLength*0.02);

// windows
fill(255, 255, 255);
ellipse(xPos+houseLength*0.25, yPos+houseHeight*0.40, houseLength*0.20, houseHeight*0.40);
ellipse(xPos+houseLength*0.75, yPos+houseHeight*0.40, houseLength*0.20, houseHeight*0.40);
line(xPos+houseLength*0.25, yPos+houseHeight*0.20, xPos+houseLength*0.25, yPos+houseHeight*0.59);
line(xPos+houseLength*0.15, yPos+houseHeight*0.40, xPos+houseLength*0.35, yPos+houseHeight*0.40);
line(xPos+houseLength*0.65, yPos+houseHeight*0.40, xPos+houseLength*0.85, yPos+houseHeight*0.40);
line(xPos+houseLength*0.75, yPos+houseHeight*0.2, xPos+houseLength*0.75, yPos+houseHeight*0.6);

var xPos = 139;
var yPos = 285;
var houseLength = 120;
var houseHeight = 65;


// house
fill(219, 182, 81);
rect(xPos, yPos, houseLength, houseHeight);

// roof
fill(97, 39, 0);
triangle(xPos, yPos, xPos+houseLength*1.0, yPos, xPos+houseLength*0.5, yPos-houseHeight*0.5);

// frontDoor
fill(29, 152, 196);
rect(xPos+houseLength/2.1, yPos+houseHeight*1.0, houseLength*0.10, houseHeight*-0.50);
fill(0, 0, 0);
ellipse(xPos+houseLength*0.55, yPos+houseHeight*0.80, houseLength*0.02, houseLength*0.02);

// windows
fill(255, 255, 255);
ellipse(xPos+houseLength*0.25, yPos+houseHeight*0.40, houseLength*0.20, houseHeight*0.40);
ellipse(xPos+houseLength*0.75, yPos+houseHeight*0.40, houseLength*0.20, houseHeight*0.40);
line(xPos+houseLength*0.25, yPos+houseHeight*0.20, xPos+houseLength*0.25, yPos+houseHeight*0.59);
line(xPos+houseLength*0.15, yPos+houseHeight*0.40, xPos+houseLength*0.35, yPos+houseHeight*0.40);
line(xPos+houseLength*0.65, yPos+houseHeight*0.40, xPos+houseLength*0.85, yPos+houseHeight*0.40);
line(xPos+houseLength*0.75, yPos+houseHeight*0.2, xPos+houseLength*0.75, yPos+houseHeight*0.6);
}
