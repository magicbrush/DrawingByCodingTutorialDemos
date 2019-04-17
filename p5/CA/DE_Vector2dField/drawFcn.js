

function drawParticles()
{
	//print("Partiles.length:" + Partiles.length);
	for(var i=0;i<Partiles.length;i++)
	{
		v = Partiles[i];
		ptSize = PtSizes[i];
		fill(0);
		strokeWeight(1.0);
		stroke(0);
		ellipse(v.x,v.y,3*ptSize,3*ptSize);
	}
}



function drawField()
{
	var xGap = getXGap();
	var yGap = getYGap();
	for(var i =0;i<colNum;i++)
	{
		for(var j=0;j<rowNum;j++)
		{
			var v = C[i][j];
			var length = v.mag(); // 长度
			var theta = v.heading(); // 角度
			
			push();
			translate(xGap*i+xGap/2,yGap*j+yGap/2);
			scale(xGap*0.4,yGap*0.4);
			scale(length,length);
			rotate(theta);
			stroke(0,100);
			strokeWeight(0.2);
			fill(0,100);
			line(-1,0,1,0);
			triangle(0.8,-0.3,0.8,0.3,1.3,0);
			pop();
		}
	}
}

