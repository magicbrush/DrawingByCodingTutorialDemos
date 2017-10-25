// 函数setup() ：准备阶段
function setup() {
	createCanvas(600,400);
}

// 函数draw()：作画阶段
function draw() {
	// --------- 画脸 --------------
	strokeWeight(1); // 线条粗细
	fill(255);// 填充白色
	ellipse(300,200,200,220); // 画圆形

	// --------- 画眼球 ------------
	// 变量： 用var声明一个变量，可自行取名
	// 一般在声明变量的时候就用赋值号“=”给予初始值
	// 如下：声明一个名字为faceX的变量，初始值为300
	var faceX = 300; 
	var faceY = 200;
	// 画两个椭圆，代表两个眼球
	ellipse(faceX-60,faceY,90,70);
	ellipse(faceX+60,faceY,90,70);

	// --------- 画眼珠 ------------
	fill(0); // 用黑色填充
	var msecs = millis(); // 获取毫秒数
	var secs = msecs/1000; // 秒数
	// 画了个整圆，角度范围是0~2PI(0~6.28)
	// arc()：画扇形 
	arc(faceX-60,faceY,60,60,0,secs); 
	arc(faceX+60,faceY,60,60,secs/10,secs/5);

	// -------- 画鼻子 ------------
	fill(255,0,0); // 填充红色（RGB为255,0,0)
	// 画三角形，参数为三个顶点坐标
	triangle(
		faceX,faceY+40,
		faceX-20,faceY-20,
		faceX+20,faceY-20);

	// --------- 画眉毛 -----------
	fill(0,0,0); // 填充绿色
	// 画矩形
	rect(faceX-110,faceY-70,90,30);
	rect(faceX+20,faceY-70,90,30);

	// ---------- 画尾巴 ----------
	var r=255,g=0,b=0;
	// 如果()中为true,则执行{}，
	// 并跳过后续所有else if和else分支
	// 否则，依次判断else if分支的()中的条件是否满足，
	// 若满足，则执行该分支，并跳到最后；
	if(mouseX<150) 
	{
		// 绿色
		r = 0;
		g = 255;
		b = 0;
	}
	else if(mouseX>=150 && mouseX<300)
	{
		// 蓝色
		r = 0;
		g = 0
		b = 255;
	}
	else if(mouseX>=300 && mouseX<450)
	{
		// 黄色
		r = 255;
		g = 255;
		b = 0;
	}
	else
	{
		// 紫色
		r = 255;
		g = 0;
		b = 255;
	}

	fill(r,g,b);

	// 画任意多边形
	// 在beginShape()和endShape()之间，
	// 用vertex()按顺序指定一系列点，连接成任意多边形
	// 要注意vertex()的顺序
	beginShape();
	vertex(faceX-40,faceY+90);
	vertex(faceX-80,faceY+160);
	vertex(faceX+80,faceY+160);
	vertex(faceX+40,faceY+90);
	endShape(CLOSE);

	// ---------- 画翅膀 ----------
	strokeWeight(5);
	/* 这种注释可以一次注释很多行 */
	/*  
	line(faceX-70,faceY+40,faceX-200,faceY+40);
	line(faceX-70,faceY+60,faceX-160,faceY+60);
	line(faceX-70,faceY+80,faceX-120,faceY+80);

	line(faceX+70,faceY+40,faceX+200,faceY+40);
	line(faceX+70,faceY+60,faceX+160,faceY+60);
	line(faceX+70,faceY+80,faceX+120,faceY+80);
	*/

	var i=5;
	// while 循环： 
	// step 1. 先判断()里是否成立(值为true)
	// step 2. 若成立，则执行{}，然后执行step 1; 
	// 			否则，跳过{};
	while(i>0)  // ()里的最终结果一定值布尔值，即true/false
	{
		// 运用i，算出线条的位置形态参数
		var xLeft = faceX-70;
		var xRight = faceX+70;
		var y = faceY+30 + i*10;
		var length = 100 - i*10;
		// 画出线条，起点(x,y),终点(x+length,y)
		line(xLeft,y,xLeft-length,y);
		line(xRight,y,xRight+length,y);
		// 让变量i减小1，
		//使得条件i>0在循环一定次数后变成不成立false
		i--; 
	}

	// for 循环更厉害，但初期理解难度大一些，
	// 自行查js语法，或看教程


	// 在鼠标位置画环形
	// 函数调用，要为参数指定”实际参数“，
	// 也就是说，在函数调用时，这个行为的变数必须要确定
	drawRing(mouseX,mouseY);

}

// 函数定义
// 用function 申明一个函数
// drawRing为这个函数的名称，
// 该名称可以自行任意设定，
// 但要注意不要和已有变量或函数重名
// ()中为函数的形式参数，表达了该函数执行中的可变情况
function drawRing(x,y)
{
	fill(0);
	ellipse(x,y,70,70);
	fill(255,0,0);
	ellipse(x,y,60,60);
}


