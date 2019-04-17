// 球的位置（x,y)
var x,y;

// 函数setup() ：准备阶段
function setup() 
{
	createCanvas(480,480);
	randXY();
}

function randXY()
{
	x = random(-200,200);
	y = random(-200,200);
}


function mousePressed()
{
	randXY();
}

// 函数draw()：作画阶段
function draw() {

	var dt = 1;
	var dx = sin(0.1*y) * dt;
	var dy = cos(0.1*x) * dt;

	x = x + dx;
	y = y + dy;

	drawBall(x,y);
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

// 返回当前时刻
function getTime()
{
	return millis()/1000;
}
