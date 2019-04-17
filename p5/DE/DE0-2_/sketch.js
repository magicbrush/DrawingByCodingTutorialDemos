// 球的位置
var X,Y;
var posCount = 100;

// 函数setup() ：准备阶段
function setup() 
{
	createCanvas(480,480);
	X = new Array();
	Y = new Array();
	randXY();
}

function randXY()
{
	for(var i =0;i<posCount;i++)
	{
		X[i] = random(-200,200);
		Y[i] = random(-200,200);
	}
	
}

function mousePressed()
{
	randXY();
}

// 函数draw()：作画阶段
function draw() {

	// 刷屏
	fill(255,2);
	rect(0,0,width,height);

	// 遍历所有小球，更新位置并显示
	var tNow = getTime();
	var dt = 0.01;
	for(var i =0;i<posCount;i++)
	{
		// 用微分方程更新位置
		var x = X[i];
		var y = Y[i];

		var dx = fxyt5(x,y,tNow) * dt;
		var dy = gxyt5(x,y,tNow) * dt;

		x = x + dx;
		y = y + dy;

		X[i] = x;
		Y[i] = y;

		// 在新的位置显示小球
		drawBall(X[i],Y[i]);
		//drawBall2(X[i],Y[i],i,dx/dt,dy/dt);
	}

}

function fxyt(x,y,t)
{
	return sin(0.1*y);
}

function fxyt2(x,y,t)
{
	return sqrt(x*x + y*y);
}

function fxyt3(x,y,t)
{
	return 20*cos(0.15*x +20*sin(0.01*y));
}

function fxyt4(x,y,t)
{
	return mouseX-x-width/2;
}

function fxyt5(x,y,t)
{
	return sin(0.3*t) *random(-800,800) + mouseX-x-width/2;
}

function gxyt(x,y,t)
{
	return cos(0.1*x);
}

function gxyt2(x,y,t)
{
	return atan2(x,y);
}

function gxyt3(x,y,t)
{
	return 18*sin(0.15*x*y +20*cos(0.008*x));
}

function gxyt4(x,y,t)
{
	return mouseY-y-height/2;
}

function gxyt5(x,y,t)
{
	return cos(0.5*t)*random(-800,800) + mouseY-y-height/2;
}

// 在x,y位置画球
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

function drawBall2(x,y,i,vx,vy)
{
	var spd = sqrt(vx*vx + vy*vy);
	var theta = atan2(vx,vy);

	push();
	translate(width/2,height/2);
	translate(x,y);
	rotate(theta);
	scale(1*spd,0.5*spd);
	fill(100*vx,200*vy,300-200*spd);// 填充白色
	noStroke();
	ellipse(0,0,0.1,0.1); // 画圆形
	pop();
}

// 返回当前时刻
function getTime()
{
	return millis()/1000;
}
