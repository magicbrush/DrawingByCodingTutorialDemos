var rx=0.0,ry=0.0,rz=0.0;

function setup()
{
  createCanvas(400,400,WEBGL);
}

function draw()
{
  background(240,200,115);
  
  // rect red 
  push();
  noStroke();
  fill(100,0,0);
  
  strokeWeight(0.1);
  stroke(0);

  translate(-width*0.02,height*0.0);
  
  rotateX (-rz*0.787);
  rotateY (-ry*0.893);
  rotateZ (rx*1.121);
  
  scale(width,height*0.25);
  
  //ellipse(0,0,100,100);
  drawStdRect();
  pop();
  
  
  // rect black
  push();
  noStroke();
  fill(0);
  translate(width*0.05,-height*0.22);
  rotateX (rx);
  rotateY (ry);
  rotateZ (rz);
  scale(width*0.7,height*0.35);
  drawStdRect();
  pop();
  
  
  rx += 0.01;
  ry += 0.00923;
  rz += 0.00891;
  
}