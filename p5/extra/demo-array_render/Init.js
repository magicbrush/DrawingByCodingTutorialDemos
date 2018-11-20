function InitValueArray()
{
	Values = new Array(resX);
	for(var i=0;i<resX;i++)
	{
	   	Values[i] = new Array(resY);
	}
}

function initValues()
{
	for(var i=0;i<resX;i++)
	{
	   	for(var j=0;j<resY;j++)
	   	{
	   		Values[i][j] = i+j;
	   	}
	}
}