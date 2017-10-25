
function draw_RingBands()
{
  var w = width;
  var h = height;
  var x = 0.57*w;
  var y = 0.53*h;
  
  stroke(0);
  strokeWeight(0.01);
  fill(10,40,60);
  draw_OneRingBand(x,y,0.2*w,0.2*w,55.0,-158.0);
  
  stroke(0);
  strokeWeight(0.01);
  fill(0,90,50);
  draw_OneRingBand(x,y,0.2*w,0.2*w,75.0,-75.0);
  
  stroke(0);
  strokeWeight(0.014);
  fill(30,90,60);
  draw_OneRingBand(x,y,0.2*w,0.2*w,30.0,-5.0);
  
  showTitle("draw_RingBands",x,y);
}

function draw_OneRingBand(
   x,  y,
   scaleX,  scaleY, 
   angleScope,
   rotDegs)
{
  push();
    translate(x,y);
    scale(scaleX,scaleY);
    rotate(radians(rotDegs));
    draw_RingBand(
      0.33,
      0.5,
      -angleScope/2.0,
      angleScope/2.0,
      36);
  pop();
}

function draw_RingBand(
   radiusIn,
   radiusOut, 
   degsFrom,
   degsTo,
   resolution)
{
  var angle = degsTo - degsFrom;
  var angleStep = angle/resolution;
  beginShape();
    var deg = 0;
    for(
      deg = degsFrom;
      deg<degsTo;
      deg+=angleStep)
    {
      var angleRadians = radians(deg);
      var x = radiusIn * cos(angleRadians);
      var y = radiusIn * sin(angleRadians);
      vertex(x,y);
    }
    
    for(
      deg = degsTo;
      deg>degsFrom;
      deg-=angleStep)
    {
      var angleRadians = radians(deg);
      var x = radiusOut * cos(angleRadians);
      var y = radiusOut * sin(angleRadians);
      vertex(x,y);
    }
  endShape(CLOSE);
  
}