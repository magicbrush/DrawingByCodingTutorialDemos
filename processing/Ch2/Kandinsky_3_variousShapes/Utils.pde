
void push()
{
  pushStyle();
  pushMatrix();
}

void pop()
{
  popMatrix();
  popStyle();
}

void showTitle(String txt, float x, float y)
{
  if(bShowTitle)
  {
    pushStyle();
    textSize(titleTxtSize);
    fill(0,0,0,100);
    text(txt,x,y);
    popStyle();
  }
}

void draw_HalfCircleCap(
  float x, float y,
  float wd,float ht)
{
  arc(x,y,wd,ht,PI,TWO_PI);
}

void draw_OneCircleCap(
  float x,float y, 
  float sx,float sy,
  float rotDegs,
  color fillColor,
  color strokeColor,
  float strokeWt)
{
  pushMatrix();
  translate(x,y);
  rotate(rotDegs*TWO_PI/360);
  scale(sx,sy);
  pushStyle();
  fill(fillColor);
  stroke(strokeColor);
  strokeWeight(strokeWt);
  draw_HalfCircleCap(0,0,1,1);
  popStyle();
  popMatrix();
}