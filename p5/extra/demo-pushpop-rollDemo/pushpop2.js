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
	rect(0,0,width,height);

	var secs = millis()/1000;
	
	push();
	translate(width/2,height/2);
	var count = 300;
	for(var i =0;i<count;i++)
	{
		rotate(2.0*PI/count);
		var phase = 0.1*i;
		var x0 = sin(secs+phase)*80+120;
		var x1 = sin(0.1*i*secs+1+phase)*80+120;
		line(x0,0, x1, 0);
	}
	pop();

}


