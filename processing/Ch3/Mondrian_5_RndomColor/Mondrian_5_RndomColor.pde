
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
      fillColors[i][j] = color(
        random(255),
        random(255),
        random(255));
      float edgeBright = random(255);
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
      
      fill(fillColors[i][j]);
      stroke(edgeColors[i][j]);
      rect(x,y,wd,ht);
      
    }
  }
}