// 函数setup() : 准备阶段
function setup() {
	// 创建画布，宽度640像素，高度480像素
	// 画布的坐标系统为，左上角坐标为（0，0），
	// x方向水平向右，y方向垂直向下，单位像素
	createCanvas(500,500);
}

// 函数draw()：作画阶段
function draw() {	
	
	for(var i =0;i<10;i++)
	{
		var x = i*18;
		var y = i*25;
		var wd = 100-10*i;
		var ht = 10+15*i;
		ellipse(x,y,wd,ht);
	}

}
