var C; // cells
var Buffer;

var lastTime = 0;
var colNum = 32;
var rowNum = 32;
var gap = 10;

var timeInterval = 0.05;
var bRunning = true;

// 函数setup() ：准备阶段
function setup() 
{
	createCanvas(480,480);
	rectMode(CENTER);
	
	C = new Array();
	Buffer = new Array();
	lastTime = getTime();

	for(var i =0;i<colNum;i++)
	{
		C[i] = new Array();
		Buffer[i] = new Array();
		for(var j=0;j<rowNum;j++)
		{
			//C[i][j] = random(0,1)>0.95?1:0;
			//C[i][j] = 0;
			C[i][j] = random(0,1);
			/*
			if(j==14||i==12||j==17||i==18)
			{
				C[i][j] = 1;
			}
			*/
			
			/*
			(j==15)
			{
				C[i][j] = 1;
			}*/
			//C[i][j] = random(0,1)>0.8?1:0;
			Buffer[i][j] = C[i][j];
		}
	}	
	
	
}

function mousePressed()
{
	var i = (mouseX)/(width/colNum);
	var j = (mouseY)/(height/rowNum);
	if(i<colNum&&j<rowNum)
	{
		i = floor(i);
		j = floor(j);
		print("i:" + i+ " j:"+j);
		C[i][j] = (C[i][j]===0)?1:0;
		Buffer[i][j]= C[i][j];
	}
	print("mousePressed");
}

// 函数draw()：作画阶段
function draw() {
	fill(255,255,255,255);
	rect(0,0,2*width,2*height);

	// 画出整个『场』C
	drawField();

	if(!bRunning)
	{
		return;
	}

	// update C： 更新整个场
	var tNow = getTime(); // 当前时刻
	var dt = tNow - lastTime; // 时差
	if(dt>timeInterval)
	{
		//updateC();
		updateC2(dt);
		lastTie = tNow;
	}

}


function updateC()
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
				//print(" iterNum:" + iternum + " sum:"+ sum);
				
				//print("Haha  " + "CID1: " + CID1 + " CID0:" + CID0);
				//C[CID1][i][j] = C[CID0][i][j];

			var valNow = C[i][j];
			var isAlive = (valNow==1);
			Buffer[i][j] = C[i][j];
			if(isAlive)
			{
				if(sum<=1||sum>4)
				{
					Buffer[i][j] = 0;
				}
			}
			else
			{
				if(sum===3)
				{
					Buffer[i][j] = 1;
				}
			}

		}
	}

	CopyBuffer2C();
}

function updateC()
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
				//print(" iterNum:" + iternum + " sum:"+ sum);
				
				//print("Haha  " + "CID1: " + CID1 + " CID0:" + CID0);
				//C[CID1][i][j] = C[CID0][i][j];

			var valNow = C[i][j];
			var isAlive = (valNow==1);
			Buffer[i][j] = C[i][j];
			if(isAlive)
			{
				if(sum<=1||sum>4)
				{
					Buffer[i][j] = 0;
				}
			}
			else
			{
				if(sum===3)
				{
					Buffer[i][j] = 1;
				}
			}

		}
	}

	CopyBuffer2C();
}



function updateC2(dt)
{
	var a = 0.005;
	var b = -0.001;
	for(var i =0;i<colNum;i++)
	{
		for(var j=0;j<rowNum;j++)
		{
			var dx = GetDX(i,j);
			var dy = GetDY(i,j);
			Buffer[i][j] = 
				C[i][j] + 
				(a*dx + b*dy)*dt;
		}
	}
	CopyBuffer2C();
}

function drawField()
{
	var xGap = width/colNum;
	var yGap = height/rowNum;
	for(var i =0;i<colNum;i++)
	{
		for(var j=0;j<rowNum;j++)
		{
			push();
			translate(xGap*i+xGap/2,yGap*j+yGap/2);
			scale(xGap*0.9,yGap*0.9);
			var fillValue = map(C[i][j],0,1,255,0);
			fill(fillValue);
			stroke(0);
			strokeWeight(0.05);
			rect(0,0,1,1); // 画圆形
			pop();
		}
	}
}


function GetDX(i,j)
{
	var iPrev = i-1;
	var iNext = i+1;
	if(i==0)
	{
		iPrev = colNum-1;
	}
	else if(i==colNum-1)
	{
		iNext = 0;
	}
	var cNext = C[iNext][j];
	var cPrev = C[iPrev][j];
	var dx = cNext-cPrev;
	return dx;
}

function GetDY(i,j)
{
	var jPrev = j-1;
	var jNext = j+1;
	if(j==0)
	{
		jPrev = rowNum-1;
	}
	else if(j==rowNum-1)
	{
		jNext = 0;
	}
	var cNext = C[i][jNext];
	var cPrev = C[i][jPrev];
	var dy = cNext-cPrev;
	return dy;
}

function CopyBuffer2C()
{
	// copy buffer to C
	for(var i =0;i<colNum;i++)
	{
		for(var j=0;j<rowNum;j++)
		{
			C[i][j] = Buffer[i][j];
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
