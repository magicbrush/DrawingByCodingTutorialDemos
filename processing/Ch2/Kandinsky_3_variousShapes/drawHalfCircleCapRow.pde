
void draw_HalfCircleCapRow_Yellow()
{
  float totalLen = width*0.6;
  float startX,startY;
  startX = width*0.4;
  startY = height*0.43;
  float rotDegs = -35.0f;
  
  draw_CircleCapRow(
    totalLen,
    startX,
    startY,
    1,0.6,
    rotDegs,
    1,
    color(60,100,100,70),
    bgColor);
    
  pushMatrix();
  translate(startX,startY);
  rotate(rotDegs*TWO_PI/360.0f);
  pushStyle();
  stroke(0);
  strokeWeight(1);
  line(0,0,totalLen,0);
  popStyle();
  popMatrix();
  
  showTitle(
    "draw_HalfCircleCapRow_Yellow",startX,startY);
}

void draw_HalfCircleCapRow_Red()
{
  float totalLen = width*0.4;
  float startX,startY;
  startX = width*0.47;
  startY = height*0.5;
  float rotDegs = 30.0f;
  
  draw_CircleCapRow(
    totalLen,
    startX,
    startY,
    1,0.6,
    rotDegs,
    1,
    color(0,60,70,80),
    bgColor);
    
  pushMatrix();
  translate(startX,startY);
  rotate(rotDegs*TWO_PI/360.0f);
  pushStyle();
  stroke(0);
  strokeWeight(1);
  line(0,0,totalLen,0);
  popStyle();
  popMatrix();
  
  showTitle(
    "draw_HalfCircleCapRow_Red",startX,startY);
}


void draw_CircleCapRowAloneXAxis(
  float totalLength,
  float diameterMin,
  float diameterMax,
  color glowColor,
  float strokeWt,
  color strokeColor,
  color fillColor)
{
  float dist = 0;
  while(dist<totalLength)
  {
    float diameter = 
      random(diameterMin,diameterMax);
    if(dist+diameter>totalLength)
    {
      diameter = 
        constrain(diameter,0,totalLength-dist);
    }
    float x = diameter*0.5 + dist;
    float y = 0;
    float wd = diameter;
    float ht = diameter;
    
    pushStyle();
    fill(fillColor);
    stroke(glowColor);
    strokeWeight(strokeWt*3);
    arc(x,y,wd-2*strokeWt,ht-2*strokeWt,PI,TWO_PI);
    popStyle();
    
    pushStyle();
    noFill();
    stroke(strokeColor);
    strokeWeight(strokeWt);
    arc(x,y,wd,ht,PI,TWO_PI);
    popStyle();
    
    dist += diameter;
    
  }
  
}


void draw_CircleCapRow(
  float totalLength,
  float x, float y,
  float scaleX, float scaleY,
  float rotDegs,
  float strokeWt,
  color glowColor,
  color fillColor)
{
  pushMatrix();
  translate(x,y);
  rotate(radians(rotDegs));
  scale(scaleX,scaleY);
  draw_CircleCapRowAloneXAxis(
    totalLength,
    0.1*totalLength,
    0.25*totalLength,
    glowColor,
    strokeWt,
    color(0,0,0,100),
    fillColor);
  popMatrix();
}