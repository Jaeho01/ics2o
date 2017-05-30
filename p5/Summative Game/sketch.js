/*Summative Game
  Jaeho Jang
  2017-05-30 */

var posX = 500;
var posY = 500;
var ballWidth = 50;
var speedX = 5;
var speedY = 5;


function setup() {
  createCanvas(1000, 1000);
  
}

function draw() {
  ellipse(posX, posY, ballWidth, ballWidth);
  posX = posX + speedX;
  posY = posY + speedY;
  if (posX > 1000) {
      speedX = -speedX
      }
  if (posX < 0) {
      speedX = -speedX
    }
  if (posY > 1000) {
      speedY = -speedY
    }
  if (posY < 0) {
      speedY = -speedY
    }
  
  
  
}
