var cols = 16;
var rows = 16;
var valueArray = new Array();

// 函数setup() : 准备阶段
function setup() {
	// 创建画布，宽度640像素，高度480像素
	// 画布的坐标系统为，左上角坐标为（0，0），
	// x方向水平向右，y方向垂直向下，单位像素
	createCanvas(500,500);
	rectMode(CENTER);

	for(var i =0;i<cols;i++)
	{
		valueArray[i] = new Array();
		for(var j=0;j<rows;j++)
		{
			value[i][j] = random(0,1);
		}
	}

}



// 函数draw()：作画阶段
function draw() {	
	
	background(255);
	
	var i = 0;
	for(var i=0;i<cols;i++)
	{
		for(var j=0;j<rows;j++)
		{
			//var F = FcnOnIJ4(i,j);
			var F = array[i][j];
			DisplayF_4(i,j,F);
		}
	}
	
}

function GetTimeNow()
{
	var tNow = millis()/1000;
	return tNow;
}


function FcnOnIJ(i,j)
{
	return i+j;
}

function FcnOnIJ2(i,j)
{
	return i;
}

function FcnOnIJ3(i,j)
{
	return (i+j)*(i+j);
}

function FcnOnIJ4(i,j)
{
	return i*i - j*j + 2*i*j;
}

function DisplayF(i,j,F)
{
	var x = i*100 + 50;
	var y = j*100 + 50;
	var wd = 100;
	var halfWd = wd/2;
	var isOddValue = (F%2===1);
	if(isOddValue)
	{
		fill(0);
		wd += 20*pow(sin(GetTimeNow() + F),1);
		rect(x,y,wd,wd);
	}
			
}


function DisplayF(i,j,F)
{
	colWd = width/cols ;
	rowWd = height/rows;
	var x = i*colWd + colWd/2;
	var y = j*rowWd + rowWd/2;
	var wd = colWd;
	var halfWd = wd/2;
	var isOddValue = (F%2===1);
	if(isOddValue)
	{
		fill(0);
		wd += 20*pow(sin(GetTimeNow() + F),1);
		rect(x,y,wd,wd);
	}		
}

function DisplayF_2(i,j,F)
{
	colWd = width/cols ;
	rowWd = height/rows;
	var x = i*colWd + colWd/2;
	var y = j*rowWd + rowWd/2;
	var wd = rowWd;
	var halfWd = wd/2;
	var isOddValue = (F%2===1);
	var tNow = GetTimeNow();
	if(isOddValue)
	{
		fill(0);
		wd += 10*pow(sin(tNow + F),1);
		theta = F + tNow;
		push();
		translate(x,y);
		rotate(theta);
		rect(0,0,wd,wd);
		pop();
	}		
}

function DisplayF_3(i,j,F)
{
	colWd = width/cols ;
	rowWd = height/rows;
	var x = i*colWd + colWd/2;
	var y = j*rowWd + rowWd/2;
	var wd = rowWd;
	var halfWd = wd/2;
	var isOddValue = (F%2===1);
	var tNow = GetTimeNow();
	if(isOddValue)
	{
		fill(0);
		wd += 10*pow(sin(tNow + F),1);
		theta = 0.1*F*tNow;
		push();
		translate(x,y);
		rotate(theta);
		rect(0,0,wd,wd);
		pop();
	}		
}

function DisplayF_4(i,j,F)
{
	colWd = width/cols ;
	rowWd = height/rows;
	var x = i*colWd + colWd/2;
	var y = j*rowWd + rowWd/2;
	var wd = rowWd;
	var halfWd = wd/2;
	var isOddValue = (F%3===1);
	var tNow = GetTimeNow();
	if(isOddValue)
	{
		fill(0);
		wd += 10*pow(sin(tNow + F),1);
		theta = 0.1*F*tNow;
		push();
		translate(x,y);
		rotate(theta);
		rect(0,0,wd,wd);
		pop();
	}		
}