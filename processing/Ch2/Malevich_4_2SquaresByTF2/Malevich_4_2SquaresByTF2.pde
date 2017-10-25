
void setup()
{
  size(300,450);
}

void draw()
{
  background(215,205,190);
  
  rectMode(CENTER);
  
  // draw black square
  noStroke();
  fill(0); 
  pushMatrix();
  translate(115,155);
  scale(130,130);
  rect(0,0,1,1);
  popMatrix();
  
  // draw red square
  fill(170,0,0);
  pushMatrix();
  translate(180,300);
  rotate(-TWO_PI/24);
  scale(100,100);
  rect(0,0,1,1);
  popMatrix();
}