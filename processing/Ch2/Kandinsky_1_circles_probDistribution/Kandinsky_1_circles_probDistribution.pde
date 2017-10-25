
void setup()
{
  size(400,400);
  
  background(0,0,20);
  
  // draw
  int cnt = 30;
  while(cnt>0)
  {
    float rvalue = random(0,1);
    float radius = 0;
    float alpha = random(20.0f,100.0f);
    if(rvalue<0.15)
    {
      radius = random(0.2*width,0.5*width);
    }
    else if(rvalue>=0.15 && rvalue<0.6)
    {
      radius = random(0.07*width,0.13*width);
    }
    else
    {
      radius = random(0.015*width,0.03*width);
    }
    
    float x = random(
      radius+0.1*width, 
      width-radius-0.1*width);
    float y = random(
      radius+0.1*width, 
      width-radius-0.1*width);
      
    color edgeColor = color(0);
    float edgeSize = 0;
    float rvalue2 = random(1);
    if(rvalue2<0.1f)
    {
      edgeColor = color(0);
      edgeSize = random(5,10);
    }
    else if(rvalue2>=0.1f && rvalue2<0.35f)
    {
      edgeColor = color(
        random(200,255),
        random(200,255),
        random(200,255));
      edgeSize = 
        random(radius*0.05f,radius*0.15f);
    }
    else
    {
      edgeColor = color(255);
      edgeSize = 0;
    }
      
    
    stroke(edgeColor);
    strokeWeight(edgeSize);
    fill(random(0,255),random(0,255),random(0,255),alpha);
    ellipse(x,y,2*radius,2*radius);
    cnt--;
  }
  
}

/*
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
*/