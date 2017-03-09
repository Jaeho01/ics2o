function setup() {
  createCanvas(400, 400);
}

function draw() {
//background
background(255,165,0);
// bottom
rect(0, 350, 399, 50);
// bottom circle
ellipse(200, 300, 150, 150);
// middle circle
ellipse(200, 200, 100, 100);
// top circle
ellipse(200, 120, 75, 75);
// left arm
line(160, 200, 50, 100);
// right arm
line(240, 200, 350, 100);
}
