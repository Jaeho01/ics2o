function setup() {
  createCanvas(400, 400);
}

function draw() {
//background
background(0, 0, 0);
// bottom
fill(135, 206, 250);
rect(0, 350, 399, 50);
// bottom circle
fill(255, 255, 255);
ellipse(200, 300, 150, 150);
// middle circle
fill(255, 255, 255);
ellipse(200, 200, 100, 100);
// top circle
fill(255, 255, 255);
ellipse(200, 120, 75, 75);
// left arm
stroke(139, 69, 19);
line(160, 200, 50, 100);
// right arm
line(240, 200, 350, 100);
}
