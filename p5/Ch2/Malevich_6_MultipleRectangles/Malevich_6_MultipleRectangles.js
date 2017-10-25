function setup()
{
  createCanvas(300,450);
}

function draw()
{
  background(230,190,105);
  
  // rects from top to bottom
  push();
  noStroke();
  fill(0);
  drawRect(100,85,140,90,-40);
  pop();
  
  push();
  noStroke();
  fill(0,45,0);
  drawRect(120,139,80,20,-40);
  pop();
  
  push();
  noStroke();
  fill(0,47,0);
  drawRect(180,114,140,20,-40);
  pop();
  
  push();
  noStroke();
  fill(175,5,0);
  drawRect(180,159.5,50,30,50);
  pop();
  
  push();
  noStroke();
  fill(16,70,10);
  drawRect(45,300,15,180,-5);
  pop();
  
  push();
  noStroke();
  fill(65,0,0);
  drawRect(250,300,500,7,-55);
  pop();
  
  push();
  noStroke();
  fill(170,0,0);
  drawRect(260,380,60,35,-55);
  pop();
  
  // center circle
  push();
  noStroke();
  fill(230,100,0);
  ellipse(150,320,45,45);
  pop();
}