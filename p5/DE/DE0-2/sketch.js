var X,Y;
var pointsCount = 400;
var lastTime = 0;

// 函数setup() ：准备阶段
function setup() 
{
	createCanvas(480,480);
	
	X = new Array();
	Y = new Array();
	InitXY();
	
	lastTime = getTime();
	//lastTime = 0.0;
}

function InitXY()
{
	for(var i =0;i<pointsCount;i++)
	{
		X[i] = random(-200,200);
		Y[i] = random(-200,200);
	}
}

// 函数draw()：作画阶段
function draw() {
	fill(255,1);
	rect(0,0,width,height);

	var tNow = getTime(); // 当前时刻
	var dt = tNow - lastTime; // 时差

	// 用微分方程更新每个位置x,y
	for(var i =0;i<pointsCount;i++)
	{
		var yi = Y[i];
		var xi = X[i];

		var dx = 30*sin(0.13*yi) * dt;
		var dy = 30*cos(0.14*xi) * dt;

		xi = xi + dx;
		yi = yi + dy;

		X[i] = xi;
		Y[i] = yi;
	}
	
	// 绘制
	for(var i =0;i<pointsCount;i++)
	{
		drawBall(X[i],Y[i]);
	}
	lastTime = tNow;// 记录时刻
}

function mousePressed()
{
	InitXY();
}


/*
	var dx = 25*sin(0.1*y) * dt;
	var dy = 25*cos(0.1*x) * dt;

	x += dx;
	y += dy;
	*/


function drawBall(x,y)
{
	push();
	translate(width/2,height/2);
	translate(x,y);
	scale(50,50);
	fill(0);// 填充白色
	noStroke();
	ellipse(0,0,0.1,0.1); // 画圆形
	pop();

}


function getTime()
{
	return millis()/1000;
}
