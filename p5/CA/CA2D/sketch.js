var C; // cells

var lastTime = 0;
var colNum = 15;
var rowNum = 15;
var gap = 20;

var timeInterval = 1.0;

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
		}
	}
}

// 函数draw()：作画阶段
function draw() {
	fill(255,1);
	rect(0,0,width,height);

	var tNow = getTime(); // 当前时刻
	var dt = tNow - lastTime; // 时差
	if(dt>timeInterval)
	{
		for(var i =0;i<colNum;i++)
		{
			for(var j=0;j<rowNum;j++)
			{
				C[i][j] = random(0,1)>0.5?0:1;
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
				fill(255);
			}
			else
			{
				fill(0);
			}
			stroke(0);
			strokeWeight(0.05);
			rect(0,0,1,1); // 画圆形
			pop();
		}
	}

}


function getTime()
{
	return millis()/1000;
}
