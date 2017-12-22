var Grid = new Array();
var Grid2 = new Array();
var Grid3 = new Array();

// 函数setup() ：准备阶段
function setup() {
	createCanvas(400,400);
	InitGrids(0);
	colorMode(HSB,360,100,100,100);
}

function InitGrids(mode)
{
	Grid = new Array();
	Grid2 = new Array();
	Grid3 = new Array();
	if(mode===0)
	{
		for(var x = -1;x<1;x+=0.1)
		{
			Grid.length += 1;
			Grid2.length += 1;
			Grid3.length += 1;
			Grid[Grid.length-1] = new Array();
			Grid2[Grid2.length-1] = new Array();
			Grid3[Grid3.length-1] = new Array();
			for (var y=-1;y<1;y+=0.1)
			{
				Grid[Grid.length-1].length++;
				Grid2[Grid2.length-1].length++;
				Grid3[Grid2.length-1].length++;
				var len = Grid[Grid.length-1].length;
				Grid[Grid.length-1][len-1] = new Complex(x,y);
				Grid2[Grid2.length-1][len-1] = new Complex(x,y);
				Grid3[Grid3.length-1][len-1] = new Complex(x,y);
			}
		}
	}
	else if(mode===1)
	{
		for(var theta = 0;theta<TWO_PI;theta+= TWO_PI/36)
		{
			Grid.length += 1;
			Grid2.length += 1;
			Grid3.length += 1;
			Grid[Grid.length-1] = new Array();
			Grid2[Grid2.length-1] = new Array();
			Grid3[Grid3.length-1] = new Array();
			for (var r=0;r<1.5;r+=0.1)
			{
				var x = r * cos(theta);
				var y = r * sin(theta);
				Grid[Grid.length-1].length++;
				Grid2[Grid2.length-1].length++;
				Grid3[Grid2.length-1].length++;
				var len = Grid[Grid.length-1].length;
				Grid[Grid.length-1][len-1] = new Complex(x,y);
				Grid2[Grid2.length-1][len-1] = new Complex(x,y);
				Grid3[Grid3.length-1][len-1] = new Complex(x,y);
			}
		}
	}
	
}


var zooming = 1;
var scl = 50;

// 函数draw()：作画阶段
var lastTime = -1;
function draw() {
	background(255);
	push();
	strokeWeight(0.003);
	translate(width/2,height/2);
	scale(scl,scl);
	stroke(0);
	
	var lenX = Grid.length;
	for(var i = 0;i<lenX-1;i++)
	{
		var lenY = Grid[i].length;
		for(var j=0;j<lenY-1;j++)
		{
			var c00 = Grid[i][j];
			var c10 = Grid[i+1][j];
			var c01 = Grid[i][j+1];
			var c11 = Grid[i+1][j+1];
			
			line(c00.re,c00.im,c10.re,c10.im);
			line(c00.re,c00.im,c01.re,c01.im);
			line(c10.re,c10.im,c11.re,c11.im);
			line(c01.re,c01.im,c11.re,c11.im);

			fill(360*i/lenX,100*j/lenY,100,30);
			quad(
				c00.re,c00.im,
				c10.re,c10.im,
				c11.re,c11.im,
				c01.re,c01.im);
		}
	}
	pop();


	var lenX = Grid.length;
	for(var i = 0;i<lenX;i++)
	{
		var lenY = Grid[i].length;
		for(var j=0;j<lenY;j++)
		{
			var c = Grid[i][j];
			var c2 = Grid2[i][j];
			var x = c.re;
			var y = c.im;
			var x2 = c2.re;
			var y2 = c2.im;

			x = lerp(x,x2,0.05);
			y = lerp(y,y2,0.05);
			c.re = x;
			c.im = y;
			Grid[i][j] = c;
		}
	}
	

	scl *= zooming;
	if(scl<1)
	{
		scl = 1;
	}
	else if(scl>1000)
	{
		scl = 1000;
	}
}

function keyPressed()
{
	if(key==="Q")
	{
		applyOperator(0);
	}
	else if(key==="W")
	{
		applyOperator(1);
	}
	else if(key==="E")
	{
		applyOperator(2);
	}
	else if(key==="R")
	{
		applyOperator(3);
	}
	else if(key==="T")
	{
		applyOperator(4);
	}
	else if(key==="Y")
	{
		applyOperator(5);
	}
	else if(key==="U")
	{
		applyOperator(6);
	}
	else if(key==="I")
	{
		applyOperator(7);
	}
	else if(key==="O")
	{
		applyOperator(-1);
	}
	else if(key==="Z")
	{
		zooming = 1.005;
	}
	else if(key==="X")
	{
		zooming = 1/1.005;
	}
	else if(key==="C")
	{
		InitGrids(0);
	}
	else if(key==="V")
	{
		InitGrids(1);
	}
}
function keyReleased()
{
	zooming = 1;
}

function applyOperator(op)
{
	var lenX = Grid2.length;
	for(var i = 0;i<lenX;i++)
	{
		var lenY = Grid2[i].length;
		for(var j=0;j<lenY;j++)
		{
			var c = Grid2[i][j];
			if(op ===-1)
			{
				Grid2[i][j] = Grid3[i][j];
			}
			else if(op===0)
			{
				Grid2[i][j] = c.pow(2).add(c);
			}
			else if(op===1)
			{
				Grid2[i][j] = c.pow(0.5);
			}
			else if(op===2)
			{
				Grid2[i][j] = c.pow(2);
			}
			else if(op ===3)
			{
				Grid2[i][j] = c.sin();
			}
			else if(op ===4)
			{
				Grid2[i][j] = c.cos();
			}
			else if(op ===5)
			{
				Grid2[i][j] = c.tan();
			}
			else if(op ===6)
			{
				Grid2[i][j] = c.cot();
			}
			else if(op ===7)
			{
				Grid2[i][j] = c.inverse();
			}
		}
	}
	print("op" + op);
}



