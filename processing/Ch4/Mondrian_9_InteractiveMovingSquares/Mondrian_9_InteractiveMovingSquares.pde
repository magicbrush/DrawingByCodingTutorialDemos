// rectangle parameters
float [][] rectangles = 
  new float[20][11];
// line segments parameters
float [][] lineSegments = 
  new float[20][5];

void setup()
{
  // init canvas
  size(500,400);
  
  // init pallettes
  InitColorPallette();
  
  // init rectangle parameters
  for(int i=0;i<rectangles.length;i++)
  {
     float colorId = random(0,2.9999f);
     float x = random(0,width);
     float y = random(0,height);
     float wd = random(40,80);
     float ht = random(40,80);
     float amplitudeX = random(0,100);
     float frequenceX = random(0,0.5);
     float phaseX = random(0,TWO_PI);
     float amplitudeY = random(0,100);
     float frequenceY = random(0,0.5);
     float phaseY = random(0,TWO_PI);
     
     // save rectangle parameters
     rectangles[i][0]= colorId;
     rectangles[i][1]= x;
     rectangles[i][2]= y;
     rectangles[i][3]= wd;
     rectangles[i][4]= ht;
     rectangles[i][5] = amplitudeX;
     rectangles[i][6] = frequenceX;
     rectangles[i][7] = phaseX;
     rectangles[i][8] = amplitudeY;
     rectangles[i][9] = frequenceY;
     rectangles[i][10] = phaseY;
  }
  
  // init line segments parameters
  for(int i=0;i<lineSegments.length;i++)
  {
     float length = random(1)>0.75?
       random(40,80):random(20,40);
     if(random(1)>0.5)
     {
       length = -length;
     }
     
     float x0 = random(0,width);
     float y0 = random(0,height);
     float x1 = x0+length;
     float y1 = y0; 
     if(random(1)>0.5)
     {
       x1 = x0;
       y1 = y0+length;
     }
     float speed = random(-5,5);
     
     lineSegments[i][0] = x0;
     lineSegments[i][1] = y0;
     lineSegments[i][2] = x1;
     lineSegments[i][3] = y1;
     lineSegments[i][4] = speed;
  }
 
  
}

void draw()
{ 
  background(200);
  // draw rectangles
  noStroke();
  
  float secs = millis()/1000.0;
  for(int i=0;i<rectangles.length;i++)
  {
     float colorId = rectangles[i][0];
     int colorIdInt = (int)colorId;
     float rx = getRectX(i);
     float ry = getRectY(i);
     float wd = rectangles[i][3];
     float ht = rectangles[i][4];
     
     color fillColor = ColorPallette[colorIdInt];
     fill(fillColor);
     rectMode(CENTER);
     rect(rx,ry,wd,ht);
  }
  
  // draw line segments
  stroke(0);
  strokeCap(RECT);
  strokeWeight(10);
  for(int i=0;i<lineSegments.length;i++)
  {
     float x0 = lineSegments[i][0]; 
     float y0 = lineSegments[i][1]; 
     float x1 = lineSegments[i][2]; 
     float y1 = lineSegments[i][3];
     line(x0,y0,x1,y1);
  }
  
  // update lineSegments
  for(int i=0;i<lineSegments.length;i++)
  {
     float x0 = lineSegments[i][0]; 
     float y0 = lineSegments[i][1]; 
     float x1 = lineSegments[i][2]; 
     float y1 = lineSegments[i][3];
     
     boolean bHorizontal = abs(y0-y1)<0.0001;
     boolean bVertical = abs(x0-x1)<0.0001;
     
     if(bHorizontal)
     {
       x0 += lineSegments[i][4];
       x1 += lineSegments[i][4];
     }
     else if(bVertical)
     {
       y0 += lineSegments[i][4];
       y1 += lineSegments[i][4];
     }
     
     MoveOutType mtype = 
       CheckMoveOutCanvas(x0,y0,x1,y1);
     if(mtype == MoveOutType.RIGHT)
     {
       float length = abs(x0-x1);
       x0 -= width+length-1;
       x1 -= width+length-1;
     }
     else if(mtype == MoveOutType.LEFT)
     {
       float length = abs(x0-x1);
       x0 += width+length-1;
       x1 += width+length-1;
     }
     else if(mtype == MoveOutType.UP)
     {
       float length = abs(y0-y1);
       y0 += height+length-1;
       y1 += height+length-1;
     }
     else if(mtype ==MoveOutType.DOWN)
     {
       float length = abs(y0-y1);
       y0 -= height+length-1;
       y1 -= height+length-1;
     }
     
     
     lineSegments[i][0] = x0;
     lineSegments[i][1] = y0;
     lineSegments[i][2] = x1;
     lineSegments[i][3] = y1;
  }
}

float repeat(float value, float bound)
{
  while(value>bound)
  {
    value-= bound;
  }
  while(value<0)
  {
    value += bound;
  }
  return value;
}



// ****** mouse interaction **********//
float pressTime = -1;
float pressX = -1;
float pressY = -1;

float pressRectX = -1;
float pressRectY = -1;

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
    if(pickedRectangleId>=0)
    {
      /*
    println("rect " + pickedRectangleId + ": " +
      rectangles[pickedRectangleId][1] + "," +
      rectangles[pickedRectangleId][2]);
      */
      pressRectX = rectangles[pickedRectangleId][1];
      pressRectY = rectangles[pickedRectangleId][2];
    }
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
    if(keyPressed && keyCode == SHIFT)
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
      //println("dragged" + pickedRectangleId);
    }
  }
  
}

void mouseReleased()
{
  boolean bPickedRectangle = 
    pickedRectangleId>=0 && 
    pickedRectangleId<rectangles.length;
 if(bPickedRectangle)
   {
    if(keyPressed && 
       key==CODED && keyCode == CONTROL)
    {
       // change moving parameters
       float movedX = mouseX-pressX;
       float movedY = mouseY-pressY;
       
       float movedTime = millis()-pressTime;
       
       float ampx = movedX;
       float ampy = movedY;
       float frequence = 1000/movedTime;
       
       rectangles[pickedRectangleId][1] = pressRectX;
       rectangles[pickedRectangleId][2] = pressRectY;
       
       rectangles[pickedRectangleId][5] = ampx;
       //println("ampx:" + ampx);
       rectangles[pickedRectangleId][6] = frequence;
       rectangles[pickedRectangleId][8] = ampy;
       rectangles[pickedRectangleId][9] = frequence;
    } 
   }
}

void mouseWheel()
{
  
}