var C; // cells

var lastTime = 0;
var colNum = 32;
var rowNum = 32;
var gap = 10;

var timeInterval = 0.1;

// 函数setup() ：准备阶段
function setup() 
{
	createCanvas(480,480);
	rectMode(CENTER);
	
	C = new Array();
	lastTime = getTime();

	for(var i =0;i<colNum;i++)
	{
		C[i] = new Array();
		for(var j=0;j<rowNum;j++)
		{
			C[i][j] = 0;
			if(j==7)
			{
				C[i][j] = 1;
			}
			C[i][j] = random(0,1)>0.9?1:0;
		}
	}
}

// 函数draw()：作画阶段
function draw() {
	fill(255,255,255,255);
	rect(0,0,width,height);

	var tNow = getTime(); // 当前时刻
	var dt = tNow - lastTime; // 时差
	if(dt>timeInterval)
	{
		for(var i =0;i<colNum;i++)
		{
			for(var j=0;j<rowNum;j++)
			{
				var sum = 0;
				var iternum = 0
				for(var k=-1;k<=1;k++)
				{
					for(var l=-1;l<=1;l++)
					{
						var id0 = clampId((i+k),colNum);
						var id1 = clampId((j+l),rowNum);
					
						var value = C[id0][id1];
						sum += value;
						iternum ++;
					}
				}
				print("iterNum:" + iternum + " sum:"+sum);
				var valNow = C[i][j];
				var isAlive = (valNow===1);
				if(isAlive)
				{
					if(sum==1||sum>=4)
					{
						C[i][j] = 0;
					}
					//C[i][j] = 0;
				}
				else
				{
					if(sum==1)
					{
						C[i][j] = 1;
					}
					//C[i][j] = 1;
				}

			}
		}
		lastTime = tNow;
	}

	var xGap = width/colNum;
	var yGap = height/rowNum;
	for(var i =0;i<colNum;i++)
	{
		for(var j=0;j<rowNum;j++)
		{
			push();
			translate(xGap*i+xGap/2,yGap*j+yGap/2);
			scale(xGap*0.9,yGap*0.9);
			if(C[i][j]===1)
			{
				fill(0);
			}
			else
			{
				fill(255);
			}
			stroke(0);
			strokeWeight(0.05);
			rect(0,0,1,1); // 画圆形
			pop();
		}
	}

}

function clampId(id, maxId)
{
	if(id<0)
	{
		id= maxId-1;
	}
	else if(id>=maxId)
	{
		id = 0;
	}
	return id;
}

function getTime()
{
	return millis()/1000;
}
