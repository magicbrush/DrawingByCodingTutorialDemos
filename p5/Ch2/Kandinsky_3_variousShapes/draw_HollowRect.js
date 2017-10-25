function draw_HollowRect()
{
  var w = width;
  var h = height;
  var tx = 0.77*w;
  var ty = 0.45*h;
  
  push();
    noStroke();
    fill(230,30,60,100);
    
    translate(tx,ty);
    scale(w*0.1,h*0.07);
    
    beginShape();
      vertex(-0.5,-0.5);
      vertex(0.5,-0.5);
      vertex(0.5,0.5);
      vertex(-0.5,0.5);
      // hollow interior part
      // must revert winding direction
      // of exterior part 
      beginContour();
        var scl = 0.2;
        vertex(-scl,scl);
        vertex(scl,scl);
        vertex(scl,-scl);
        vertex(-scl,-scl);
      endContour();
    endShape(CLOSE);
  pop();
  
  showTitle("draw_HollowRect",tx,ty);
}