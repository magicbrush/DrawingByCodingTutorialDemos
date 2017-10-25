
function draw_HalfCircleCapRow_Yellow()
{
  var totalLen = width*0.6;
  var startX,startY;
  startX = width*0.4;
  startY = height*0.43;
  var rotDegs = -35;
  
  draw_CircleCapRow(
    totalLen,
    startX,
    startY,
    1,0.6,
    rotDegs,
    1,
    color(60,100,100,70),
    bgColor);
    
  push();
  translate(startX,startY);
  rotate(rotDegs*TWO_PI/360);
  
  stroke(0);
  strokeWeight(1);
  line(0,0,totalLen,0);
  
  pop();
  
  showTitle(
    "draw_HalfCircleCapRow_Yellow",startX,startY);
}

function draw_HalfCircleCapRow_Red()
{
  var totalLen = width*0.4;
  var startX,startY;
  startX = width*0.47;
  startY = height*0.5;
  var rotDegs = 30;
  
  draw_CircleCapRow(
    totalLen,
    startX,
    startY,
    1,0.6,
    rotDegs,
    1,
    color(0,60,70,80),
    bgColor);
    
  push();
  translate(startX,startY);
  rotate(rotDegs*TWO_PI/360);
  
  stroke(0);
  strokeWeight(1);
  line(0,0,totalLen,0);
  
  pop();
  
  showTitle(
    "draw_HalfCircleCapRow_Red",startX,startY);
}


function draw_CircleCapRowAloneXAxis(
  totalLength,
  diameterMin,
  diameterMax,
  glowColor,
  strokeWt,
  strokeColor,
  fillColor)
{
  var dist = 0;
  while(dist<totalLength)
  {
    var diameter = 
      random(diameterMin,diameterMax);
    if(dist+diameter>totalLength)
    {
      diameter = 
        constrain(diameter,0,totalLength-dist);
    }
    var x = diameter*0.5 + dist;
    var y = 0;
    var wd = diameter;
    var ht = diameter;
    
    
    fill(fillColor);
    stroke(glowColor);
    strokeWeight(strokeWt*3);
    arc(x,y,wd-2*strokeWt,ht-2*strokeWt,PI,TWO_PI);
    
    
    
    noFill();
    stroke(strokeColor);
    strokeWeight(strokeWt);
    arc(x,y,wd,ht,PI,TWO_PI);
    
    
    dist += diameter;
    
  }
  
}


function draw_CircleCapRow(
  totalLength,
  x, y,
  scaleX, scaleY,
  rotDegs,
  strokeWt,
  glowColor,
  fillColor)
{
  push();
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
  pop();
}