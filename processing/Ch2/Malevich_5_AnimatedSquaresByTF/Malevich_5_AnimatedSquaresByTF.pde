
void setup()
{
  size(300,450);
}

float tx = -130;
void draw()
{
  background(215,205,190);
  
  // draw black square
  noStroke();
  rectMode(CORNER);
  fill(0); 
  pushMatrix();
  tx += 1.0f;
  if(tx>width)
  {
    tx = -130;
  }
  translate(tx,90);
  scale(130,130);
  rect(0,0,1,1);
  popMatrix();
  
  // draw red square
  fill(170,0,0);
  rectMode(CENTER);
  pushMatrix();
  translate(180,300);
  rotate(millis()/1000.0f);
  scale(100,100);
  rect(0,0,1,1);
  popMatrix();
}