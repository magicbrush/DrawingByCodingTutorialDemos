var ps;
var psCount = 100;
var stepPerDraw = 10000;
var arrived;

// 函数setup() ：准备阶段
function setup() 
{
	createCanvas(200,200);
	ps = new Array();
	arrived = new Array();
	for(var i = 0;i<psCount;i++)
	{
		ps[i] = createVector(width/2,height/2);
		arrived[i] = false;
	}
}

// 函数draw()：作画阶段
function draw() {
	fill(255,255,255,1);
	rect(0,0,2*width,2*height);

	for(var i = 0;i<psCount;i++)
	{
		var pos = ps[i];

		for(var k=0;k<stepPerDraw;k++)
		{
			pos.x += int(random(-1.01,1.01));
			pos.y += int(random(-1.01,1.01));
		}
		ps[i] = pos;

		var bArrive = judgeArrived2(pos.x,pos.y);
		if(bArrive)
		{
			arrived[i] = true;
		}

		drawBall(pos.x,pos.y);
	}

	var arrivedCount = 0;
	for(var i=0;i<psCount;i++)
	{
		if(arrived[i]==true)
		{
			arrivedCount ++;
		}
	}
	push();
	fill(255);
	rect(0,0,100,20);
	fill(0);
	text(arrivedCount,10,15);
	pop();
	
}

function judgeArrived(x,y)
{
	return (x<0||x>width||y<0||y>height);
}

function judgeArrived2(x,y)
{
	return (x>width);
}

function drawBall(x,y)
{
	var r = 125*(sin(getTime())+1);
	var g = 125*(cos(getTime()/9.1234)+1);
	var b = 125*(sin(getTime()*0.32347)+1);
	//var color = color(r,g,b);
	r += x;
	r = r%255;
	g+= y;
	g = g%255;
	b += x-y;
	b = b%255;

	push();
	translate(x,y);
	fill(r,g,b);
	ellipse(0,0,5,5);
	pop();
}

function getTime()
{
	return millis()/1000;
}


