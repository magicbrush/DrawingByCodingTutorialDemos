class quadBand
{
  // ****** properties ********* 
  float [][] vertices;
  color bandColor;
  
  // ****** behaviors *********
  quadBand(
    float x0, float y0,
    float x1, float y1,
    float x2, float y2,
    float x3, float y3,
    color cr)
  {
    vertices = new float[4][2];
    vertices[0][0] = x0;
    vertices[0][1] = y0;
    vertices[1][0] = x1;
    vertices[1][1] = y1;
    vertices[2][0] = x2;
    vertices[2][1] = y2;
    vertices[3][0] = x3;
    vertices[3][1] = y3;
    
    bandColor = cr;
  }
  
  void draw()
  {
    noStroke();
    fill(bandColor);
    quad(
      vertices[0][0],vertices[0][1],
      vertices[1][0],vertices[1][1],
      vertices[2][0],vertices[2][1],
      vertices[3][0],vertices[3][1]);
  }
  
}