// 函数setup() : 准备阶段
function setup() {
	// 创建画布，宽度640像素，高度480像素
	// 画布的坐标系统为，左上角坐标为（0，0），
	// x方向水平向右，y方向垂直向下，单位像素
	createCanvas(500,500);
}

// 函数draw()：作画阶段
function draw() {	
	fill(255,1);
	rect(0,0,width,height);

	var secs = millis()/1000;
	
	fill(255);
	var hGap = width/8;
	var vGap = height/8;
	for(var i=0;i<8;i++)
	{
		for(var j=0;j<8;j++)
		{
			var x = hGap * i;
			var y = vGap * j;
			var theta = (i+j)+secs;
			var wd = 60;
			var ht = 5 + wd * (i+j)/16;
			drawFace(x,y,theta,wd,ht);
		}
	}

}

function drawFace(x,y,theta,wd,ht)
{
	push();
	translate(x,y);
	rotate(theta);
	ellipse(0,0,wd,ht);
	pop();
}
