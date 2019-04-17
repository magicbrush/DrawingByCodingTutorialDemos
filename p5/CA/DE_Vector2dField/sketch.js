var C; // cells
var Buffer;

var Partiles; // particles
var PtSizes; // particle size

var lastTime = 0;
var colNum = 32;
var rowNum = 32;
var gap = 10;

var timeInterval = 0.05;

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
			/*
			var radius = 1;
			var theta = 0.03*(i*j+10);
			var x = radius * cos(theta);
			var y = radius * sin(theta);
			*/

			var x = sin(0.3*i);
			var y = cos(0.4*j);
			var v = createVector(x,y);
			v.rotate(PI/2);
			C[i][j] = createVector(v.x,v.y);
			Buffer[i][j] = C[i][j];
		}
	}		

	Partiles = new Array();
	PtSizes = new Array();
	for(var i = 0;i<500;i++)
	{
		Partiles[i] = createVector(
			random(0,width),random(0,height));
		PtSizes[i] = random(1,5);
	}
}

// 函数draw()：作画阶段
function draw() {
	fill(255,255,255,1);
	rect(0,0,2*width,2*height);

	// 画出整个『场』C
	//drawField();
	drawParticles();

	// update C： 更新整个场
	var tNow = getTime(); // 当前时刻
	var dt = tNow - lastTime; // 时差
	if(dt>timeInterval)
	{
		//updateC();
		updateC2(dt);
		updateParticles();
		
		lastTime = tNow;
	}

}


