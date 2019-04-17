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
	var dt = 1;
	for(var i =0;i<posCount;i++)
	{
		// 用微分方程更新位置
		var x = X[i];
		var y = Y[i];

		var dx = sin(0.1*y) * dt;
		var dy = cos(0.1*x) * dt;

		x = x + dx;
		y = y + dy;

		X[i] = x;
		Y[i] = y;

		// 在新的位置显示小球
		//drawBall(X[i],Y[i]);
		drawBall2(X[i],Y[i],i,dx/dt,dy/dt);
	}

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
	scale(150*spd,90*spd);
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
