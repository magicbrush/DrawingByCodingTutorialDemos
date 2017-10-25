

function setup()
{
  createCanvas(400,400);
  
  //background(240,200,115);
}

var shX = 0.0;
function draw()
{
  background(240,200,115);
  
  // rect red
  push();
  noStroke();
  fill(100,0,0);
  
  translate(width*0.48,height*0.5);
  //shearY(0.3);
  rotate(-65.0 * TWO_PI/360.0);
  scale(width,height*0.28);
  drawStdRect();
  pop();
  
  // rect black
  push();
  noStroke();
  fill(0);
  translate(width*0.55,height*0.28);
  shearX(shX);
  rotate(25.0 * TWO_PI/360.0);
  scale(width*0.7,height*0.35);
  drawStdRect();
  pop();
  
  // keyboard interaction: control shear
  if(keyIsPressed)
  {
    if(key === 'a')
    {
      shX += 0.005;
    }
    else if(key === 's')
    {
      shX -= 0.005;
    }
  }
  
}