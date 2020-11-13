
var fixedRect,movingRect;


function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(400,400,50,80);
  movingRect = createSprite(200,400,80,30);

  fixedRect.shapeColor ="blue";
  movingRect.shapeColor = "yellow";

  fixedRect.debug = true;
  movingRect.debug = true;

  
}
function draw() {
  background("black"); 

  movingRect.x = mouseX;
  movingRect.y = mouseY;


  //console.log(movingRect.x - fixedRect.x)

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    fixedRect.shapeColor ="red";
     movingRect.shapeColor = "red";

  } 
  else{

    fixedRect.shapeColor ="blue";
     movingRect.shapeColor = "yellow";
  }
  
  drawSprites();
}

