var fixedrect, movingrect;
var gameob1, gameob2;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400,200,50,70);
  fixedrect.shapeColor = "green";
  movingrect = createSprite(300,200,50,70);
  movingrect.shapeColor = "green";
  gameob1 = createSprite(200,200,50,50);
  gameob1.shapeColor = "green";
  gameob2 = createSprite(200,250,50,50);
  gameob2.shapeColor = "green";
  fixedrect.debug = true;
  movingrect.debug = true;
  gameob1.velocityY = 3;
  gameob2.velocityY = -3;
}

function draw() {
  background(255,255,255);

  movingrect.y = mouseY;
  movingrect.x = mouseX; 

  if (isTouchingg(movingrect,gameob1)){
    movingrect.shapeColor = "blue";
    gameob1.shapeColor = "blue";
  }
  else{
    movingrect.shapeColor = "green";
    gameob1.shapeColor = "green";
  }
  
  bounceOfff(gameob1,gameob2);
  drawSprites();
  
}

// function bounceOff() {
//   if(Math.abs(movingrect.x-fixedrect.x)<fixedrect.width/2+movingrect.width/2){
//     fixedrect.shapeColor = "red";
//     movingrect.shapeColor = "red";
//     fixedrect.velocityX = fixedrect.velocityX * (-1);
//     movingrect.velocityX = movingrect.velocityX * (-1);
//   }
//   else{
//     fixedrect.shapeColor = "green";
//     movingrect.shapeColor = "green";
//   }
// }
