
float getRectX(int id)
{
  float secs = millis()/1000.0;
  
  float x = -10000;
  if(id>=0 && id<rectangles.length)
  {
    float xbase = rectangles[id][1];
    
    float amplitudeX = rectangles[id][5];
    float frequenceX = rectangles[id][6];
    float phaseX = rectangles[id][7];
    float xShift = 
       amplitudeX*sin( frequenceX*secs + phaseX);
    
    x = xbase+xShift;
  }
  
  return x;
}

float getRectY(int id)
{
  float secs = millis()/1000.0;
  
  float y = -10000;
  if(id>=0 && id<rectangles.length)
  {
    float base = rectangles[id][2];
    
    float amplitude = rectangles[id][8];
    float frequence = rectangles[id][9];
    float phase = rectangles[id][10];
    float Shift = 
       amplitude*sin( frequence*secs + phase);
    
    y = base+Shift;
  }
  
  return y;
}

float repeat(float value, float bound)
{
  while(value>bound)
  {
    value-= bound;
  }
  while(value<0)
  {
    value += bound;
  }
  return value;
}