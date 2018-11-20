function RenderValues_0()
{
	fill(255);
	var hGap = width/resX;
	var vGap = height/resY;
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var val = Values[i][j];
			var x = hGap * i + hGap/2;
			var y = vGap * j + vGap/2;
			var theta = 0
			var wd = 20+val*18;
			var ht = 20+val*18;
			drawFace(x,y,theta,wd,ht);
		}
	}
}

function RenderValues_1()
{
	fill(255);
	var hGap = width/resX;
	var vGap = height/resY;
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var x = hGap * i + hGap/2;
			var y = vGap * j + vGap/2;
			RenderOneValue_tilt_ellipse(x,y,Values[i][j]);
		}
	}
}

function RenderValues_2()
{
	fill(255);
	var hGap = width/resX;
	var vGap = height/resY;
	for(var i=0;i<resX;i++)
	{
		for(var j=0;j<resY;j++)
		{
			var val = Values[i][j];
			var x = hGap * i + hGap/2;
			var y = vGap * j + vGap/2;
			var theta = 0;
			var wd = 100;
			var ht = 30 + val*20;
			fill(val*35,val*25,255-val*23);
			drawFace(x,y,theta,wd,ht);
		}
	}
}

function RenderOneValue_tilt_ellipse(x,y,value)
{
	var theta = value/3.14;
	var wd = 30;
	var ht = 100;
	drawFace(x,y,theta,wd,ht);
}

function RenderValues_Text(x,y,value)
{

}