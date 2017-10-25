
void setup() {
  size(480, 320);
}

void draw() {
  float x = mouseX;
  float y = mouseY;
  float ix = width - mouseX; // Inverse X
  float iy = height - mouseY; // Inverse Y
  background(126);
  fill(255, 255);
  ellipse(x, y, y, y);
  fill(0, 159);
  ellipse(ix, iy, iy, iy);
  
  if(keyPressed)
  {
    fill(255,0,0);
    ellipse(x,y,y*0.8,y*0.8);
  }
  
  if(mousePressed)
  {
    noStroke();
    fill(0);
    arc(x,y,y*0.6,y*0.6,0.1,TWO_PI-0.1);
    fill(255);
    ellipse(x,y,y*0.2,y*0.2);
  }
  
}

void mouseClicked()
{
  println("mouseClicked at " + GetMouseStateString());
}

void mouseDragged()
{
  println("mouseDragged at " + GetMouseStateString());
}

void mouseMoved()
{
  println("mouseMoved at " + GetMouseStateString());
}

void mousePressed()
{
  println("mousePressed at " + GetMouseStateString());
}

void mouseReleased()
{
  println("mouseReleased at " + GetMouseStateString());
}

void keyPressed()
{
  println("keyPressed as " + key + " " + keyCode);
}

void keyReleased()
{
  println("keyReleased as " + key + " " + keyCode);
}

void keyTyped()
{
  println("keyTyped as " + key + " " + keyCode);
}

String GetMouseStateString()
{
  String txt = GetMousePosString() + 
    GetPMousePosString() + 
    GetMouseButtonString();
  return txt;
}

String GetMousePosString()
{
  String txt = " mouse:(" + mouseX + "," + mouseY + ")";
  return txt;
}

String GetPMousePosString()
{
  String txt = " pmouse:(" + pmouseX + "," + pmouseY + ")";
  return txt;
}

String GetMouseButtonString()
{
  String txt = " mouseButton: " + mouseButton + " ";
  return txt;
}