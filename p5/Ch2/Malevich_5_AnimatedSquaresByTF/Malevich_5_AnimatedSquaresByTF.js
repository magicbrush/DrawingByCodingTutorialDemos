
function setup()
{
  createCanvas(300,450);
}

var tx = -130;
function draw()
{
  background(215,205,190);
  
  // draw black square
  noStroke();
  rectMode(CORNER);
  fill(0); 
  push();
  tx += 1.0;
  if(tx>width)
  {
    tx = -130;
  }
  translate(tx,90);
  scale(130,130);
  rect(0,0,1,1);
  pop();
  
  // draw red square
  fill(170,0,0);
  rectMode(CENTER);
  push();
  translate(180,300);
  rotate(millis()/1000);
  scale(100,100);
  rect(0,0,1,1);
  pop();
}