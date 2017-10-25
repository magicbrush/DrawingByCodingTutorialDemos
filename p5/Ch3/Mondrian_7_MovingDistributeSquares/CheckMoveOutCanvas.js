
var MoveOutType = 
{
  NOT:0,
  RIGHT:1,
  LEFT:2,
  UP:3,
  DOWN:4
};

function CheckMoveOutCanvas(
    x0,y0,x1,y1)
{
  var bRight = x0>width && x1>width;
  var bLeft = x0<0 && x1<0;
  var bUp = y0<0 && y1<0;
  var bDown = y0>height && y1>height;
  if(bRight)
  {
    return MoveOutType[RIGHT];
  }
  else if(bLeft)
  {
    return MoveOutType[LEFT];
  }
  else if(bUp)
  {
    return MoveOutType[UP];
  }
  else if(bDown)
  {
    return MoveOutType[DOWN];
  }
  else
  {
    return MoveOutType[NOT];
  }
}