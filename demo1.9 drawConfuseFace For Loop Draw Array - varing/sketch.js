// 函数setup() : 准备阶段
function setup() {
	// 创建画布，宽度640像素，高度480像素
	// 画布的坐标系统为，左上角坐标为（0，0），
	// x方向水平向右，y方向垂直向下，单位像素
	createCanvas(600,400);
}

// 函数draw()：作画阶段
function draw() {
	// 	用变量col和row作为循环变量
	for(var col=0;col<8;col++) // 画8列
	{
		for(var row =0;row<6;row++) // 画6行
		{
			var x = col*70; // x坐标为i的70倍，即X方向间隔为70像素
			var y = row*60; // y坐标为i的60倍，即Y方向间隔为60像素
			// 运用循环变量col和row计算五官尺寸
			var faceSize = 40 + col*2 + row*2;
			var mouthScale = 0.5 - (col * 0.03 + row * 0.03);
			var lEyeScale = col * 0.02 + row * 0.01;
			var rEyeScale = row * 0.01 + row * 0.02;
			// 绘制懵逼脸
			drawConfuseFace(
				x,y,
				faceSize,
				mouthScale,
				lEyeScale,
				rEyeScale); 
		}		
	}	
}

// 画懵逼脸
function drawConfuseFace(
	posX, posY,  // 脸部中心位置
	faceSize,  // 脸部尺寸
	scaleMouth,  // 嘴巴尺度比例，相对于脸部尺寸
	scaleLEye,  // 左眼尺度比例， 相对于脸部尺寸
	scaleREye) // 右眼尺度比例， 相对于脸部尺寸
{
	//  -------------- 1 画脸 --------------- 
	fill(255);// 填充白色
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