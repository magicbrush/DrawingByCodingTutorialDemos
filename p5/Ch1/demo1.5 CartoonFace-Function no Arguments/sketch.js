// 函数setup() : 准备阶段
function setup() {
	// 创建画布，宽度640像素，高度480像素
	// 画布的坐标系统为，左上角坐标为（0，0），
	// x方向水平向右，y方向垂直向下，单位像素
	createCanvas(640,480);
}

// 函数draw()：作画阶段
function draw() {
	// 调用20遍，希望能画20个脸
	drawConfuseFace();
	drawConfuseFace();
	drawConfuseFace();
	drawConfuseFace();
	drawConfuseFace();
	drawConfuseFace();
	drawConfuseFace();
	drawConfuseFace();
	drawConfuseFace();
	drawConfuseFace();
	drawConfuseFace();
	drawConfuseFace();
	drawConfuseFace();
	drawConfuseFace();
	drawConfuseFace();
	drawConfuseFace();
	drawConfuseFace();
	drawConfuseFace();
	drawConfuseFace();
	drawConfuseFace();
}

// 自定函数：画懵逼脸
function drawConfuseFace() {
	fill(255);// 填充白色
	// 1 画脸
	ellipse(320,240,200,200);// 圆圈
	
	// 2 左眼
	ellipse(280,240,50,50);// 另一个圆圈
	
	// 3 右眼
	ellipse(360,240,50,50); 
	
	// 4 嘴巴
	ellipse(320,300,80,40);
	
	fill(0);// 填充黑色	
	// 5 左眼珠
	ellipse(280,240,20,20);
	
	// 6 右眼珠
	ellipse(360,240,20,20);
	
	// 7 头发：从左到右画一排竖线
	line(260,180,260,100);
	line(280,180,280,100);
	line(300,180,300,100);
	line(320,180,320,100);
	line(340,180,340,100);
	line(360,180,360,100);
	line(380,180,380,100);
}