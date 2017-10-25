int EdgeSize = 480;

// 1D arrays
// ticks
float [] HorizontalTicks = new float[5];
float [] VerticalTicks = new float[5];

// rect pos index
int [] RectXMinId = new int[4];
int [] RectXMaxId = new int[4];
int [] RectYMinId = new int[4];
int [] RectYMaxId = new int[4];

// rect color
int [] colors = new color[4];

void setup()
{
  size(480,480);

  // init array data
  HorizontalTicks[0] = 0;
  HorizontalTicks[1] = EdgeSize*0.1;
  HorizontalTicks[2] = EdgeSize*0.3;
  HorizontalTicks[3] = EdgeSize*0.8;
  HorizontalTicks[4] = EdgeSize;
  VerticalTicks[0] = 0;
  VerticalTicks[1] = EdgeSize * 0.25;
  VerticalTicks[2] = EdgeSize * 0.45;
  VerticalTicks[3] = EdgeSize * 0.8;
  VerticalTicks[4] = EdgeSize;
  
  // init rectangles
  RectXMinId[0] = 0;
  RectXMaxId[0] = 2;
  RectYMinId[0] = 0;
  RectYMaxId[0] = 3;
  colors[0] = color(255,0,0);
  
  RectXMinId[1] = 1;
  RectXMaxId[1] = 4;
  RectYMinId[1] = 1;
  RectYMaxId[1] = 3;
  colors[1] = color(255,255,0);
  
  RectXMinId[2] = 1;
  RectXMaxId[2] = 2;
  RectYMinId[2] = 2;
  RectYMaxId[2] = 4;
  colors[2] = color(0,0,255);
  
  RectXMinId[3] = 2;
  RectXMaxId[3] = 3;
  RectYMinId[3] = 2;
  RectYMaxId[3] = 3;
  colors[3] = color(0,0,0);
  
}

void draw()
{
  background(255);
  
  float xMin = 0;
  float xMax = EdgeSize;
  float yMin = 0;
  float yMax = EdgeSize;
  
  strokeWeight(8);
  int i=0;
  while(i<HorizontalTicks.length)
  {
    line(
      HorizontalTicks[i], yMin,
      HorizontalTicks[i], yMax);
    i++;
  }
  i=0;
  while(i<HorizontalTicks.length)
  {
    line(
      xMin, VerticalTicks[i],
      xMax, VerticalTicks[i]);
    i++;
  }
  
  
 int rectId = 0;
 while(rectId<4)
 {
   // get rect parameters
   // get tick ids 
   int tickIdXMin = RectXMinId[rectId];
   int tickIdXMax = RectXMaxId[rectId];
   int tickIdYMin = RectYMinId[rectId];
   int tickIdYMax = RectYMaxId[rectId];
   // get parameters
   float rxmin = HorizontalTicks[tickIdXMin];
   float rxmax = HorizontalTicks[tickIdXMax];
   float rwidth = rxmax-rxmin;
   float rymin = VerticalTicks[tickIdYMin];
   float rymax = VerticalTicks[tickIdYMax];
   float rheight = rymax-rymin;
    
   // set fill color
   fill(colors[rectId]);
  
   // draw rectangle
   rect(rxmin,rymin,rwidth,rheight);

   // increase rectangle id
   rectId++;
 }
    
}