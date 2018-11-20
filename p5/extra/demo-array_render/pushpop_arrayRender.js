var resX = 3;
var resY = 3;
var Values;


// 函数setup() : 准备阶段
function setup() {
	// 创建画布，宽度640像素，高度480像素
	// 画布的坐标系统为，左上角坐标为（0，0），
	// x方向水平向右，y方向垂直向下，单位像素
	createCanvas(500,500);
	InitValueArray();
	initValues();
}

// 函数draw()：作画阶段
function draw() {	
	fill(255,1);
	rect(0,0,width,height);

	var secs = millis()/1000;
	
	//RenderValues_0();
	//RenderValues_1();
	RenderValues_2();
}




