
// color pallette
color [] ColorPallette = new color[3];
float [] GrayPallette = new float[8];

// random choose color from pallette
color RandChooseColor()
{
  int randId = (int)floor(
  random(ColorPallette.length-0.00001f));
  color cr = ColorPallette[randId];
  
  return cr;
}
color RandChooseGrayColor()
{
  int randId = 
    (int)floor(
    random(GrayPallette.length-0.0001));
  float grayValue = GrayPallette[randId];
  color crGray = color(grayValue);
  return crGray;
}