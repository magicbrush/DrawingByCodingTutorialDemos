// 函数setup() : 准备阶段
function setup() {
	// 创建画布，宽度640像素，高度480像素
	// 画布的坐标系统为，左上角坐标为（0，0），
	// x方向水平向右，y方向垂直向下，单位像素
	createCanvas(640,480);
	colorMode(HSB, TWO_PI, 1, 1, 1);
}

// 函数draw()：作画阶段
var tPrev = -1.0;
function draw() {
	StoreEnergy();
	DrawAlongTrace();
}

function keyReleased()
{
	if(key==="A")
	{
		TurnTraceMode();
	}
	else if(key==="Q")
	{
		push();
		fill(255);
		rect(0,0,width,height);
		pop();
	}
}

function mousePressed()
{
	StrokeTrace.length = 0;
	drawStartId = 2;
	passedDist = 0;
	RecordNewPos(mouseX,mouseY);
	//print("mousePressed" + StrokeTrace.length);
}

function mouseDragged()
{
	RecordNewPos(mouseX,mouseY);
	var v = StrokeTrace[StrokeTrace.length-1];
	//print("mouseDragged" + 
	//	StrokeTrace.length + ":(" + v.x + "," + v.y + "," + v.z + ")");
}

function mouseReleased()
{
	RecordNewPos(mouseX,mouseY);
	//print("mouseReleased" + StrokeTrace.length);
	
}

var EnergyMax = 300;
var Energy = 50.0;
var EnergyStoreSpd = 200.0;
var EnergyExhaustSpd = 1.0;

function StoreEnergy()
{
	if(mouseIsPressed)
	{
		var tNow = millis()/1000;
		if(tPrev>0)
		{
			var dt = tNow-tPrev;
			var deltaEN = dt * EnergyStoreSpd;
			Energy += deltaEN;
			//print("Energy:" + Energy);
		}
		tPrev = tNow;
		//print("tPrev:" + tPrev);
	}
	else
	{
		tPrev = -1.0;
	}

	if(Energy>EnergyMax)
	{
		Energy = EnergyMax;
	}
}

function ExhaustEnergy(amount)
{
	Energy -= amount;
	if(Energy<0)
	{
		Energy=0;
	}
}

// ---------------  笔迹 --------------//
var drawStep = 5.123;
var drawStartId = 2;
var passedDist = 0;

function DrawAlongTrace()
{
	var strokeCnt = StrokeTrace.length;
	//print("strokeCnt:" + strokeCnt);

	if(StrokeTrace.length<6)
	{
		return;
	}

	var posEnd = StrokeTrace[StrokeTrace.length-1];
	var posEnd_1 = StrokeTrace[StrokeTrace.length-2];
	var totalLength = posEnd.z;
	var drawToLength = posEnd_1.z;
	/*print("stroke.Length:" + StrokeTrace.length + 
		" drawToLength:" + drawToLength + 
		" totalLength:" + totalLength);
	*/
	
	while(passedDist<drawToLength)
	{
		var ps = StrokeTrace[drawStartId-3]
		var p0 = StrokeTrace[drawStartId];
		var p1 = StrokeTrace[drawStartId+1];
		var l0 = p0.z;
		var l1 = p1.z;

		var overLength = passedDist - l1;
		while(overLength<0)
		{
			lt = passedDist - l0;
			var t = lt/(l1-l0);
			print();
			if(t>=0 && t<=1)
			{
				var drawPos = Vector.lerp(p0,p1,t);
				var velocityVector = 
					GetVelocityVector(drawStartId+1);
				var accelerationVector = 
					GetAccelerationVector(drawStartId+1);
				velocityVector.z = 0;
				drawStroke(
					drawPos,
					velocityVector,
					accelerationVector);
			}
			passedDist+= drawStep;
			
			overLength = passedDist - l1;
			/*print("passedDist:" + passedDist + 
				" totalLength:" + totalLength + 
				" overLength:" + overLength + 
				" t:" + t + " lt:" + lt);*/
		}
		drawStartId ++;
	}
}

function GetVelocityVector(id)
{
	if(id<5)
	{
		return new Vector(0,0,0);
	}
	else
	{
		var p0 = StrokeTrace[id-3];
		var p1 = StrokeTrace[id];
		var velocityVector = p1.subtract(p0);
		return velocityVector;
	}
}

function GetAccelerationVector(id)
{
	if(id<5)
	{
		return new Vector(0,0,0);
	}
	else
	{
		v0 = GetVelocityVector(id-2);
		v1 = GetVelocityVector(id);
		var accVector = v1.subtract(v0);
		return accVector;
	}
}

// --------------- 作画 --------------//
function drawStroke(pos, vel, acc)
{
	var scl = 0.45*pow(vel.length(),0.25);
	var rotAngle = atan2(vel.x,vel.y);
	var accLen = acc.length()/max(width,height);
	//print("a" + accLen);

	var Hue = rotAngle;
	var Sat = accLen*2;
	var Bright = vel.length()/200;

	push();
	noStroke();
	translate(pos.x,pos.y);
	rotate(1.57-rotAngle);
	
	var Alpha = Energy*0.01;
	var shrinkFactor = 0.95;
	for(var decree=0.3;decree>0.04;decree*=shrinkFactor)
	{
		scale(scl*shrinkFactor,scl*shrinkFactor);
		fill(Hue,Sat,Bright,Alpha);
		ellipse(0,0,30*accLen+10,20);
		Alpha *= decree;
	}
	pop();

	var deltaEnergy = Energy*0.1*EnergyExhaustSpd;
	ExhaustEnergy(deltaEnergy);
}





