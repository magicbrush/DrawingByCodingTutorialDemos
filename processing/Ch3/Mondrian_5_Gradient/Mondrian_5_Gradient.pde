
int horiRes = 16;
int vertRes = 16;
float edgeWidth = 2;

color [][] fillColors = new color[16][16];
color [][] edgeColors = new color[16][16];

void setup()
{
  size(500,400);
  
  for(int i=0;i<horiRes;i++)
  {
    for(int j=0;j<vertRes;j++)
    {
      float wd01 = (float)i/(float)horiRes;
      float ht01 = (float)j/(float)vertRes;
      float edgeBright = 255*(wd01+ht01)/2;
      fillColors[i][j] = color(
        255*wd01,
        255-255*ht01,
        0);
      edgeColors[i][j] = 
        color(
          edgeBright,
          edgeBright,
          edgeBright);
    }
  }
  
}

void draw()
{
  float wd = width/horiRes;
  float ht = height/vertRes;
  
  strokeWeight(edgeWidth);
  for(int i=0;i<horiRes;i++)
  {
    for(int j=0;j<vertRes;j++)
    {
      float x = wd*i;
      float y = ht*j;
      // fill color
      fill(fillColors[i][j]);
      // edge color
      stroke(edgeColors[i][j]);
      rect(x,y,wd,ht);
    }
  }
}

// call on mouse moving
void mouseMoved() {
  for(int i=0;i<horiRes;i++)
  {
    for(int j=0;j<vertRes;j++)
    {
      float wd01 = (float)i/(float)horiRes;
      float ht01 = (float)j/(float)vertRes;
      fillColors[i][j] = color(
        255*wd01,
        255-255*ht01,
        ((float)mouseY/(float)height)*255);
    }
  }
  
}