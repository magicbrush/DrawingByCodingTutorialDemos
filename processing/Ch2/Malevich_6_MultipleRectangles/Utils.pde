

void drawStdRect()
{
  rectMode(CENTER);
  rect(0,0,1,1);
}

void drawRect(
  float x, float y, 
  float wd, 
  float ht,
  float degs)
{
  pushMatrix();
  translate(x,y);
  rotate(TWO_PI * degs/360 );
  scale(wd,ht);
  drawStdRect();
  popMatrix();
}