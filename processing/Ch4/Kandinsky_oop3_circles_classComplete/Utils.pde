
float [] randPosInCircle(
  float x, float y, float radius)
{
  float [] pos = new float[2];
  
  boolean inCircle = false;
  do
  {
    float rx = random(x-radius,x+radius);
    float ry = random(y-radius,y+radius);
    
    float distToCenter = dist(rx,ry,x,y);
    inCircle = distToCenter<=radius;
    
    pos[0] = rx;
    pos[1] = ry;
  }
  while(!inCircle);
  
  return pos;
}