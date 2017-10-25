
void setup()
{
  size(300,450);
}

void draw()
{
  background(215,205,190);
  
  // draw black square
  noStroke();
  fill(0);
  rect(50,90,130,130);
  
  // draw red square
  fill(170,0,0);
  quad(
    130,270,
    220,250,
    240,340,
    150,360);
}