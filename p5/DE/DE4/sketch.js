var pos;

var lastTime = 0;

// 函数setup() ：准备阶段
function setup() 
{
	createCanvas(480,480);
	
	pos = new Array();
	for(var i=-10;i<10;i++)
	{
		pos[i] = new Array();
		for(var j=-10;j<10;j++)
		{
			pos[i][j] = createVector(i*20,j*20);
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
	for(var i=-10;i<10;i++)
	{
		for(var j=-10;j<10;j++)
		{
			pos[i][j] = updatePos4(pos[i][j],dt);
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
