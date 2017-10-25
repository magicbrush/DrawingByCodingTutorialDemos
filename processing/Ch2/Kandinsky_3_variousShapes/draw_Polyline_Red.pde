
void draw_Polyline_Red()
{
  float w = width;
  float h = height;
  
  float tx = 0.28*w;
  float ty = 0.8*h;
  
  push();
  // style
  stroke(0.1);
  strokeWeight(0.04);
  noFill();
  // transform
  translate(tx,ty);
  rotate(-30*TWO_PI/360);
  scale(w*0.15,h*0.15);
 
  // draw
  beginShape();
  
  endShape();
 
  pop();
  
  showTitle("draw_Polyline_Red",tx,ty);
}