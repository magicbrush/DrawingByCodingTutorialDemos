// 函数setup() ：准备阶段
function setup() {
	createCanvas(400,300);
}

// 函数draw()：作画阶段
function draw() {

	/*
	fill(0);// 设置颜色，后面的画图都会被影响
	ellipse(100,100,50,50);

	rect(200,200,50,80);
	*/

	// push() 和 pop() 将画笔属性/参考坐标限制在二者之间
	push(); 
	// 把画图的坐标系原点沿着自己的x,y方向分别移动200，150
	translate(mouseX,mouseY); 
	// 把画图的坐标轴 x缩放为0.6倍长度， y缩放到0.4倍长度
	rotate(5.0*millis()/1000);
	scale(0.8,0.4);
	fill(255);
	drawRing();
	//drawRipple();
	pop();
	
}

