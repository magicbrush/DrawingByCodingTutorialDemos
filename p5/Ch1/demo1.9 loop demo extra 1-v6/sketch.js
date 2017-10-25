// 函数setup() : 准备阶段
function setup() {
	// 创建画布，宽度640像素，高度480像素
	// 画布的坐标系统为，左上角坐标为（0，0），
	// x方向水平向右，y方向垂直向下，单位像素
	createCanvas(500,500);
}

// 函数draw()：作画阶段
function draw() {	
	var msecs = millis();
	var secs = msecs/1000;
	var radius = 200;
	var cnt = 0;
	var factor = -1;
	while(radius >20)
	{
		var r,g,b;
		r = 125*sin(secs+1.234234*cnt) + 125;
		g = 125*cos(secs+1.112347*cnt) + 125;
		b = 125*sin(secs+1.323437*cnt) + 125;
		drawConfuseFaceRing(
			mouseX,mouseY,
			radius,
			24-cnt*3,
			0.4*secs*(1+cnt)*factor,
			r,g,b);

		// 每一次改变符号
		factor *= -1;

		// 改变radius的值，
		// 让循环有退出的情况
		radius *= 0.7;

		cnt ++;
		if(cnt>10000)
		{
			break;
		}
	}
	
}

function drawConfuseFaceRing(
	centerX, centerY, 
	radius, 
	count, 
	thetaOffset,
	r,g,b)
{
	var msecs = millis();
	var secs = msecs/1000;

	var theta = 0;
	var cnt = 0;
	var mouthFreq = 1;
	var blinkFreq = 100;
	while(theta<TWO_PI)
	{
		var x = sin(theta + thetaOffset) * radius;
		var y = cos(theta + thetaOffset) * radius;

		var faceSizeBase = radius*0.5;
		var faceSize = 
			0.67*faceSizeBase + 
			0.33* faceSizeBase * sin(theta * (cnt*5+1))
		var mouthScale = 0.15 * sin(theta*(cnt+10))+0.25;
		mouthScale += 0.3*sin(0.1*mouthFreq*secs);
		var eyeScale = 0.08 * cos(theta *(20-cnt)) + 0.12;
		eyeScale += 0.15 * cos(1*blinkFreq*secs);

		r += 50*sin(theta);
		g += 50*cos(theta+1.2342347);
		b += 50*sin(theta +0.7342347);

		drawConfuseFace(
			centerX+x,centerY+y,
			faceSize,
			mouthScale,
			eyeScale,
			eyeScale,
			r,g,b);

		theta += TWO_PI/count;	
		mouthFreq += 1;
		blinkFreq /= 1.5;
		// 预防死循环
		cnt ++;
		if(cnt>1000)
		{
			break;
		}
	}
}

// 画懵逼脸
function drawConfuseFace(
	posX, posY,  // 脸部中心位置
	faceSize,  // 脸部尺寸
	scaleMouth,  // 嘴巴尺度比例，相对于脸部尺寸
	scaleLEye,  // 左眼尺度比例， 相对于脸部尺寸
	scaleREye,
	r,g,b) // 右眼尺度比例， 相对于脸部尺寸
{
	//  -------------- 1 画脸 --------------- 
	fill(r,g,b);// 填充白色
	ellipse(posX,posY,faceSize,faceSize);// 圆圈
	
	//  -------------- 2 画眼睛 --------------- 
	// 2.1 计算眼睛相对于脸中心点的偏移量
	var EyeOffsetX = 0.2 * faceSize; // 眼睛横向偏移量为脸部尺寸的0.2倍
	var EyeOffsetY = 0 * faceSize; // 眼睛纵向偏移量为脸部尺寸的0倍

	// 2.2 计算眼睛尺寸
	// 左右眼尺寸
	var LEyeSize = faceSize * scaleLEye; 
	var REyeSize = faceSize * scaleREye;
	// 左右眼珠尺寸
	var LIrisSize = LEyeSize * 0.4;
	var RIrisSize = REyeSize * 0.4;
	
	// 2.2 画出左眼	
	fill(255);// 填充白色
	ellipse(
		posX-EyeOffsetX, // 脸的中心位置向左偏移EyeOffsetX
		posY+EyeOffsetY, // 脸的中心位置向下偏移EyeOffsetY
		LEyeSize,
		LEyeSize);
	
	// 2.3 画出右眼	
	fill(255);// 填充白色
	ellipse(
		posX+EyeOffsetX,
		posY+EyeOffsetY,
		REyeSize,
		REyeSize); 	
	
	// 5 左眼珠
	fill(0);// 填充黑色	
	ellipse(
		posX-EyeOffsetX, // 位置与左眼一样
		posY+EyeOffsetY,
		LIrisSize, // 尺寸则采用比左眼小的尺寸
		LIrisSize);
	
	// 6 右眼珠
	fill(0);// 填充黑色	
	ellipse(
		posX+EyeOffsetX,
		posY+EyeOffsetY,
		RIrisSize,
		RIrisSize);	
	
	//  -------------- 3 画嘴巴 ---------------
	// 3.1 计算嘴巴相对于脸部中心位置的偏移量
	var MouthOffsetX = 0.0;
	var MouthOffsetY = 0.3*faceSize;

	// 3.2 计算嘴巴尺寸
	var MouthWidth = faceSize * scaleMouth;
	var MouthHeight = MouthWidth/2.0;
	
	// 3.3 画出嘴巴
	fill(255); // 填充白色
	ellipse(
		posX + MouthOffsetX,
		posY + MouthOffsetY,
		MouthWidth,
		MouthHeight);	
	
	//  -------------- 4 画头发 --------------- 	
	var offsetX01 = -0.3;
	// while(bool Condition){}:
	// 当条件满足时，就执行{}内容，然后再判断()的条件
	var count = 0;
	while(offsetX01<0.4) 
	{
		drawOneHair(posX,posY,faceSize,offsetX01);
		// 警戒：必须要让while()括号中的条件会变成false
		offsetX01 += 0.1; // += 运算符用途：A+=B 等价于 A=A+B;

		if(count>99999)
		{
			break;
		}
		count ++;
	}	
}

// 绘制一根头发
function drawOneHair(
	faceX,faceY, // 脸的中心位置
	faceSize, // 脸的尺寸
	offsetXOnFaceSize) // 头发X坐标的的偏移量，以脸部尺寸为单位尺寸
{
	// ------------- 1 计算尺寸和位置 ---------//
	// 头发相对脸部中心的Y偏移量
	var HairOffsetY = faceSize * 0.3;	
	// 计算X偏移量
	var offsetX = offsetXOnFaceSize * faceSize;
	// 头发长度
	var HairLength = faceSize * 0.4;

	// --------------- 2 画头发 ---------------//
	line(
		faceX + offsetX,
		faceY - HairOffsetY,
		faceX + offsetX,
		faceY - (HairOffsetY + HairLength) );
}