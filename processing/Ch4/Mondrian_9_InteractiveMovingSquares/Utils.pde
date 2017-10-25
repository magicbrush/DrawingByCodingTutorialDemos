
float getRectX(int id)
{
  float secs = millis()/1000.0;
  
  float x = -10000;
  if(id>=0 && id<rectangles.length)
  {
    float xbase = rectangles[id][1];
    
    float amplitudeX = rectangles[id][5];
    float frequenceX = rectangles[id][6];
    float phaseX = rectangles[id][7];
    float xShift = 
       amplitudeX*sin( frequenceX*secs + phaseX);
    
    x = xbase+xShift;
  }
  
  return x;
}

float getRectY(int id)
{
  float secs = millis()/1000.0;
  
  float y = -10000;
  if(id>=0 && id<rectangles.length)
  {
    float base = rectangles[id][2];
    
    float amplitude = rectangles[id][8];
    float frequence = rectangles[id][9];
    float phase = rectangles[id][10];
    float Shift = 
       amplitude*sin( frequence*secs + phase);
    
    y = base+Shift;
  }
  
  return y;
}

boolean insideRectangle(
  float x,float y, 
  float rx, float ry, float rw, float rh)
{
  boolean bXIn = (x>rx-rw/2) && (x<rx+rw/2);
  boolean bYIn = (y>ry-rh/2) && (y<ry+rh/2);
  boolean bIn = bXIn && bYIn;
  return bIn;
}

int get1StRectangleAt(float x,float y)
{
  int rId = -1;
  for(int rectId=rectangles.length-1;
    rectId>=0;rectId--)
  {
     float rx = getRectX(rectId);
     float ry = getRectY(rectId);
     float rw = rectangles[rectId][3];
     float rh = rectangles[rectId][4];
     boolean bInRect = 
       insideRectangle(x,y,rx,ry,rw,rh);
     
     if(bInRect)
     {
       println(
       "check:" + x + "," + y + "; " + "[" +
       rx +"," + ry + " " + rw + "," + rh + "]");
       rId = rectId;
       break;
     }
  }
  return rId;
}

void moveRectangleAt(
  int rectId,
  float x, float y, 
  float moveX,float moveY)
{
     float xbase = rectangles[rectId][1];
     float ybase = rectangles[rectId][2];
     float rx = getRectX(rectId);
     float ry = getRectY(rectId);
     float rw = rectangles[rectId][3];
     float rh = rectangles[rectId][4];
     boolean bInRect = 
       insideRectangle(x,y,rx,ry,rw,rh);
     if(bInRect)
     {
        xbase += moveX;
        ybase += moveY;
        rectangles[rectId][1] = xbase;
        rectangles[rectId][2] = ybase;
     }
}

void changeRectangleColor(int rectId)
{
  if(rectId>=0 && rectId<rectangles.length)
  {
     float colorId = rectangles[rectId][0];
     
     colorId ++;
     if(colorId>2)
     {
       colorId =0;
     }
     rectangles[rectId][0] = colorId;
     //println("haha");
  }
}