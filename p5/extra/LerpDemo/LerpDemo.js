// 彩球的位置
var x;
var y;
// 彩球位置的插值变化速率
var lerpPosSpd = 31.0;

// 彩球当前大小s和颜色rgbaf(a:alpha)
var s = 15;
var r = 0;
var g = 0;
var b = 0;
var a = 0.1;

// 彩球颜色插值速率
var lerpSpd = 3.0;

// 彩球的目标大小和颜色
var st = 30;
var rt = 0;
var gt = 0;
var bt = 0;
var at = 0.1;

// 函数setup() ：准备阶段
function setup() {
	createCanvas(480,320);
	x = width/2;
	y = height/2;
	colorMode(RGB,1,1,1,1);
}


// 函数draw()：作画阶段
var lastTime = -1;

function draw() {
	var tNow = millis()/1000;
	if(lastTime<0)
	{
		lastTime=tNow;
		return;
	}

	var dt = tNow-lastTime;
	var lerpPosT = lerpPosSpd*dt;
	if(mouseIsPressed)
	{
		// 让x的数值向mouseX的数值靠拢，
		// 靠拢方式为“线性插值”，靠拢程度（快慢）为lerpPosT
		x = lerp(x,mouseX,lerpPosT);
		y = lerp(y,mouseY,lerpPosT);
		drawThing(x,y);
	}

	var lerpT = lerpSpd * dt;
	s = lerp(s,st,lerpT);
	r = lerp(r,rt,lerpT);
	g = lerp(g,gt,lerpT);
	b = lerp(b,bt,lerpT);
	a = lerp(a,at,lerpT);

	randomChange(dt);

	lastTime = tNow;
}


function drawThing(x,y)
{
	fill(r,g,b,a);
	noStroke();
	ellipse(x,y,s,s);
}

var TimeToChange = -1;
function randomChange(dt)
{
	TimeToChange-= dt;
	if(TimeToChange<0)
	{
		st = random(10,60);
		rt = random(0,1);
		gt = random(0,1);
		bt = random(0,1);
		at = random(0.1,0.3);
		print("random st:" + st);
		TimeToChange = randomValue();
		print("TimeToChange:" + TimeToChange);
	}
}

var lamda = 5;
function randomValue()
{
	var x = 5/lamda;
	var cnt = 0;
	do
	{
		x = random(0,5/lamda);
		var y = random(0,1);
		var prob = exp(-lamda*x);
		//print("prob:" + prob + " x:" + x + " y:" + y);
		if(cnt>30)
		{
			break;
		}
		cnt ++;
	}while(prob<y)
	
	//print("t:" + x);
	return x;
}

