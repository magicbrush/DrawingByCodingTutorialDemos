
function getRectX(id)
{
  var secs = millis()/1000.0;
  
  var x = -10000;
  if(id>=0 && id<rectangles.length)
  {
    var xbase = rectangles[id][1];
    
    var amplitudeX = rectangles[id][5];
    var frequenceX = rectangles[id][6];
    var phaseX = rectangles[id][7];
    var xShift = 
       amplitudeX*sin( frequenceX*secs + phaseX);
    
    x = xbase+xShift;
  }
  
  return x;
}

function getRectY(id)
{
  var secs = millis()/1000.0;
  
  var y = -10000;
  if(id>=0 && id<rectangles.length)
  {
    var base = rectangles[id][2];
    
    var amplitude = rectangles[id][8];
    var frequence = rectangles[id][9];
    var phase = rectangles[id][10];
    var Shift = 
       amplitude * sin( frequence*secs + phase);
    
    y = base+Shift;
  }
  
  return y;
}

function repeat(value, bound)
{
  while(value>bound)
  {
    value -= bound;
  }
  while(value<0)
  {
    value += bound;
  }
  return value;
}