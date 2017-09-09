// 函数setup() : 准备阶段
function setup() {
	// 创建画布，宽度640像素，高度480像素
	// 画布的坐标系统为，左上角坐标为（0，0），
	// x方向水平向右，y方向垂直向下，单位像素
	createCanvas(640,480);
}

// 函数draw()：作画阶段
function draw() {
	// 定义两个变量，并对其赋值为当前鼠标坐标
	// 之后的所有语句都用这两个变量来设定绘制位置
	var centerX = mouseX;
	var centerY = mouseY;

	fill(255);// 填充白色
	// 1 画脸
	ellipse(centerX,centerY,200,200);// 圆圈
	
	// 2 左眼
	ellipse(centerX-40,centerY,50,50);// 另一个圆圈
	
	// 3 右眼
	ellipse(centerX+40,centerY,50,50); 
	
	// 4 嘴巴
	ellipse(centerX,centerY+60,80,40);
	
	fill(0);// 填充黑色	
	// 5 左眼珠
	ellipse(centerX-40,centerY,20,20);
	
	// 6 右眼珠
	ellipse(centerX+40,centerY,20,20);
	
	// 7 头发：从左到右画一排竖线
	line(centerX-60,centerY-60,centerX-60,centerY-140);
	line(centerX-40,centerY-60,centerX-40,centerY-140);
	line(centerX-20,centerY-60,centerX-20,centerY-140);
	line(centerX   ,centerY-60,centerX   ,centerY-140);
	line(centerX+20,centerY-60,centerX+20,centerY-140);
	line(centerX+40,centerY-60,centerX+40,centerY-140);
	line(centerX+60,centerY-60,centerX+60,centerY-140);
}