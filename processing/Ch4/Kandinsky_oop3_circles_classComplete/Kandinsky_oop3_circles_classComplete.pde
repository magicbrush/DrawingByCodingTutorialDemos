
lineSegment [] lineSegs = new lineSegment[30];
colorCircle [] circles = new colorCircle[20];
quadBand [] bands = new quadBand[2];

void setup()
{
  size(400,400);
  
  for(int i=0;i<lineSegs.length;i++)
  {
    float [] p0 = 
      randPosInCircle(200,200,170);
    float [] p1 = 
      randPosInCircle(200,200,170);
    lineSegs[i] = new lineSegment(
      p0[0],p0[1],
      p1[0],p1[1],
      random(0.5,2.5),
      color(0,random(100,200)) );
  }
  
  for(int i=0;i<circles.length;i++)
  {
    float [] rpos = randPosInCircle(200,200,130);
    circles[i] = new colorCircle(
      rpos[0],rpos[1],
      random(10,80),
      random(0.1,2.5),
      color(
        random(255),
        random(255),
        random(255),
        random(60,180)),
      color(
        0,
        random(100,200))) ;
  }
  
  
  float x0 = random(0,width/2);
  bands[0] = new quadBand(
    x0,0,
    random(x0,width),0,
    0,width,
    random(height/2,height),width,
    color(30,140,120,120));
  
  float x1 = random(width/2,width);
  float y1 = random(height/2,height);
  bands[1] = new quadBand(
    x1,0,
    random(x1,width),0,
    0,y1,
    0,random(0,y1),
    color(220,220,50,120));
  
}

void draw()
{
  background(220,225,170);
  
  for(int i=0;i<bands.length;i++)
  {
    bands[i].draw();
  }
  
  for(int i=0;i<lineSegs.length;i++)
  {
    lineSegs[i].draw();
  }
  
  noFill();
  stroke(0);
  strokeWeight(15);
  ellipse(width/2,height/2,360,360);
  
  
  for(int i=0;i<circles.length;i++)
  {
    circles[i].draw();
  }
  
}