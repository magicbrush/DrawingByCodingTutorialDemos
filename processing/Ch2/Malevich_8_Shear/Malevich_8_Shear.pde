
void setup()
{
  size(400,400);
  
  //background(240,200,115);
}

float shX = 0.0f;
void draw()
{
  background(240,200,115);
  
  // rect red
  pushStyle();
  noStroke();
  fill(100,0,0);
  pushMatrix();
  translate(width*0.48,height*0.5);
  //shearY(0.3);
  rotate(-65.0f * TWO_PI/360.0f);
  scale(width,height*0.28);
  drawStdRect();
  popMatrix();
  popStyle();
  
  // rect black
  pushStyle();
  noStroke();
  fill(0);
  pushMatrix();
  translate(width*0.55,height*0.28);
  shearX(shX);
  rotate(25.0f * TWO_PI/360.0f);
  scale(width*0.7,height*0.35);
  drawStdRect();
  popMatrix();
  popStyle();
  
  // keyboard interaction: control shear
  if(keyPressed)
  {
    if(key == 'a')
    {
      shX += 0.005;
    }
    else if(key=='s')
    {
      shX -= 0.005;
    }
  }
  
}