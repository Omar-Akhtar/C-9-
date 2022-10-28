var ball; 
function setup() {
  createCanvas(400,400);
  ball = createSprite (200, 200, 50, 50)
  ball.shapeColor = "white"
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
    ball.position.x += 3 
  } 
  if(keyIsDown(LEFT_ARROW)){
    ball.position.x -= 3
  }
  
  drawSprites()
}




