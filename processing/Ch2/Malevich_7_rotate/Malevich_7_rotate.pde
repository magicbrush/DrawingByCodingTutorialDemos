
void setup()
{
  size(400,400,P3D);
  
  //background(240,200,115);
}

float rx,ry,rz;
void draw()
{
  background(240,200,115);
  
  // rect red 
  pushStyle();
  noStroke();
  fill(100,0,0);
  strokeWeight(0.1f);
  stroke(0);
  pushMatrix();
  translate(width*0.48,height*0.5);
  rotateX (-rz*0.787);
  rotateY (-ry*0.893);
  rotateZ (rx*1.121);
  scale(width,height*0.25);
  drawStdRect();
  popMatrix();
  popStyle();
  
  // rect black
  pushStyle();
  noStroke();
  fill(0);
  pushMatrix();
  translate(width*0.55,height*0.28);
  rotateX (rx);
  rotateY (ry);
  rotateZ (rz);
  scale(width*0.7,height*0.35);
  drawStdRect();
  popMatrix();
  popStyle();
  
  
  rx += 0.01;
  ry += 0.00923;
  rz += 0.00891;
  
}