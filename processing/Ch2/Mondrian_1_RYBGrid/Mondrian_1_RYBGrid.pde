
void setup()
{
  size(640,480);
}

void draw()
{
  background(255);
  
  float xmin = 0;
  float xmax = width;
  float ymin = 0;
  float ymax = height;
  
  // set line color
  strokeWeight(8);
  stroke(0,255,0);
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
  rect(240.5f,360,240,60);
    
}