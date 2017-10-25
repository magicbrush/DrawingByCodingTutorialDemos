
function setup()
{
  createCanvas(400,400);
  
  background(0,0,20);
  
  // draw
  var cnt = 30;
  while(cnt>0)
  {
    var rvalue = random(0,1);
    var radius = 0;
    var alpha = random(20,100);
    if(rvalue<0.15)
    {
      radius = random(0.1*width,0.3*width);
    }
    else if(rvalue>=0.15 && rvalue<0.6)
    {
      radius = random(0.05*width,0.1*width);
    }
    else
    {
      radius = random(0.01*width,0.02*width);
    }
    
    var x = random(
      radius+0.1*width, 
      width-radius-0.1*width);
    var y = random(
      radius+0.1*width, 
      width-radius-0.1*width);
      
    var edgeColor = color(0);
    var edgeSize = 0;
    var rvalue2 = random(1);
    if(rvalue2<0.1)
    {
      edgeColor = color(0);
      edgeSize = random(5,10);
    }
    else if(rvalue2>=0.1 && rvalue2<0.35)
    {
      edgeColor = color(
        random(200,255),
        random(200,255),
        random(200,255));
      edgeSize = 
        random(radius*0.05,radius*0.15);
    }
    else
    {
      edgeColor = color(255);
      edgeSize = 0;
    }
      
    
    stroke(edgeColor);
    strokeWeight(edgeSize);
    fill(random(0,255),random(0,255),random(0,255),alpha);
    ellipse(x,y,2*radius,2*radius);
    cnt--;
  }
  
}
