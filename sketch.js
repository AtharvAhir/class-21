var fixedRect, movingRect;
var a,b;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
a  =createSprite (300,300,60,65);
b  = createSprite (500,450,70,70);
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
 a.x= World.mouseX;
 a.y = World.mouseY;
 if (isTouching(a,b)){
   a.shapeColor = "red";
   b.shapeColor = "red";
 }

 
  bounceOff(movingRect,fixedRect);
  drawSprites();
}




