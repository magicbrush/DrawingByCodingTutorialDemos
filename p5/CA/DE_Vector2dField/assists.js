
function getXGap()
{
	return width/colNum;
}

function getYGap()
{
	return height/rowNum;
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

function getTime()
{
	return millis()/1000;
}