var x,y;

var lastTime = 0;

// 函数setup() ：准备阶段
function setup() 
{
	createCanvas(480,480);
	
	x = -25.55;
	y = 30.25;
	lastTime = getTime();
	//lastTime = 0.0;
}

// 函数draw()：作画阶段
function draw() {
	fill(255,1);
	rect(0,0,width,height);

/*
	var tNow = getTime(); // 当前时刻
	var dt = tNow - lastTime; // 时差
*/
	drawBall(x,y);

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
