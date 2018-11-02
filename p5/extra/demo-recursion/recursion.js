// 函数setup() : 准备阶段
function setup() {
	// 创建画布，宽度640像素，高度480像素
	// 画布的坐标系统为，左上角坐标为（0，0），
	// x方向水平向右，y方向垂直向下，单位像素
	createCanvas(500,500);
}

// 函数draw()：作画阶段
function draw() {	
	
	fill(255);
	push();
	translate(mouseX,mouseY);
	drawRings(250);
	translate(0,100);
	drawRings(120);
	pop();
	
}

function drawRings(radius)
{
	if(radius<5)
	{
		return;
	}
	else
	{
		ellipse(0,0,radius,radius);
		drawRings(radius*0.8);
	}
}
