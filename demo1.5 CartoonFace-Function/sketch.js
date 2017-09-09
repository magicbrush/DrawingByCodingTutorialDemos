// 函数setup() : 准备阶段
function setup() {
	// 创建画布，宽度640像素，高度480像素
	// 画布的坐标系统为，左上角坐标为（0，0），
	// x方向水平向右，y方向垂直向下，单位像素
	createCanvas(640,480);
}

// 函数draw()：作画阶段
function draw() {
	// 在(200,140)位置画第一个脸
	drawConfuseFace(200,140);
	// 在(320,280)位置画第二个脸
	drawConfuseFace(320,280);
}

function drawConfuseFace(posX, posY)
{
	fill(255);// 填充白色
	// 1 画脸
	ellipse(posX,posY,200,200);// 圆圈
	
	// 2 左眼
	ellipse(posX-40,posY,50,50);// 另一个圆圈
	
	// 3 右眼
	ellipse(posX+40,posY,50,50); 
	
	// 4 嘴巴
	ellipse(posX,posY+60,80,40);
	
	fill(0);// 填充黑色	
	// 5 左眼珠
	ellipse(posX-40,posY,20,20);
	
	// 6 右眼珠
	ellipse(posX+40,posY,20,20);
	
	// 7 头发：从左到右画一排竖线
	line(posX-60,posY-60,posX-60,posY-140);
	line(posX-40,posY-60,posX-40,posY-140);
	line(posX-20,posY-60,posX-20,posY-140);
	line(posX   ,posY-60,posX   ,posY-140);
	line(posX+20,posY-60,posX+20,posY-140);
	line(posX+40,posY-60,posX+40,posY-140);
	line(posX+60,posY-60,posX+60,posY-140);
}