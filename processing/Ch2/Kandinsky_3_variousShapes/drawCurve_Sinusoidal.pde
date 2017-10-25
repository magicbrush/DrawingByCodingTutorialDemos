
void drawCurve_Sinusoidal()
{
  float w = width;
  float h = height;
  
  float tx = 0.07*w;
  float ty = 0.8*h;
  
  pushMatrix();
  // transform
  translate(tx, ty);
  scale(w*0.01,w*0.01);
  rotate(-120*TWO_PI/360);
  
  // draw filled parabolic line
  pushStyle();
  noFill();
  stroke(0);
  strokeWeight(0.4f);
  beginShape();
  for(float x=-4*PI;x<4*PI;x+=0.1)
  {
    float y = -0.5*cos(x)+4.5;
    vertex(x,y);
  }
  endShape();
  popStyle();
 
  popMatrix();
  
  showTitle("drawCurve_Sinusoidal",tx,ty);
}