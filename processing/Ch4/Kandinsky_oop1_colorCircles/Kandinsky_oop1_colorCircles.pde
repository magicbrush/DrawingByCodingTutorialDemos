float [][] lines = new float[30][5];

float [][] circleParams = new float[20][4];
color [] fillColors = new color[20];
color [] edgeColors = new color[20];

float [][] bgBand0 = new float[4][2];
float [][] bgBand1 = new float[4][2];

void setup()
{
  size(400,400);
  
   for(int i=0;i<lines.length;i++)
  {
    float [] p0 = randPosInCircle(200,200,170);
    float [] p1 = randPosInCircle(200,200,170);
    lines[i][0] = p0[0];
    lines[i][1] = p0[1];
    lines[i][2] = p1[0];
    lines[i][3] = p1[1];
    lines[i][4] = random(0.5,2.5);
  }
  
  for(int i=0;i<circleParams.length;i++)
  {
    float [] rpos = randPosInCircle(200,200,130);
    circleParams[i][0] = rpos[0];
    circleParams[i][1] = rpos[1];
    circleParams[i][2] = random(10,80);
    circleParams[i][3] = random(0.1,1.5);
    
    colorMode(HSB,1.0);
    fillColors[i] = color(
      random(0/360.0f,140.0f/360.0f),
      random(0.7f,1.0f),
      random(0.0f,1.0f),
      random(0.1f,0.9f));
    colorMode(RGB);
    edgeColors[i] = color(
      0,
      random(100,200));
  }
  
  bgBand0[0][0] = random(0,width/2);
  bgBand0[0][1] = 0;
  bgBand0[1][0] = random(bgBand0[0][0],width);
  bgBand0[1][1] = 0;
  bgBand0[2][0] = width;
  bgBand0[2][1] = random(height/2,height);
  bgBand0[3][0] = width;
  bgBand0[3][1] = random(bgBand0[2][1],height);
  
  bgBand1[0][0] = random(width/2,width);
  bgBand1[0][1] = 0;
  bgBand1[1][0] = random(bgBand0[1][0],width);
  bgBand1[1][1] = 0;
  bgBand1[2][0] = 0;
  bgBand1[2][1] = random(height/2,height);
  bgBand1[3][0] = 0;
  bgBand1[3][1] = random(0,bgBand1[2][1]);
}

void draw()
{
  colorMode(RGB,255);
  background(222,228,195);
  
  // draw band
  noStroke();
  colorMode(HSB,1.0);
  fill(0.45f,0.9f,0.7f,0.66f);
  quad(
    bgBand0[0][0],bgBand0[0][1],
    bgBand0[1][0],bgBand0[1][1],
    bgBand0[2][0],bgBand0[2][1],
    bgBand0[3][0],bgBand0[3][1]);
    
  fill(0.15f,0.9f,0.9f,0.6f);
  quad(
    bgBand1[0][0],bgBand1[0][1],
    bgBand1[1][0],bgBand1[1][1],
    bgBand1[2][0],bgBand1[2][1],
    bgBand1[3][0],bgBand1[3][1]);
  
  
  // draw lines
  stroke(0);
  for(int i=0;i<lines.length;i++)
  {
    strokeWeight(lines[i][4]);
    line(
      lines[i][0],lines[i][1],
      lines[i][2],lines[i][3]);
  }
  
  // draw big black circle ring
  noFill();
  stroke(0);
  strokeWeight(15);
  ellipse(width/2,height/2,360,360);
  
  // draw color circles
  for(int i=0;i<circleParams.length;i++)
  {
    fill(fillColors[i]);
    stroke(edgeColors[i]);
    strokeWeight(circleParams[i][3]);
    
    ellipse(
      circleParams[i][0],
      circleParams[i][1],
      circleParams[i][2],
      circleParams[i][2]);
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