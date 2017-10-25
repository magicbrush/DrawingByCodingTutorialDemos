
enum MoveOutType
{
  NOT,
  RIGHT,
  LEFT,
  UP,
  DOWN
}

MoveOutType CheckMoveOutCanvas(
    float x0,float y0,float x1,float y1)
{
  boolean bRight = x0>width && x1>width;
  boolean bLeft = x0<0 && x1<0;
  boolean bUp = y0<0 && y1<0;
  boolean bDown = y0>height && y1>height;
  if(bRight)
  {
    return MoveOutType.RIGHT;
  }
  else if(bLeft)
  {
    return MoveOutType.LEFT;
  }
  else if(bUp)
  {
    return MoveOutType.UP;
  }
  else if(bDown)
  {
    return MoveOutType.DOWN;
  }
  else
  {
    return MoveOutType.NOT;
  }
}