// 彩球的位置
var a;
var b;
var c;
var d;

// 插值速率
//var lerpSpd = 3.0;

// 函数setup() ：准备阶段
function setup() {
	createCanvas(480,480);
	a = 1;
	b = 0;
	c = 0;
	d = 1;
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
		a = mx;
		b = my;
	}
	else
	{
		c = mx;
		d = my;
	}

	push();
	strokeWeight(1.0);
	translate(width/2,height/2);
	
	stroke(255,0,0);
	fill(255,0,0);
	strokeWeight(2.0);
	line(0,0,a,b);
	line(0,0,c,d);
	strokeWeight(1.0);
	ellipse(a,b,5,5);
	rect(c,d,5,5);
	line(a,b,a+c,b+d);
	line(c,d,a+c,b+d);
	line(0,0,a+c,b+d);
	line(a,b,c,d);

	stroke(0,0,255);
	fill(0,0,255);
	strokeWeight(2.0);
	line(0,0,a,c);
	line(0,0,b,d);
	strokeWeight(1.0);
	ellipse(a,c,3,3);
	rect(b,d,3,3);
	line(a,c,a+b,c+d);
	line(b,d,a+b,c+d);
	line(0,0,a+b,c+d);
	line(a,c,b,d);
	pop();


	lastTime = tNow;
}





