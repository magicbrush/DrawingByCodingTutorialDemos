
function showTitle(txt, x, y)
{
  if(bShowTitle)
  {
    push();
    textSize(titleTxtSize);
    fill(0,0,0,100);
    text(txt,x,y);
    pop();
  }
}

function draw_HalfCircleCap(
  x, y,
  wd, ht)
{
  arc(x,y,wd,ht,PI,TWO_PI);
}

function draw_OneCircleCap(
  x,y, 
  sx,sy,
  rotDegs,
  fillColor,
  strokeColor,
  strokeWt)
{
  push();
  translate(x,y);
  rotate(rotDegs*TWO_PI/360);
  scale(sx,sy);
  fill(fillColor);
  stroke(strokeColor);
  strokeWeight(strokeWt);
  draw_HalfCircleCap(0,0,1,1);
  pop();
}