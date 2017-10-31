var paintingWidth = 500;
var paintingHeight = 300;
var uiWidth = 200;

var circles = new Array(); // 笔迹
var brushStroke; // 选择默认笔刷
var brushId = 0;

function setup() {
	var wd = paintingWidth + uiWidth;
	var ht = paintingHeight;
	createCanvas(wd,ht);
	brushStroke = brushes[brushId];
}

function draw() {
	// draw ui canvas
	push();
	noStroke();
	fill(180);
	rect(paintingWidth,0,width-paintingWidth,paintingHeight);
	pop();

	// display infomation
	push();
	textSize(12);
	text("up/down: select brush",paintingWidth+5,height-10);
	text("c: clear canvas",paintingWidth+5,height-30);
	text("brush:" + brushId, paintingWidth+5,10);
	pop();
	
	// draw painting frame
	push();
	noStroke();
	fill(255,7);
	rect(0,0,paintingWidth,paintingHeight);
	pop();
	push();
	stroke(0);
	strokeWeight(2);
	noFill();
	rect(0,0,paintingWidth,paintingHeight);
	pop();
	
	// draw painting contents: strokes
	for(var i=0;i<circles.length;i++)
	{
		var c = circles[i];
		if(c.draw)
		{
			c.draw();
		}
	}
	

}

// *************** 辅助 ***************//
function mouseInPaintingRect()
{
	var inside = 
		mouseX>=0 && mouseX<=paintingWidth && 
		mouseY>=0 && mouseY<=paintingHeight;
	return inside;
}

// *************** 鼠标、触控交互 ***************//
function mouseMoved()
{
	if(!mouseIsPressed)
	{
		for(var i=0;i<circles.length;i++)
		{
			//print("c.pointerMove(mouseX,mouseY)");
			var c = circles[i];
			if(c.pointerMove)
			{
				c.pointerMove(mouseX,mouseY);
			}
		}
	}
}

function mousePressed()
{
	//print("mousePressed:" + millis());
	if(mouseInPaintingRect())
	{
		brushStroke();
	}
	
}

function mouseDragged()
{
	//print("mouseDragged:" + millis());	
	if(mouseInPaintingRect())
	{
		brushStroke();
	}
}


function mouseReleased()
{
	//print("mouseReleased:" + millis());
}

function mouseClicked()
{
	//print("mouseClicked:" + millis());
}

function doubleClicked()
{
	//print("doubleClicked:" + millis());
}

function touchStarted()
{
	//print("TouchStarted:" + millis());
}


function touchEnded()
{
	//print("touchEnded:" + millis());
}

function touchMoved()
{
	//print("touchMoved:" + millis());
}

// *************** 用键盘进行设置 ***************//
// 用0~9按键选择笔刷
// 用按键c清除画布
// 用按键s,l保存和读取(待实现)
var pressKey;
var pressKeyCode;

function keyPressed()
{
	pressKey = key;
	pressKeyCode = keyCode;
}


function keyReleased()
{
	
	if(pressKey=='S')
	{
		//print("Save(S)");
		//saveAsJson(circles);
	}
	else if(pressKey=="L")
	{
		//print("Load(L)");
		//loadFromJson("./save/circles.json");
	}
	else if(pressKey=="C")
	{
		circles = new Array();
	}

	if(pressKeyCode == UP_ARROW)
	{
		brushId ++;
		PickBrushById();
	}
	else if(pressKeyCode == DOWN_ARROW)
	{
		brushId --;
		PickBrushById();
	}

	print("key:" + key + " keyCode:" + keyCode);
}

function PickBrushById()
{
	if(brushId>=brushes.length)
	{
		brushId=0;
	}
	else if(brushId<0)
	{
		brushId = brushes.length-1
	}
	brushStroke = brushes[brushId];
}



