var ps;
var psCount = 100;
var stepPerDraw = 10;
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
			pos = randomStep6(pos);
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


function randomStep(pos)
{
	pos.x += int(random(-1.01,1.01));
	pos.y += int(random(-1.01,1.01));
	return pos;
}

function randomStep2Left(pos)
{
	pos.x += int(random(-1.0102,1.01));
	pos.y += int(random(-1.01,1.01));
	return pos;
}

function randomStep3(pos)
{
	pos.x += random(-1,1);
	pos.y += random(-0.3,0.3);
	return pos;
}

function randomStep4(pos)
{
	var dx = random(-1,1);
	var dy = (0-dx)*random(-1,1);
	pos.x += dx;
	pos.y += dy;
	return pos;
}

function randomStep5(pos)
{
	var theta = random(0,PI)+random(0,PI);
	var radius = random(0,1);
	pos.x += radius * cos(theta);
	pos.y += radius * sin(theta);
	return pos;
}

function randomStep6(pos)
{
	var v = 0
	var count = 5;
	for(var i=0;i<count;i++)
	{
		v += tossCoin();
	}
	v /= count;

	var theta = v;
	var radius = random(0,1);
	pos.x += radius * cos(theta);
	pos.y += radius * sin(theta);
	return pos;
}

function tossCoin()
{
	return random(0,1)>0.5?-PI:PI;
}