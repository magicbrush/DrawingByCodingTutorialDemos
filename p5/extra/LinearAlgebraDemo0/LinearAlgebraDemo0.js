// 彩球的位置
var x0;
var y0;
var x1;
var y1;

var Ctrl = false;
var rotatingA = false;

var v2;
var a = 1.5;
var b = -1;

// 插值速率
//var lerpSpd = 3.0;

// 函数setup() ：准备阶段
function setup() {
	createCanvas(480,480);
	x0 = 1;
	y0 = 0;
	x1 = 0;
	y1 = 1;
	v2 = createVector(0,0);
	rectMode(CENTER);
}


// 函数draw()：作画阶段
var lastTime = -1;

function draw() {
	background(255);
	var tNow = millis()/1000;
	if(lastTime<0)
	{
		lastTime=tNow;
		return;
	}

	var mx = mouseX - width/2;
	var my = mouseY - height/2;
	

	if(mouseIsPressed)
	{
		if(Ctrl)
		{
			x0 = mx;
			y0 = my;
		}
		else
		{
			x1 = mx;
			y1 = my;
		}
	}

	if(rotatingA)
	{
		var theta = atan2(x0,y0);
		var radius = sqrt(x0*x0+y0*y0);
		var theta2 = millis()/8000;
		x0 = radius*cos(theta2);
		y0 = radius*sin(theta2);
	}

	push();
	strokeWeight(1.0);
	translate(width/2,height/2);
	
	stroke(255,0,0);
	fill(255,0,0);
	strokeWeight(2.0);
	line(0,0,x0,y0);
	line(0,0,x1,y1);
	strokeWeight(1.0);
	ellipse(x0,y0,5,5);
	rect(x1,y1,5,5);
	line(x0,y0,x0+x1,y0+y1);
	line(x1,y1,x0+x1,y0+y1);
	line(0,0,x0+x1,y0+y1);
	line(x0,y0,x1,y1);

	stroke(0,0,255);
	fill(0,0,255);
	strokeWeight(2.0);
	line(0,0,x0,x1);
	line(0,0,y0,y1);
	strokeWeight(1.0);
	ellipse(x0,x1,3,3);
	rect(y0,y1,3,3);
	line(x0,x1,x0+y0,x1+y1);
	line(y0,y1,x0+y0,x1+y1);
	line(0,0,x0+y0,x1+y1);
	line(x0,x1,y0,y1);
	pop();

	var color1 = color(255,0,0);
	var color2 = color(0,255,0);
	dispVectorValue(x0, y0, "a", color1);
	dispVectorValue(x1, y1, "b", color1);
	dispVectorValue(x0, x1, "c", color2);
	dispVectorValue(y0, y1, "d", color2);

	var Det = x0*y1-x1*y0;
	var Dot = x0*x1+y0*y1;
	var DetDotSqrRoot = sqrt(Det*Det+Dot*Dot);

	var cx0 = (x0+x1)/2;
	var cy0 = (y0+y1)/2;
	push();
	translate(width/2,height/2);
	text("Det(a,b) = " + 
		roundValue(Det), roundValue(cx0),roundValue(cy0));
	pop();

	var cx1 = (x0+y0)/2;
	var cy1 = (x1+y1)/2;
	push();
	translate(width/2,height/2);
	text("Det(c,d) = " + 
		roundValue(Det), roundValue(cx1),roundValue(cy1));
	pop();

	var v0 = createVector(a*x0,a*y0);
	var v1 = createVector(b*x1,b*y1);
	var v2 = p5.Vector.add(v0,v1);

	push();
	translate(width/2,height/2);
	stroke(0,255,0);
	strokeWeight(2.5);
	drawVector(createVector(0,0),v2);
	pop();
	dispVectorValue(v2.x, v2.y, "s", color(0,255,0));




	text("Det:" + roundValue(Det), 10,20);
	text("Dot:" + roundValue(Dot), 10,50);
	text("Sqrt(Det^2+Dot^2):" + 
		roundValue(DetDotSqrRoot) , 10,80);



	lastTime = tNow;
}

function keyReleased()
{
	if(key==="A")
	{
		Ctrl = !Ctrl;
	}
	else if(key==="S")
	{
		rotatingA = !rotatingA;
	}
	
}

function drawVector(v0,v1)
{
	line(v0.x,v0.y,v1.x,v1.y);
}

function dispVectorValue(x,y,name,color)
{
	var txt = name + " (" + roundValue(x) + "," + roundValue(y) + ")";
	push();
	textAlign(LEFT);
	stroke(color);
	strokeWeight(1.0);
	translate(width/2,height/2);
	scale(0.5,0.5);
	translate(x,y);
	scale(2,2);
	text(txt,x/2+10,y/2 );
	pop();
}

function roundValue(value)
{
	return round(value*100)/100;
}





