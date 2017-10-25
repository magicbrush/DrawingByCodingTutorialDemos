/* 降龙十八描 */

function drawRing()
{
	ellipse(0,0,100,100);
	ellipse(0,0,80,80);
}

function drawRectRing(x,y,size)
{
	rect(x-size/2,y-size/2,size,size);
	var size2 = size*0.7;
	rect(x-size2/2,y-size2/2,size2,size2);
}

function drawRipple()
{
	var Size = 300;
	fill(0);
	ellipse(0,0,Size,Size);
	Size = Size *0.9;
	fill(255);
	ellipse(0,0,Size,Size);
	Size = Size * 0.9;
	fill(0);
	ellipse(0,0,Size,Size);
	Size = Size * 0.9;
	fill(255);
	ellipse(0,0,Size,Size);
	Size = Size * 0.9;
	fill(0);
	ellipse(0,0,Size,Size);
	Size = Size * 0.9;
	fill(255);
	ellipse(0,0,Size,Size);
	Size = Size * 0.9;
	fill(0);
	ellipse(0,0,Size,Size);
	Size = Size * 0.9;
	fill(255);
	ellipse(0,0,Size,Size);
	Size = Size * 0.9;
	fill(0);
	ellipse(0,0,Size,Size);
	Size = Size * 0.9;
	fill(255);
	ellipse(0,0,Size,Size);
	Size = Size * 0.9;
	fill(0);
	ellipse(0,0,Size,Size);
	Size = Size * 0.9;
	fill(255);
	ellipse(0,0,Size,Size);
	Size = Size * 0.9;
	fill(0);
	ellipse(0,0,Size,Size);
	Size = Size * 0.9;
	fill(255);
	ellipse(0,0,Size,Size);
	Size = Size * 0.9;
	fill(0);
	ellipse(0,0,Size,Size);
	Size = Size * 0.9;
	fill(255);
	ellipse(0,0,Size,Size);
	Size = Size * 0.9;

}
