// 函数setup() : 准备阶段
function setup() {
	// 创建画布，宽度640像素，高度480像素
	// 画布的坐标系统为，左上角坐标为（0，0），
	// x方向水平向右，y方向垂直向下，单位像素
	createCanvas(640,480);
}

// 函数draw()：作画阶段
function draw() {
	fill(255);// 填充白色
	// 1 画脸
	ellipse(mouseX,mouseY,200,200);// 圆圈
	
	// 2 左眼
	ellipse(mouseX-40,mouseY,50,50);// 另一个圆圈
	
	// 3 右眼
	ellipse(mouseX+40,mouseY,50,50); 
	
	// 4 嘴巴
	ellipse(mouseX,mouseY+60,80,40);
	
	fill(0);// 填充黑色	
	// 5 左眼珠
	ellipse(mouseX-40,mouseY,20,20);
	
	// 6 右眼珠
	ellipse(mouseX+40,mouseY,20,20);
	
	// 7 头发：从左到右画一排竖线
	line(mouseX-60,mouseY-60,mouseX-60,mouseY-140);
	line(mouseX-40,mouseY-60,mouseX-40,mouseY-140);
	line(mouseX-20,mouseY-60,mouseX-20,mouseY-140);
	line(mouseX   ,mouseY-60,mouseX   ,mouseY-140);
	line(mouseX+20,mouseY-60,mouseX+20,mouseY-140);
	line(mouseX+40,mouseY-60,mouseX+40,mouseY-140);
	line(mouseX+60,mouseY-60,mouseX+60,mouseY-140);
}