
// 路径记录方式：按时间/按位移量
var TraceMode = "Distance";
// 位置坐标记录为x,y值，时间/位移量将会记录为z值
var StrokeTrace = new Array();


// 切换记录方式
function TurnTraceMode()
{
	if(TraceMode==="Time")
	{
		TraceMode = "Distance";
	}
	else if(TraceMode==="Distance")
	{
		TraceMode = "Time";
	}
	StrokeTrace.length = 0;
}

// 记录新位置
function RecordNewPos(x,y)
{
	var z = millis()/1000;
	var pos = new Vector(x,y,z);
	var bNewPos = true;
	if(TraceMode === "Distance")
	{
		if(StrokeTrace.length==0)
		{
			pos.z = 0;
		}
		else if(StrokeTrace.length>0)
		{
			var posPrev = StrokeTrace[StrokeTrace.length-1];
			var posNow = pos;
			var moveMent = posNow.subtract(posPrev);
			moveMent.z = 0;
			var deltaDist = moveMent.length();
			if(deltaDist<=0.000001)
			{
				bNewPos = false;
			}
			//print("deltaDist:" + deltaDist)
			pos.z = posPrev.z + deltaDist;
		}
	}

	if(bNewPos)
	{
		StrokeTrace.length += 1;
		StrokeTrace[StrokeTrace.length-1] = pos;
		//print("z:" + pos.z);
	}
	
}