var pos;

var resX = 40;
var resY = 40;

var lastTime = 0;

// 函数setup() ：准备阶段
function setup() 
{
	createCanvas(480,480);
	var gapX = width/resX;
	var gapY = height/resY;
	
	pos = new Array();
	for(var i=0;i<resX;i++)
	{
		pos[i] = new Array();
		for(var j=0;j<resY;j++)
		{
			pos[i][j] = createVector((i-resX/2)*gapX,(j-resY/2)*gapY);
		}
	}

	lastTime = getTime();
	//lastTime = 0.0;
}

// 函数draw()：作画阶段
function draw() {
	
	fill(255,1);
	rect(0,0,width,height);

	var tNow = getTime(); // 当前时刻
	var dt = tNow - lastTime; // 时差

	//var dx = y * dt;
	//var dy = x * dt;
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			pos[i][j] = updatePos6(pos[i][j],dt);
			drawBall(pos[i][j].x,pos[i][j].y);
		}
	}

	lastTime = tNow;// 记录时刻
}

function updatePos(p,dt)
{
	var dx = p.y * dt;
	var dy = p.x * dt;
	p.x += dx;
	p.y += dy;
	return p;
}

function updatePos2(p,dt)
{
	var dx = sin(0.1*p.y) * p.y * dt;
	var dy = cos(0.1*p.x) * p.x * dt;
	p.x += dx;
	p.y += dy;
	return p;
}

function updatePos3(p,dt)
{
	var dx = sin(0.1*p.y*p.y) * p.x * dt;
	var dy = cos(0.1*p.x*p.x) * p.y * dt;
	p.x += dx;
	p.y += dy;
	return p;
}

function updatePos4(p,dt)
{
	var dx = 10*sin(0.1*p.y)  * dt;
	var dy = 10*cos(0.1*p.x)  * dt;
	p.x += dx;
	p.y += dy;
	return p;
}

function updatePos4(p,dt)
{
	var dx = 15*sin(0.1*p.y)  * dt;
	var dy = 15*cos(0.1*p.x)  * dt;
	p.x += dx;
	p.y += dy;
	return p;
}

function updatePos5(p,dt)
{
	var radius = p.mag();
	var thetaRad = p.heading();
	var dx = 15*sin(0.1*radius)  * dt;
	var dy = 15*cos(8*thetaRad)  * dt;
	p.x += dx;
	p.y += dy;
	return p;
}

function updatePos6(p,dt)
{
	var tNow = getTime();
	var radius = p.mag();
	var thetaRad = p.heading();
	var dx = 15*sin(0.12*radius + 5*sin(0.3*tNow)) * dt;
	var dy = 15*cos(24*thetaRad - 4*cos(0.4*tNow)) * dt;
	p.x += dx;
	p.y += dy;
	return p;
}

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
