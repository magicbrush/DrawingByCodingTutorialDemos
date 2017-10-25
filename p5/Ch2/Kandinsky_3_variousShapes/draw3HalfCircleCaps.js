

function draw3HalfCircleCaps()
{
  var w = width;
  var h = height;
  var tx = width*0.84;
  var ty = height*0.54;
  
  draw_OneCircleCap(
    tx,ty,
    w*0.12,h*0.11,
    -30,
    bgColor,
    color(40,80,70),
    0.04);

  draw_OneCircleCap(
    tx,ty,
    w*0.1,h*0.08,
    -30,
    bgColor,
    color(0,80,50),
    0.06);
  
  draw_OneCircleCap(
    tx,ty,
    w*0.07,h*0.05,
    -30,
    bgColor,
    color(200,80,30),
    0.1);
    
  showTitle("draw3HalfCircleCaps",tx,ty);
}
