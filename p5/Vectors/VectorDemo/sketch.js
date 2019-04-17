var pos;


// 函数setup() ：准备阶段
function setup() 
{
	createCanvas(480,480);
	rectMode(CENTER);
	pos = createVector(width/2,height/2);
}

// 函数draw()：作画阶段
function draw() {
	fill(255,255,255,1);
	rect(0,0,2*width,2*height);

	var mousePos = createVector(mouseX,mouseY);
	var vel = p5.Vector.add(mousePos, p5.Vector.mult(pos,-1));
	print("vel:" + vel);
	vel.normalize();
	vel.mult(2);

	var movement = 
		p5.Vector.mult(vel,1);
	pos.add(movement);

	ellipse(pos.x,pos.y,10,10);

	if(pos.x>width)
	{
		pos.x -= width
	}
	if(pos.x<0)
	{
		pos.x+= width;
	}
	if(pos.y>height)
	{
		pos.y -= height;
	}
	if(pos.y<0)
	{
		pos.y+= height;
	}
	
}


