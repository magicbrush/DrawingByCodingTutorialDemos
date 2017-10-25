

function drawStdRect()
{
  rectMode(CENTER);
  rect(0,0,1,1);
}

function drawRect(
   x,  y, 
   wd, 
   ht,
   degs)
{
  //push();
  translate(x,y);
  rotate(TWO_PI * degs/360 );
  scale(wd,ht);
  drawStdRect();
  //pop();
}