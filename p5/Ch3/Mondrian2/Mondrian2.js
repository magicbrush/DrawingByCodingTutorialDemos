var EdgeSize = 480;

// 1D array
var HorizontalTicks = new Array(3);
var VerticalTicks = new Array(3);

function setup()
{
  createCanvas(480,480);

  // init array data
  
  HorizontalTicks[0] = EdgeSize*0.1;
  HorizontalTicks[1] = EdgeSize*0.3;
  HorizontalTicks[2] = EdgeSize*0.8;
  VerticalTicks[0] = EdgeSize * 0.25;
  VerticalTicks[1] = EdgeSize * 0.6;
  VerticalTicks[2] = EdgeSize * 0.8;
  
}

function draw()
{
  background(255);
  
  var xMin = 0;
  var xMax = EdgeSize;
  var yMin = 0;
  var yMax = EdgeSize;

  push();
  noFill();
  strokeWeight(4);
  rect(0,0,width,height);
  pop();


  strokeWeight(8);
  var i=0;
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
  
  
  fill(0,0,255);
  rect(
    HorizontalTicks[0],VerticalTicks[0],
    HorizontalTicks[1]-HorizontalTicks[0],
    VerticalTicks[1]-VerticalTicks[0]);
  
  
  fill(255,255,0);
  rect(
    HorizontalTicks[2],VerticalTicks[0],
    xMax - HorizontalTicks[2],
    VerticalTicks[2] - VerticalTicks[0]);
  
  
  fill(255,0,0);
  rect(
    HorizontalTicks[1],VerticalTicks[1],
    HorizontalTicks[2] - HorizontalTicks[1],
    yMax - VerticalTicks[1]);
    
  fill(0,0,0);
  rect(
    xMin,VerticalTicks[2],
    HorizontalTicks[1] - xMin,
    yMax - VerticalTicks[2]);
    
    
}