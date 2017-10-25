// rectangle parameters
var rectangles = 
  new Array(20); // 20*11
// line segments parameters
var lineSegments = 
  new Array(20);

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
     var amplitudeX = random(0,100);
     var frequenceX = random(0,0.5);
     var phaseX = random(0,TWO_PI);
     var amplitudeY = random(0,100);
     var frequenceY = random(0,0.5);
     var phaseY = random(0,TWO_PI);
     
     // save rectangle parameters
     rectangles[i] = new Array(11);
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
     var speed = random(-5,5);
     
     lineSegments[i] = new Array(5);
     lineSegments[i][0] = x0;
     lineSegments[i][1] = y0;
     lineSegments[i][2] = x1;
     lineSegments[i][3] = y1;
     lineSegments[i][4] = speed;
  }
 
  
}

function draw()
{ 
  background(200);
  // draw rectangles
  noStroke();
  
  var secs = millis()/1000.0;
  for(var i=0;i<rectangles.length;i++)
  {
     var colorId = rectangles[i][0];
     var x = getRectX(i);
     var y = getRectY(i);
     var wd = rectangles[i][3];
     var ht = rectangles[i][4];
     
     color fillColor = ColorPallette[colorId];
     fill(fillColor);
     rectMode(CENTER);
     rect(x,y,wd,ht);
  }
  
  // draw line segments
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
  
  // update lineSegments
  for(var i=0;i<lineSegments.length;i++)
  {
     var x0 = lineSegments[i][0]; 
     var y0 = lineSegments[i][1]; 
     var x1 = lineSegments[i][2]; 
     var y1 = lineSegments[i][3];
     
     var bHorizontal = abs(y0-y1)<0.0001;
     var bVertical = abs(x0-x1)<0.0001;
     
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
     
     var mtype = 
       CheckMoveOutCanvas(x0,y0,x1,y1);
     if(mtype == RIGHT)
     {
       var length = abs(x0-x1);
       x0 -= width+length-1;
       x1 -= width+length-1;
     }
     else if(mtype == LEFT)
     {
       var length = abs(x0-x1);
       x0 += width+length-1;
       x1 += width+length-1;
     }
     else if(mtype == UP)
     {
       var length = abs(y0-y1);
       y0 += height+length-1;
       y1 += height+length-1;
     }
     else if(mtype == DOWN)
     {
       var length = abs(y0-y1);
       y0 -= height+length-1;
       y1 -= height+length-1;
     }
     
     lineSegments[i][0] = x0;
     lineSegments[i][1] = y0;
     lineSegments[i][2] = x1;
     lineSegments[i][3] = y1;
  }
}