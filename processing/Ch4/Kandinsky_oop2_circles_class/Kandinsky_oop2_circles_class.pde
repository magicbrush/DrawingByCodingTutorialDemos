/*
float [][] lines = new float[30][5];

float [][] circleParams = new float[20][4];
color [] fillColors = new color[20];
color [] edgeColors = new color[20];

float [][] bgBand0 = new float[4][2];
float [][] bgBand1 = new float[4][2];
*/

lineSegment [] lineSegs = new lineSegment[30];
colorCircle [] circles = new colorCircle[20];
quadBand [] bands = new quadBand[2];

void setup()
{
  size(400,400);
  
  for(int i=0;i<lineSegs.length;i++)
  {
    lineSegs[i] = new lineSegment();
    float [] p0 = 
      randPosInCircle(200,200,170);
    float [] p1 = 
      randPosInCircle(200,200,170);
    lineSegs[i].x0 = p0[0];
    lineSegs[i].y0 = p0[1];
    lineSegs[i].x1 = p1[0];
    lineSegs[i].y1 = p1[1];
    lineSegs[i].lineWidth = 
      random(0.5,2.5);
    lineSegs[i].lineColor = 
      color(0,random(100,200));
  }
  
  for(int i=0;i<circles.length;i++)
  {
    circles[i] = new colorCircle();
    float [] rpos = randPosInCircle(200,200,130);
    circles[i].x = rpos[0];
    circles[i].y = rpos[1];
    circles[i].radius = random(10,80);
    circles[i].edgeWidth = random(0.1,2.5);
    
    circles[i].fillColor = color(
      random(255),
      random(255),
      random(255),
      random(60,180));
    circles[i].edgeColor = color(
      0,
      random(100,200));
  }
  
  
  bands[0].vertices = new float[4][2];
  bands[0].vertices[0][0] = random(0,width/2);
  bands[0].vertices[0][1] = 0;
  bands[0].vertices[1][0] = 
    random(bands[0].vertices[0][0],width);
  bands[0].vertices[1][1] = 0;
  bands[0].vertices[2][0] = width;
  bands[0].vertices[2][1] = random(height/2,height);
  bands[0].vertices[3][0] = width;
  bands[0].vertices[3][1] = 
    random(bands[0].vertices[2][1],height);
  bands[0].bandColor = color(30,140,120,120);
  
  bands[1].vertices = new float[4][2];
  bands[1].vertices[0][0] = random(width/2,width);
  bands[1].vertices[0][1] = 0;
  bands[1].vertices[1][0] = 
    random(bands[1].vertices[1][0],width);
  bands[1].vertices[1][1] = 0;
  bands[1].vertices[2][0] = 0;
  bands[1].vertices[2][1] = random(height/2,height);
  bands[1].vertices[3][0] = 0;
  bands[1].vertices[3][1] = 
    random(0,bands[1].vertices[2][1]);
  bands[1].bandColor = color(220,220,50,120);
  
}

void draw()
{
  background(220,225,170);
  
  noStroke();
  fill(bands[0].bandColor);
  quad(
    bands[0].vertices[0][0],bands[0].vertices[0][1],
    bands[0].vertices[1][0],bands[0].vertices[1][1],
    bands[0].vertices[2][0],bands[0].vertices[2][1],
    bands[0].vertices[3][0],bands[0].vertices[3][1]);
  
  fill(bands[1].bandColor);
  quad(
    bands[1].vertices[0][0],bands[1].vertices[0][1],
    bands[1].vertices[1][0],bands[1].vertices[1][1],
    bands[1].vertices[2][0],bands[1].vertices[2][1],
    bands[1].vertices[3][0],bands[1].vertices[3][1]);
  
  
  stroke(0);
  for(int i=0;i<lineSegs.length;i++)
  {
    strokeWeight(lineSegs[i].lineWidth);
    line(
      lineSegs[i].x0,lineSegs[i].y0,
      lineSegs[i].x1,lineSegs[i].y1);
  }
  
  noFill();
  stroke(0);
  strokeWeight(15);
  ellipse(width/2,height/2,360,360);
  
  for(int i=0;i<circles.length;i++)
  {
    fill(circles[i].fillColor);
    stroke(circles[i].edgeColor);
    strokeWeight(circles[i].edgeWidth);
    
    ellipse(
      circles[i].x,
      circles[i].y,
      circles[i].radius,
      circles[i].radius);
  }
  
  
}



float [] randPosInCircle(
  float x, float y, float radius)
{
  float [] pos = new float[2];
  
  boolean inCircle = false;
  do
  {
    float rx = random(x-radius,x+radius);
    float ry = random(y-radius,y+radius);
    
    float distToCenter = dist(rx,ry,x,y);
    inCircle = distToCenter<=radius;
    
    pos[0] = rx;
    pos[1] = ry;
  }
  while(!inCircle);
  
  return pos;
}