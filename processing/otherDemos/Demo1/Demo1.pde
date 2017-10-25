void setup() {
  size(480, 360);
  background(255);
}

float BrushSize = 100;
float r = 125;
float g = 125;
float b = 125;

void draw() {
  if(mousePressed)
  {
    if(key=='a')
    {
      drawRing(mouseX,mouseY,BrushSize);
    }
    else
    {
      drawSquare(mouseX,mouseY,BrushSize);
      drawSquare(mouseX-20,mouseY,BrushSize*0.5f);
    }
  }
}

void drawRing(
  float x, float y, float BrushSize)
{
  fill(255);
  ellipse(x,y,BrushSize,BrushSize*0.9);
  fill(r,g,b);
  ellipse(x,y,BrushSize*0.8,BrushSize*0.7);
}

void drawSquare(
float x, float y, float size)
{
  fill(255);
  rect(x-size/2,y-size/2,size,size);
  float sizeS = size*0.8;
  fill(r,g,b);
  rect(x-sizeS/2,y-sizeS/2,sizeS,sizeS);
}

void mouseDragged() 
{
   //println("mouseDragged at " + mouseX + "," + mouseY); 
   float deltaR = mouseX - pmouseX;
   float deltaG = mouseY - pmouseY;
   r += deltaR;
   g += deltaG;
}

void mouseWheel(MouseEvent event) {
  float e = event.getCount();
  //println(e);
  BrushSize += 0.1f*e;
  //println("BrushSize:" + BrushSize);
}