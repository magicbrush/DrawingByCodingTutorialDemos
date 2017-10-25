function setup()
{
  createCanvas(640,480);
}

function draw()
{
  background(255);
  
  var xmin = 0;
  var xmax = width;
  var ymin = 0;
  var ymax = height;
  
  // set line color
  strokeWeight(8);

  // draw grid
  // draw vertical lines
  line(80,ymin,80,ymax);
  line(240,ymin,240,ymax);
  line(480,ymin,480,ymax);
  line(560,ymin,560,ymax);

  // draw horizontal lines
  line(xmin,120,xmax,120);
  line(xmin,160,xmax,160);
  line(xmin,360,xmax,360);
  line(xmin,420,xmax,420);



  
  // draw 3 filled rectangles
  fill(255,0,0);
  rect(480,120,80,40);
  fill(255,255,0);
  rect(80,160,160,200);
  fill(0,0,255);
  rect(240,360,240,60);
    
}