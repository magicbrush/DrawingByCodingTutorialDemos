// rectangle parameters
float [][] rectangles = 
  new float[20][5];
// lrectIdne segments parameters
float [][] lineSegments = 
  new float[20][4];

void setup()
{
  // init canvas
  size(500,400);
  
  // Init pallettes
  InitColorPallette();
  
  // init rectangle parameters
  for(int rectId=0;rectId<rectangles.length;rectId++)
  {
     float colorrectIdd = random(0,2.9999f);
     float x = random(0,width);
     float y = random(0,height);
     float wd = random(40,80);
     float ht = random(40,80);
     
     // save rectangle parameters
     rectangles[rectId][0]= colorrectIdd;
     rectangles[rectId][1]= x;
     rectangles[rectId][2]= y;
     rectangles[rectId][3]= wd;
     rectangles[rectId][4]= ht;
  }
  
  // init line segments parameters
  for(int rectId=0;rectId<lineSegments.length;rectId++)
  {
     float length = random(1)>0.75?
       random(40,80):random(20,40);
     if(random(1)>0.5)
     {
       length = -length;
     }
     
     float x0 = random(0,width);
     float y0 = random(0,width);
     float x1 = x0+length;
     float y1 = y0; 
     if(random(1)>0.5)
     {
       x1 = x0;
       y1 = y0+length;
     }
     
     lineSegments[rectId][0] = x0;
     lineSegments[rectId][1] = y0;
     lineSegments[rectId][2] = x1;
     lineSegments[rectId][3] = y1;
  } 
}

void draw()
{ 
  background(200);
  
  // draw rectangles
  noStroke();
  for(int rectId=0;rectId<rectangles.length;rectId++)
  {
     float colorId = rectangles[rectId][0];
     int colorIdInt = (int)colorId;
     float x = rectangles[rectId][1];
     float y = rectangles[rectId][2];
     float wd = rectangles[rectId][3];
     float ht = rectangles[rectId][4];
     
     color fillColor = ColorPallette[colorIdInt];
     fill(fillColor);
     rectMode(CENTER);
     rect(x,y,wd,ht);
  }
  
  stroke(0);
  strokeCap(RECT);
  strokeWeight(10);
  for(int rectId=0;rectId<lineSegments.length;rectId++)
  {
     float x0 = lineSegments[rectId][0]; 
     float y0 = lineSegments[rectId][1]; 
     float x1 = lineSegments[rectId][2]; 
     float y1 = lineSegments[rectId][3];
     line(x0,y0,x1,y1);
  }
}

// mouse rectIdnteraction
float pressTime = -1;
float pressX = -1;
float pressY = -1;

float distThres = 10.0f;
float doubleClickTimeMax = 200;

int pickedRectangleId = -1;
void mousePressed()
{
  float msecs = millis();
  float pressx = mouseX;
  float pressy = mouseY;
  
  float deltaTime = msecs-pressTime;
  float dist = 
    abs(pressx-pressX) + 
    abs(pressy-pressY);
  boolean bDoubleClicked = 
    (deltaTime<doubleClickTimeMax && 
    dist<distThres);
  if(bDoubleClicked)
  {
    // change color on pressed rectangle
    changeRectangleColor(
      pickedRectangleId);
    pickedRectangleId = -1;
  }
  else
  {
    pickedRectangleId = 
      get1StRectangleAt(pressx,pressy);
  }
  
  pressTime = msecs;
  pressX = pressx;
  pressY = pressy;
}

void mouseDragged()
{
  float mouseMoveX = mouseX-pmouseX;
  float mouseMoveY = mouseY-pmouseY;
  
  boolean bPickedRectangle = 
    pickedRectangleId>=0 && 
    pickedRectangleId<rectangles.length;
  
  if(bPickedRectangle)
   {
    if(keyPressed && 
       key==CODED && 
       keyCode == SHIFT)
    {
      // change Rectangle Size
        float rw = rectangles[pickedRectangleId][3];
        float rh = rectangles[pickedRectangleId][4];
        rw += (float)mouseMoveX/2.0f;
        rh += (float)mouseMoveY/2.0f;
        rectangles[pickedRectangleId][3] = rw;
        rectangles[pickedRectangleId][4] = rh;
    }
    else
    {
      // move rectangle
      moveRectangleAt(
        pickedRectangleId,
        pmouseX,pmouseY,
        mouseMoveX,mouseMoveY);
      println("dragged" + pickedRectangleId);
    }
  }
  
}

void mouseReleased()
{
  
}

void mouseWheel()
{
  
}



int get1StRectangleAt(float x,float y)
{
  int rectIdd = -1;
  for(int rectId=rectangles.length-1;
    rectId>=0;rectId--)
  {
     float rx = rectangles[rectId][1];
     float ry = rectangles[rectId][2];
     float rw = rectangles[rectId][3];
     float rh = rectangles[rectId][4];
     boolean bInRect = 
       insideRectangle(x,y,rx,ry,rw,rh);
     if(bInRect)
     {
       rectIdd = rectId;
       break;
     }
  }
  return rectIdd;
}

void moveRectangleAt(
  int rectId,
  float x, float y, 
  float moveX,float moveY)
{
   float rx = rectangles[rectId][1];
     float ry = rectangles[rectId][2];
     float rw = rectangles[rectId][3];
     float rh = rectangles[rectId][4];
     boolean bInRect = 
       insideRectangle(x,y,rx,ry,rw,rh);
     if(bInRect)
     {
        rx += moveX;
        ry += moveY;
        rectangles[rectId][1] = rx;
        rectangles[rectId][2] = ry;
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
     println("haha");
  }
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