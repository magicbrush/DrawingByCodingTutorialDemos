
void draw3HalfCircleCaps()
{
  float w = width;
  float h = height;
  float tx = width*0.84;
  float ty = height*0.54;
  
  draw_OneCircleCap(
    tx,ty,
    w*0.12,h*0.11,
    -30,
    bgColor,
    color(40,80,70),
    0.04f);

  draw_OneCircleCap(
    tx,ty,
    w*0.1,h*0.08,
    -30,
    bgColor,
    color(0,80,50),
    0.06f);
  
  draw_OneCircleCap(
    tx,ty,
    w*0.07,h*0.05,
    -30,
    bgColor,
    color(200,80,30),
    0.1f);
    
  showTitle("draw3HalfCircleCaps",tx,ty);
}