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
			var p = pos[i][j];
			var dx = 12*sin(0.1*p.y*sin(0.23*p.x+tNow)) * dt;
			var dy = 12*cos(0.1*p.x*cos(0.025*p.y+2*tNow)) * dt;
			p.x += dx;
			p.y += dy;
			pos[i][j] = p;
			drawBall(p.x,p.y);
		}
	}

	lastTime = tNow;// 记录时刻
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
