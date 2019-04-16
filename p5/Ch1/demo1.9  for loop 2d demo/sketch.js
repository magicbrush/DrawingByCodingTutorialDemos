// 函数setup() : 准备阶段
function setup() {
	// 创建画布，宽度640像素，高度480像素
	// 画布的坐标系统为，左上角坐标为（0，0），
	// x方向水平向右，y方向垂直向下，单位像素
	createCanvas(500,500);
	rectMode(CENTER);
}

// 函数draw()：作画阶段
function draw() {	
	
	background(255);
	var tNow = millis()/1000;
	var i = 0;
	for(var i=0;i<4;i++)
	{
		for(var j=0;j<4;j++)
		{
			var x = i*100 + 50;
			var y = j*100 + 50;
			var wd = 100;
			var halfWd = wd/2;
			var sumij = i+j;
			var isOddValue = (sumij%2===1);
			if(isOddValue)
			{
				fill(0);
				wd += 20*pow(sin(tNow + (i+j)),1);
				//rect(x-halfWd,y-halfWd,wd,wd);
				rect(x,y,wd,wd);
			}
			else
			{
				//fill(255);
				//rect(x-halfWd,y-halfWd,wd,wd);
			}
		}
	}
	
}
