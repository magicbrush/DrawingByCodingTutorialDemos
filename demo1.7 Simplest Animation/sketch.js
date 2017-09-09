function setup() {	
	createCanvas(640,480);
}

function draw() {	
	// 调用函数second()，获得程序运行经过的秒数
	var s = second();

	// 在屏幕中心画圆圈，长宽等于秒数
	ellipse(320,240,s,s);
}
