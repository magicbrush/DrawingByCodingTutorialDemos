void draw_HollowRect()
{
  float w = width;
  float h = height;
  
  float tx = 0.77*w;
  float ty = 0.45*h;
  
  pushStyle();
  noStroke();
  fill(230.0f,30.0f,60.0f,100.0f);
  pushMatrix();
  translate(tx,ty);
  scale(w*0.1,h*0.07);
  beginShape();
  vertex(-0.5,-0.5);
  vertex(0.5,-0.5);
  vertex(0.5,0.5);
  vertex(-0.5,0.5);
  {
    float scl = 0.2;
    // hollow interior part
    // must revert winding direction
    // of exterior part
    beginContour();
    vertex(-scl,scl);
    vertex(scl,scl);
    vertex(scl,-scl);
    vertex(-scl,-scl);
    endContour();
  }
  endShape(CLOSE);
  popMatrix();
  popStyle();
  
  showTitle("draw_HollowRect",tx,ty);
}