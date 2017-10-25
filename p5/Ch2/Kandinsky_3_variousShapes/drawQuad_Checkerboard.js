

function drawQuad_Checkerboard()
{
  var w = width;
  var h = height;
  
  var tx = 0.28*w;
  var ty = 0.8*h;
  
  push();
  {
    // style
    stroke(0);
    strokeWeight(0.02);
    noFill();
    // transform
    translate(tx,ty);
    rotate(-30*TWO_PI/360);
    scale(w*0.15,h*0.15);
   
    // draw
    beginShape();
    vertex(-0.5,0.5);
    vertex(0.4,0.3);
    vertex(0.5,-0.4);
    vertex(-0.5,-0.5);
    endShape(CLOSE);
  }
  pop();
  
  showTitle("drawQuad_Checkerboard",tx,ty);
}