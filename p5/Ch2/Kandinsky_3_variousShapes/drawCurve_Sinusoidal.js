
function drawCurve_Sinusoidal()
{
  var w = width;
  var h = height;
  
  var tx = 0.07*w;
  var ty = 0.8*h;
  
  push();
    // transform
    translate(tx, ty);
    scale(w*0.01,w*0.01);
    rotate(-120*TWO_PI/360);
    
    // draw filled parabolic line
    noFill();
    stroke(0);
    strokeWeight(0.4);
    beginShape();
      for(var x=-4*PI;x<4*PI;x+=0.1)
      {
        var y = -0.5*cos(x)+4.5;
        vertex(x,y);
      }
    endShape();
  pop();
  
  showTitle("drawCurve_Sinusoidal",tx,ty);
}