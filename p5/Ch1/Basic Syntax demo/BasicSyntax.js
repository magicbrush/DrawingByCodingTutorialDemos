// 函数setup() ：准备阶段
function setup() {
	createCanvas(640,480);
}

// 函数draw()：作画阶段
function draw() {
	background(255);

	fill(255);// 填充白色
	ellipse(320,240,300,300); // 画圆
	rect(280,300,80,40); // 矩形
	line(200,200,280,210); // 线段

	fill(255,0,0);
	triangle(320,220,300,280,340,280); // 鼻子

	fill(0,255,0);
	arc(380,220,80,50,PI,TWO_PI);

	fill(0);
	beginShape();
	vertex(280,200);
	vertex(360,210);
	vertex(420,100);
	vertex(380,80);
	vertex(260,110);
	endShape(CLOSE);

	// 变量的用法
	fill(0);
	ellipse(mouseX,mouseY,50,50);

	var centerX, centerY;
	centerX = mouseX; // 为变量赋初始值
	centerY = mouseY;
	fill(255);
	ellipse(centerX,centerY,40,40);
	fill(255,0,0);
	ellipse(centerX,centerY,30,30);
	var msecs = millis();
	
	// 获得时间，放入变量
	var secs = msecs/1000;
	var xoffset = 15*sin(5*secs); // 根据时间求得变化的量
	var sizeOffset = 10*cos(4.333*secs);
	fill(0,0,255);
	ellipse(
		centerX+xoffset,
		centerY,
		20+sizeOffset,
		20+sizeOffset);

	// 分支流程
	if(mouseX<100)
	{
		fill(0,255,0);
		ellipse(100,100,20,20);
	}
	else if(mouseX>=100 && mouseX<200)
	{
		fill(100,100,0);
		ellipse(400,400,50,10);
	}
	else if(mouseX>=200 && mouseX<300)
	{
		fill(200,250,0);
		rect(300,300,50,100);
	}
	else
	{
		fill(0,255,255);
		line(0,0,400,400);
	}

	
	// 循环
	// while
	var i = 5;
	while(i>0)
	{
		fill(255,0,0);
		ellipse(i*100,150,i*30,i*30);
		i--;
	}

	// for 
	for(var j=0;j<6;j++)
	{
		fill(j*30);
		rect(j*100,250,50,50);
	}

	// 函数调用 结合 for循环
	for(var k = 0;k<2;k++)
	{
		drawRing(240+k*150,220);
	}

}

// 函数定义
function drawRing(x,y)
{
	fill(0);
	ellipse(x,y,50,50);

	fill(255);
	ellipse(x,y,40,40);
	fill(255,0,0);
	ellipse(x,y,30,30);
	var msecs = millis();
	
	// 获得时间，放入变量
	var secs = msecs/1000;
	var xoffset = 15*sin(5*secs); // 根据时间求得变化的量
	var sizeOffset = 10*cos(4.333*secs);
	fill(0,0,255);
	ellipse(
		x+xoffset,
		y,
		20+sizeOffset,
		20+sizeOffset);
}

