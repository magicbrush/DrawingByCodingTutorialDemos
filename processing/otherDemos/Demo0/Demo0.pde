void setup() {
  size(320, 240);
}

float brushSize = 50.0f;
float r=0,g=0,b=0;

int BrushId = 0;

void draw() {
  //background(153);
  
  
  if(mousePressed)
  {
    if(BrushId==0)
    {
      Brush0(mouseX,mouseY);
    }
    else
    {
      Brush1(mouseX,mouseY);
    }
    
  }
}

void Brush0(float x,float y)
{
    fill(r,g,b);
    drawRing(x,y,brushSize);
    fill(r,g,b);
    drawRing(x-30,y,brushSize*0.8);
    fill(r,g,b);
    drawRing(x+20,y,brushSize*0.6);
}

void Brush1(float x,float y)
{
  fill(r,g,b);
  drawRing(x,y,brushSize);
}

void drawRing(
  float x,float y,float size)
{
  ellipse(x,y,size,size*0.8);
  fill(255);
  ellipse(x,y,size*0.8,size*0.8*0.8);
}

String GetMouseStateText()
{
  String txt = "";
  txt += " mouse (" + mouseX + "," + "mouseY" +
    " pmouse (" + pmouseX + "," + "pmouseY";
  txt += " mousePressed?" + mousePressed;
  txt += " mouseButton:" + mouseButton;
  
  return txt;
}

void mouseClicked()
{
  println(
    "mouseClicked: " + GetMouseStateText());
}

void mouseDragged()
{
  println(
    "mouseDragged: " + GetMouseStateText());
}

void mouseMoved()
{
  println(
    "mouseMoved: " + GetMouseStateText());
}
 

void mousePressed()
{
 println(
    "mousePressed: " + GetMouseStateText());
}

void mouseReleased()
{
  println(
    "mouseReleased: " + GetMouseStateText());
}

void mouseWheel(MouseEvent event)
{
  println(
    "mouseWheel: " + GetMouseStateText());
  //println("mouseEvent:" + event);
   float e = event.getCount();
  brushSize += e;
  
}

void keyPressed()
{
  println("keyPressed:" + key);
    if(BrushId==0)
    {
      BrushId=1;
    }
    else
    {
      BrushId=0;
    }
}

void keyReleased()
{
  
}