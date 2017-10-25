
int horiRes = 16;
int vertRes = 16;
float edgeWidth = 2;

color [][] fillColors = new color[16][16];
color [][] edgeColors = new color[16][16];

void setup()
{
  // init canvas
  size(500,400);
  
  // init pallettes
  ColorPallette[0] = color(220,140,160);
  ColorPallette[1] = color(150,180,240);
  ColorPallette[2] = color(250,230,90);
  for(int i=0;i<GrayPallette.length;i++)
  {
    GrayPallette[i] =130 + 125.0f *
      (float)i/(float)GrayPallette.length;
  }
  
  // init grid color array
  for(int i=0;i<horiRes;i++)
  {
    for(int j=0;j<vertRes;j++)
    {
      if(random(1.0f)<0.5)
      {
        fillColors[i][j] = RandChooseColor();
      }
      else
      {
        fillColors[i][j] = RandChooseGrayColor();
      }
      edgeColors[i][j] = color(random(0,100));
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