
void drawCurves_Parabola()
{
  float w = width;
  float h = height;
  float tx = 0.07*w;
  float ty = 0.8*h;
  
  pushMatrix();
  // transform
  translate(tx,ty);
  scale(w*0.08,w*0.08);
  rotate(-120*TWO_PI/360);
  
  // draw filled parabolic line
  pushStyle();
  fill(10,40,30);
  noStroke();
  beginShape();
  for(float x=-1;x<1;x+=0.025)
  {
    float y = x*x;
    vertex(x,y);
  }
  endShape();
  popStyle();
  
  // draw parabolic curve
  pushStyle();
  noFill();
  stroke(0);
  strokeWeight(0.08f);
  beginShape();
  for(float x=-1.5;x<1.5;x+=0.025)
  {
    float y = x*x;
    vertex(x,y);
  }
  endShape();
  popStyle();
  
  // draw horizontal line
  pushStyle();
  stroke(0);
  strokeWeight(0.05f);
  line(-2.8,2,2.8,2);
  popStyle();
  
  // draw vertical line
  pushStyle();
  stroke(0);
  strokeWeight(0.08f);
  line(-0.1,-0.8,0.6,10);
  popStyle();
 
  popMatrix();
  
  showTitle("drawCurves_Parabola",tx,ty);
}