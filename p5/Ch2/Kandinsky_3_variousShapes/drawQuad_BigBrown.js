
function drawQuad_BigBrown()
{
  var w = width;
  var h = height;
  
  var tx = 0.6*w;
  var ty = 0.66*h;
  
  push();
  // style
  strokeWeight(0.01);
  stroke(0);
  fill(10,60,30);
  // transform
  translate(tx,ty);
  rotate(-5*TWO_PI/360);
  scale(w*0.35,h*0.18);
  
  // draw
  quad(
    -0.5,0.5, 
    0.5,0.3, 
    0.35,-0.4,
    -0.3,-0.5);
  pop();
  
  showTitle("drawQuad_BigBrown",tx,ty);
}