var x,y;

var lastTime = 0;

// 函数setup() ：准备阶段
function setup() 
{
	createCanvas(480,480);
	x = 25;
	y = 10;
	lastTime = getTime();
	//lastTime = 0.0;
}

// 函数draw()：作画阶段
function draw() {
	fill(255,1);
	rect(0,0,width,height);

	var tNow = getTime(); // 当前时刻
	var dt = tNow - lastTime; // 时差

	
	

	drawAxiss();

	// 以鼠标位置为矢量显示出来
	//var mx = mouseX - width/2;
	//var my = mouseY - height/2;

	for(theta = 0;theta<TWO_PI;theta+=TWO_PI/20)
	{
		for(radius=10;radius<200;radius+=30)
		{
			var r = radius*map(sin(3*theta),-1,1,0.3,1);
			var x = r*cos(theta+0.3*tNow);
			var y = r*sin(theta+0.3*tNow);
			drawVector(x,y,color(0,0,0,30));
			var x2 = pow(x,1.2)*x - pow(y,1.2)*y;
			var y2 = pow(y,1.2)*x + pow(x,1.5)*y;
			drawVector(x2,y2,color(255,0,0,30));
		}
	}

	/*
	for(r=0;r<4;r++)
	{
		for(t=0;t<4;t++)
		{
			var radius = r*10*sin(0.1*tNow+100);
			var mx = radius * sin(tNow+t*0.3);
			var my = radius * cos(tNow+t*0.3);
			drawVector(mx,my,color(0,0,0,30));

			// 对 (mx,my)作变换
			var mx2 = pow(mx,1.2)*mx -pow(my,1.2)*my;
			var my2 = pow(my,1.2)*mx + pow(mx,1.5)*my;
			drawVector(mx2,my2,color(255,0,0,30));
		}
	}
	*/

	

	lastTime = tNow;// 记录时刻
}

function drawVector(x,y,color)
{
	//drawLineToXY(x,y,color);
	drawBallAtXY(x,y,color);
}

function drawAxiss()
{
	push();
	translate(width/2,height/2);
	strokeWeight(1);
	var gap = 30;
	for(i=-10;i<10;i++)
	{
		line(-1000,i*gap,1000,i*gap);
		line(i*gap,-1000,i*gap,1000);
	}
	fill(255,0,0);
	ellipse(0,0,3,3);
	/*
	stoke(255,0,0);
	line(0,0,1000,0);
	stroke(0,255,0);
	line(0,0,0,1000);
	*/
	pop();
}

function drawBallAtXY(x,y,color)
{
	push();
	translate(width/2,height/2);
	translate(x,y);
	//translate(50,50);
	scale(50,50);
	fill(color);// 填充黑色
	noStroke();
	//line(0,0,x,y);
	ellipse(0,0,0.1,0.1); // 画圆形
	pop();
}

function drawLineToXY(x,y,color)
{
	push();
	translate(width/2,height/2);
	
	//translate(50,50);
	//scale(50,50);
	fill(0);// 填充黑色
	strokeWeight(2);
	stroke(color);
	line(0,0,x,y);
	//ellipse(0,0,0.05,0.05); // 画圆形
	pop();
}

function getTime()
{
	return millis()/1000;
}
