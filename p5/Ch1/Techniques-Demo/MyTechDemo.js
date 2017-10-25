// 函数setup() ：准备阶段
function setup() {
	createCanvas(640,480);
}

// 函数draw()：作画阶段
function draw() {
	fill(255);// 填充白色

	push();
	translate(mouseX,mouseY);
	rotate(0);
	scale(0.5,0.5);
	Tech0(mouseX,mouseY,100);

	pop();
}