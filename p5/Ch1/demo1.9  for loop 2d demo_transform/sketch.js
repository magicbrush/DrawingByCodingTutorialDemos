var cols = 32;
var rows = 16;
var valueArray = new Array();
//var valueArray2

// 函数setup() : 准备阶段
function setup() {
	// 创建画布，宽度640像素，高度480像素
	// 画布的坐标系统为，左上角坐标为（0，0），
	// x方向水平向右，y方向垂直向下，单位像素
	createCanvas(500,500);
	rectMode(CENTER);

	for(var i =0;i<cols;i++)
	{
		valueArray[i] = new Array();
		for(var j=0;j<rows;j++)
		{
			valueArray[i][j] = FcnOnIJ(i,j);
			/*
			valueArray[i][j] = new Array();
			valueArray[i][j][0] = 1;
			valueArray[i][j][1]= 2;
			*/
		}
	}

}




// 函数draw()：作画阶段
function draw() {	
	
	background(255);
	
	for(var i=0;i<cols;i++)
	{
		for(var j=0;j<rows;j++)
		{
			var F = valueArray[i][j];
			DisplayF2(i,j,F);
		}
	}

/*
	for(var i=0;i<cols;i++)
	{
		for(var j=0;j<rows;j++)
		{
			var F = valueArray[i][j];
			F += 0.001;
			if(F>1)
			{
				F -=1;
			}
			valueArray[i][j] = F;
		}
	}*/

	if(mouseIsPressed)
	{
		for(var i=0;i<cols;i++)
		{
			for(var j=0;j<rows;j++)
			{
				var F = valueArray[i][j];
				var wd = width/cols;
				var ht = height/rows;
				var halfWd = wd/2;
				var halfHt = ht/2;
				var x = i*wd + halfWd;
				var y = j*ht + halfHt;

				var dist = (x-mouseX)*(x-mouseX) + (y-mouseY)*(y-mouseY);
				if(dist <= 1000)
				{
					F += 0.01;
					if(F>1)
					{
						F -=1;
					}
					valueArray[i][j] = F;
				}
			}
		}
	}
	
	
}


function mouseRelease()
{

}

function mousePressed()
{
	
}

