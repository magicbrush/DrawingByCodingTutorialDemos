var x,y;

var lastTime = 0;

var colNum = 16;
var rowNum = 16;
var gap = 20;

// 函数setup() ：准备阶段
function setup() 
{
	createCanvas(480,480);
	
	x = new Array();
	y = new Array();
	lastTime = getTime();

	for(var i =0;i<colNum;i++)
	{
		x[i] = new Array();
		y[i] = new Array();
		for(var j=0;j<rowNum;j++)
		{
			x[i][j] = i*gap - gap*colNum/2;
			y[i][j] = j*gap - gap*rowNum/2;
		}
	}
}

// 函数draw()：作画阶段
function draw() {
	fill(255,1);
	rect(0,0,width,height);

	var tNow = getTime(); // 当前时刻
	var dt = tNow - lastTime; // 时差

	for(var i =0;i<colNum;i++)
	{
		for(var j=0;j<rowNum;j++)
		{
			var xx = x[i][j];
			var yy = y[i][j];
			var dx = cos(0.33*yy/xx) * 25*sin(0.1*yy) * dt;
			var dy = sin(0.22*xx/yy) * 25*cos(0.1*xx) * dt;
			xx += dx;
			yy += dy;
			x[i][j] = xx;
			y[i][j] = yy;

			//drawBall(xx,yy);
			drawBall2(xx,yy,i,j,dx,dy);

			if(random(0,1)>0.99)
			{
				x[i][j] = random(-240,240);
				y[i][j] = random(-240,240);
			}
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

function drawBall2(x,y,i,j,dx,dy)
{
	var r = (i*1000)%255;
	var g = (j*888)%255;
	var b = (i*j*100)%255;

	var spd = sqrt(dx*dx + dy*dy);
	var theta = atan2(dx,dy);

	push();
	translate(width/2,height/2);
	translate(x,y);
	rotate(theta);
	scale(120*spd,70*spd);
	fill(r,g,b);// 填充白色
	noStroke();
	ellipse(0,0,0.1,0.1); // 画圆形
	pop();
}

function getTime()
{
	return millis()/1000;
}
