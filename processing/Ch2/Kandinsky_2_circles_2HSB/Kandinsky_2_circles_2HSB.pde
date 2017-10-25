
void setup()
{
  size(400,400);
  
  
  
  // **** using Hue Sat Brightness *****//
  colorMode(HSB,360,100,100,100);
  
  background(
    random(250,300),
    random(30,50),
    random(10,15));
  
  // draw
  int cnt = 30;
  while(cnt>0)
  {
    // radius
    float rvalue = random(0,1);
    float radius = 0;
    if(rvalue<0.1)
    {
      radius = random(0.2*width,0.5*width);
    }
    else if(rvalue>=0.1 && rvalue<0.5)
    {
      radius = random(0.07*width,0.13*width);
    }
    else
    {
      radius = random(0.015*width,0.03*width);
    }
    
    // position x,y
    float x = random(
      radius+0.03*width, 
      width-radius-0.03*width);
    float y = random(
      radius+0.1*width, 
      width-radius-0.1*width);
      
    // edge size & color
    color edgeColor = color(0);
    float edgeSize = 0;
    float rvalue2 = random(1);
    if(rvalue2<0.1f)
    {
      edgeColor = color(0,0,0,100);// h,s,b,alpha
      edgeSize = random(5,10);
    }
    else if(rvalue2>=0.1f && rvalue2<0.35f)
    {
      edgeColor = color(
        random(0,360), // hue
        random(0,30), // saturation
        random(80,100), // brightness
        random(50,70));  // alpha: transparence
      edgeSize = 
        random(radius*0.03f,radius*0.10f);
    }
    else
    {
      edgeColor = color(0,0,0,0);
      edgeSize = 0;
    }
      
      
    // fill color
    color fillColor = color(0);
    float rvalue3 = random(1.0f);
    if(rvalue3<0.25f)
    {
      fillColor = color(
        random(0,360), // hue
        random(80,100), // sat
        random(0,20), // bright
        random(60,80)); // alpha
    }
    else
    {
      fillColor = color(
        random(0,360), // hue
        random(50,100), // sat
        random(60,90), // bright
        random(30,80)); // alpha
    }
    
    pushStyle();
    strokeWeight(edgeSize);
    stroke(edgeColor);
    fill(fillColor);
    ellipse(x,y,radius,radius);
    popStyle();
    
    
    cnt--;
  }
  
}