
var v1;
var v2;

// 函数setup() ：准备阶段
function setup() 
{
	createCanvas(480,480);
	rectMode(CENTER);
	//center = createVector(width/2,height/2);
	v1 = createVector(width/4,-height/4);
	v2 = createVector(-width*0.33,-height*0.2);
}

// 函数draw()：作画阶段
function draw() {
	fill(255,255,255,255);
	rect(0,0,2*width,2*height);

	var mousePos = createVector(
		mouseX-width/2,mouseY-height/2);
	var origin = createVector(0,0);
	push();
	translate(width/2,height/2);
	drawVector(origin,mousePos,color(0,0,0),1);
	drawVector(origin,v1,color(255,0,0),2);
	drawVector(origin,v2,color(0,255,0),2);
	pop();

	var v1n = v1.copy();
	var v2n = v2.copy();
	v1n.normalize();
	v2n.normalize();

	// mousePos project to v1,v2;
	var mONV1 = p5.Vector.dot(mousePos,v1n);
	var mONV2 = p5.Vector.dot(mousePos,v2n);
	print("mOnV1:" + mONV1);
	
	var m_vc1 = p5.Vector.mult(v1n,mONV1);
	var m_vc2 = p5.Vector.mult(v2n,mONV2);

	//print("m_vc1:" + m_vc1);
	//mv_vc1.add(center);

	/*
	var mv_vc1o = p5.Vector.add(center,mv_vc1);
		
	var mv_vc2o = 
		p5.Vector.add(center,mv_vc2);
		*/
		
	push();
	translate(width/2,height/2);
	drawVector(origin,m_vc1,color(125,0,0),4);
	drawVector(origin,m_vc2,color(0,125,0),4);
	pop();
	

}

function drawVector(p0,p1,color,wt)
{
	//push();
	stroke(color);
	strokeWeight(wt);
	line(p0.x,p0.y,p1.x,p1.y);
	fill(0);
	ellipse(p1.x,p1.y,3,3);
	//pop();
}


