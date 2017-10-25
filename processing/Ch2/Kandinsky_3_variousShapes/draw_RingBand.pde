
void draw_RingBands()
{
  float w = width;
  float h = height;
  float x = 0.57*w;
  float y = 0.53*h;
  
  pushStyle();
  stroke(0);
  strokeWeight(0.01);
  fill(10,40,60);
  draw_OneRingBand(x,y,0.2*w,0.2*w,55.0f,-158.0f);
  popStyle();
  
  pushStyle();
  stroke(0);
  strokeWeight(0.01);
  fill(0,90,50);
  draw_OneRingBand(x,y,0.2*w,0.2*w,75.0f,-75.0f);
  popStyle();
  
  pushStyle();
  stroke(0);
  strokeWeight(0.014);
  fill(30,90,60);
  draw_OneRingBand(x,y,0.2*w,0.2*w,30.0f,-5.0f);
  popStyle();
  
  showTitle("draw_RingBands",x,y);
}

void draw_OneRingBand(
  float x, float y,
  float scaleX, float scaleY, 
  float angleScope,
  float rotDegs)
{
  pushMatrix();
  translate(x,y);
  scale(scaleX,scaleY);
  rotate(radians(rotDegs));
  draw_RingBand(
    0.33f,
    0.5f,
    -angleScope/2.0f,
    angleScope/2.0f,
    36);
  popMatrix();
}

void draw_RingBand(
  float radiusIn,
  float radiusOut, 
  float degsFrom,
  float degsTo,
  int resolution)
{
  float angle = degsTo-degsFrom;
  float angleStep = angle/(float)resolution;
  beginShape();
  for(
    float deg = degsFrom;
    deg<degsTo;
    deg+=angleStep)
  {
    float angleRadians = radians(deg);
    float x = radiusIn * cos(angleRadians);
    float y = radiusIn * sin(angleRadians);
    vertex(x,y);
  }
  
  for(float deg = degsTo;
    deg>degsFrom;
    deg-=angleStep)
  {
    float angleRadians = radians(deg);
    float x = radiusOut * cos(angleRadians);
    float y = radiusOut * sin(angleRadians);
    vertex(x,y);
  }
  endShape(CLOSE);
  
}