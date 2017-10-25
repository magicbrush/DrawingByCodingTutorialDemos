
function drawCurves_Parabola()
{
  var w = width;
  var h = height;
  var tx = 0.07*w;
  var ty = 0.8*h;
  
  push();
  // transform
  translate(tx,ty);
  scale(w*0.08,w*0.08);
  rotate(-120*TWO_PI/360);
  
  // draw filled parabolic line
  
  fill(10,40,30);
  noStroke();
  beginShape();
  for(var x=-1;x<1;x+=0.025)
  {
    var y = x*x;
    vertex(x,y);
  }
  endShape();
  
  
  // draw parabolic curve
  noFill();
  stroke(0);
  strokeWeight(0.08);
  beginShape();
  for(var x=-1.5;x<1.5;x+=0.025)
  {
    var y = x*x;
    vertex(x,y);
  }
  endShape();
  
  // draw horizontal line
  stroke(0);
  strokeWeight(0.05);
  line(-2.8,2,2.8,2);
  
  // draw vertical line
  stroke(0);
  strokeWeight(0.08);
  line(-0.1,-0.8,0.6,10);
  
  pop();
  
  showTitle("drawCurves_Parabola",tx,ty);
}