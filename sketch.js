var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  rect1 = createSprite(300, 200, 50, 60);
  rect1.shapeColor = "yellow";

  rect2 = createSprite(500, 200, 50, 60);
  rect2.shapeColor = "yellow";

  rect2.velocityX = -1;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  //
  if(isTouching(fixedRect,movingRect)){
    fixedRect.width=10;
    fixedRect.height=30;

    movingRect.width=10;
    movingRect.height=30;

  }

  else {
    fixedRect.width=50;
    fixedRect.height=80;

    movingRect.width=80;
    movingRect.height=30;

  }

  bounceOff(rect1,rect2);
 

  drawSprites();
}

function isTouching(obj1,obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
    return true ;
 }
  else {
    return false;  
  }
}

function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
  }
}

