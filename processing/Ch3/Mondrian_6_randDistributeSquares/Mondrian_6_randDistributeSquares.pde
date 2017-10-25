// rectangle parameters
float [][] rectangles = 
  new float[20][5];
// line segments parameters
float [][] lineSegments = 
  new float[20][4];

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
     
     // save rectangle parameters
     rectangles[i][0]= colorId;
     rectangles[i][1]= x;
     rectangles[i][2]= y;
     rectangles[i][3]= wd;
     rectangles[i][4]= ht;
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
     
     lineSegments[i][0] = x0;
     lineSegments[i][1] = y0;
     lineSegments[i][2] = x1;
     lineSegments[i][3] = y1;
  }
 
  
}

void draw()
{ 
  // draw rectangles
  noStroke();
  for(int i=0;i<rectangles.length;i++)
  {
     float colorId = rectangles[i][0];
     int colorIdInt = (int)colorId;
     float x = rectangles[i][1];
     float y = rectangles[i][2];
     float wd = rectangles[i][3];
     float ht = rectangles[i][4];
     
     color fillColor = ColorPallette[colorIdInt];
     fill(fillColor);
     rectMode(CENTER);
     rect(x,y,wd,ht);
  }
  
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
}