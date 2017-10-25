class lineSegment
{
  // ****** properties ********* 
  float x0,y0,x1,y1;
  float lineWidth;
  color lineColor;
  
  // ****** behaviors *********
  // initialize
  lineSegment(
    float xx0, float yy0,
    float xx1, float yy1,
    float lineWd, 
    color lineCr)
  {
      x0 = xx0;
      y0 = yy0;
      x1 = xx1;
      y1 = yy1;
      lineWidth = lineWd;
      lineColor = lineCr;
  }
  
  // display
  void draw()
  {
    stroke(lineColor);
    strokeWeight(lineWidth);
    line(x0,y0,x1,y1);
  }
  
  
}