var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect1 = createSprite(600, 400, 50, 80);
  fixedRect1.shapeColor = "green";
  fixedRect1.debug = true;

  fixedRect2 = createSprite(600, 600, 50, 80);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(fixedRect2,movingRect)==true){
  movingRect.shapeColor = "red";
  fixedRect2.shapeColor = "red";
  
}
 else{
  movingRect.shapeColor = "green";
  fixedRect2.shapeColor = "green";
 }
  drawSprites();
}
function isTouching(object1,object2){

  
  if (object2.x - object1.x < object1.width/2 +object2.width/2
    &&object1.x -object2.x <object1.width/2 +object2.width/2
    && object2.y - object1.y < object1.height/2 + object2.height/2
    && object1.y -object2.y < object1.height/2 + object2.height/2) {
  return true;
}
else {
  return false;

}
}