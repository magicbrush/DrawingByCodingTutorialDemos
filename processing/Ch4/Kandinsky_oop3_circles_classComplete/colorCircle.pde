class colorCircle
{
  // ****** properties ********* 
  float x,y,radius;
  float edgeWidth;
  color fillColor;
  color edgeColor;
  
  // ****** behaviors *********
  // initialize
  colorCircle(
    float xx, float yy, 
    float r,
    float edgeWd, 
    color fColor,
    color eColor)
  {
    x = xx;
    y = yy;
    radius = r;
    edgeWidth = edgeWd;
    fillColor = fColor;
    edgeColor = eColor;
  }
  // display
  void draw()
  {
    fill(fillColor);
    stroke(edgeColor);
    strokeWeight(edgeWidth);
    
    ellipse(
      x,
      y,
      radius,
      radius);
  }
  
}