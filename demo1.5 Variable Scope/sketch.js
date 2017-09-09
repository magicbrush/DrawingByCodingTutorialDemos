// 函数setup() : 准备阶段
function setup() {
	createCanvas(640,GlobalVar*12);
}

var GlobalVar = 40;

// 函数draw()：作画阶段
function draw() {

	var LocalX = 300;

	var LocalY = 200;

	ellipse(LocalX,LocalY,GlobalVar,GlobalVar);

	var Size2 = 80;

	ellipse(100,100,Size2,Size2);	

}