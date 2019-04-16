var x,y;

var lastTime = 0;

var colNum = 30;
var rowNum = 30;
var gap = 12;

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
			x[i][j] = i*gap - gap*colNum/2 + 0.0*random(-50,50);
			y[i][j] = j*gap - gap*rowNum/2+ 0.0*random(-50,50);
		}
	}
}

// 函数draw()：作画阶段
var count = 0;
function draw() {
	if(count>=25)
	{
		fill(255,7);
		count = 0;
	}
	count ++;
	
	rect(0,0,width,height);

	var tNow = getTime(); // 当前时刻
	var dt = tNow - lastTime; // 时差

	for(var i =0;i<colNum;i++)
	{
		for(var j=0;j<rowNum;j++)
		{
			var xx = x[i][j];
			var yy = y[i][j];
			var xshift = 0.2*((mouseX-width/2)-xx);
			var yshift = 0.2*((mouseY-height/2)-yy);
			xshift = 0.8*xshift + 0.6*yshift;
			yshift = -0.8*xshift + 0.6*yshift;
			xshift = 0;
			yshift = 0;
			var dx = (30*sin(1.2*tNow+0.01*xx)*
				sin(0.1*(yy+0.3*xx)) + xshift) * dt;
			var dy = (18*cos(1.5*tNow+0.01*yy)*
				cos(0.1*(xx-0.5*yy)) + yshift) * dt;
			xx += dx;
			yy += dy;
			x[i][j] = xx;
			y[i][j] = yy;

			var cr = getColor2(dx,dy);
			var scl = getSize3(dx,dy,xx,yy);
			push();
			translate(width/2,height/2);
			translate(x[i][j],y[i][j]);
			scale(50,50);
			scale(scl,scl);
			fill(cr);// 填充白色
			noStroke();
			ellipse(0,0,0.5,0.5); // 画圆形
			pop();
		}
	}

	lastTime = tNow;// 记录时刻
}

function getColor(x,y)
{
	var r = 255*(sin(0.1*x)+1.0);
	var g = 255*(cos(0.223*y)+1.0);
	var b = 255*(sin(0.123*(x*y))+1.0);
	var cr = color(r,g,b);
	/*cr.r = r;
	cr.g = g;
	cr.b = b;*/
	return cr;
}

function getColor2(dx,dy)
{
	var cr = color(
		constrain(200*(dx-dy),0,255),
		constrain(200*(dy+dx),0,255),
		constrain(100*(dx*dx+dy*dy),0,255),
		100-100*sqrt(dx*dx+dy*dy));
	/*cr.r = r;
	cr.g = g;
	cr.b = b;*/
	return cr;
}
function getSize(dx,dy)
{
	return 0.9*sqrt(dx*dx+dy*dy)+0.1;
}

function getSize2(dx,dy,x,y)
{
	return 0.9*sqrt(dx*dx+dy*dy)+0.5*sin(0.05*(x+y))+0.1;
}

function getSize3(dx,dy,x,y)
{
	return 0.5*sqrt(dx*dx+dy*dy)+0.5*sin(0.05*(x+y))+0.1;
}

function getTime()
{
	return millis()/1000;
}
