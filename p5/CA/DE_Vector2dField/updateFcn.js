
function updateParticles()
{
	var xGap = getXGap();
	var yGap = getYGap();
	//print("particle count:" + Partiles.length);
	var len = Partiles.length;
	//print("length:" + len);
	for(var k=0;k<len;k++)
	{
		var pt = Partiles[k];
		var ptSize = PtSizes[k];
		var i = floor(pt.x/xGap);
		var j = floor(pt.y/yGap);
		//print("i: " + i + " j:"+j + " pt: "+ pt);
		i = i%colNum;
		j = j%rowNum;
		pt = wrapParticle(pt);

		if(i>=0 && i<colNum && j>=0 && j<rowNum)
		{
			var vel = C[i][j];

			var move = p5.Vector.mult(vel,3.3);
			move.mult(1/ptSize);
			
			pt = p5.Vector.add(pt,move);
		}
		

		Partiles[k] = pt;
	}
}

function wrapParticle(pt)
{
	if(pt.x>=width)
	{
		pt.x -= width;
	}
	if(pt.x<0)
	{
		pt.x += width;
	}
	if(pt.y>=height)
	{
		pt.y -= height;
	}
	if(pt.y<0)
	{
		pt.y += height;
	}
	return pt;
}

function updateC2(dt)
{
	for(var i =0;i<colNum;i++)
	{
		for(var j=0;j<rowNum;j++)
		{
			//var dx = GetDX(i,j);
			//var dy = GetDY(i,j);

			v = C[i][j];
			var rotSpd = 18* dt;
			v.rotate(rotSpd*dt);

			Buffer[i][j] = v;
		}
	}
	CopyBuffer2C();
}

