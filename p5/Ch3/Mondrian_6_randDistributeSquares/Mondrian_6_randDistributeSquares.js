// rectangle parameters
var rectangles = 
  new Array(20); // 20*5
// line segments parameters
var lineSegments = 
  new Array(20); // 20*4

function setup()
{
  // init canvas
  createCanvas(500,400);
  
  // init pallettes
  InitColorPallette();
  
  // init rectangle parameters
  for(var i=0;i<rectangles.length;i++)
  {
     var colorId = random(0,2.9999);
     var x = random(0,width);
     var y = random(0,height);
     var wd = random(40,80);
     var ht = random(40,80);
     
     // save rectangle parameters
     rectangles[i] = new Array(5);
     rectangles[i][0]= colorId;
     rectangles[i][1]= x;
     rectangles[i][2]= y;
     rectangles[i][3]= wd;
     rectangles[i][4]= ht;
  }
  
  // init line segments parameters
  for(var i=0;i<lineSegments.length;i++)
  {
     var length = random(1)>0.75?
       random(40,80):random(20,40);
     if(random(1)>0.5)
     {
       length = -length;
     }
     
     var x0 = random(0,width);
     var y0 = random(0,height);
     var x1 = x0+length;
     var y1 = y0; 
     if(random(1)>0.5)
     {
       x1 = x0;
       y1 = y0+length;
     }
     
     lineSegments[i] = new Array(4);
     lineSegments[i][0] = x0;
     lineSegments[i][1] = y0;
     lineSegments[i][2] = x1;
     lineSegments[i][3] = y1;
  }
 
  
}

function draw()
{ 
  // draw rectangles
  noStroke();
  for(var i=0;i<rectangles.length;i++)
  {
     var colorId = floor(rectangles[i][0]);
     var x = rectangles[i][1];
     var y = rectangles[i][2];
     var wd = rectangles[i][3];
     var ht = rectangles[i][4];
     
     var fillColor = ColorPallette[colorId];

     fill(fillColor);
     rectMode(CENTER);
     rect(x,y,wd,ht);
  }
  
  stroke(0);
  strokeCap(SQUARE);
  strokeWeight(10);
  for(var i=0;i<lineSegments.length;i++)
  {
     var x0 = lineSegments[i][0]; 
     var y0 = lineSegments[i][1]; 
     var x1 = lineSegments[i][2]; 
     var y1 = lineSegments[i][3];
     line(x0,y0,x1,y1);
  }

  
  
}