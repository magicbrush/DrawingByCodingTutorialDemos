


function FcnOnIJ(i,j)
{
	var f = (i+j)/(cols+rows);

	return f;
}


function DisplayF(i,j,F)
{
	var xy = ij2xy_2(i,j);

	var wd = width/cols;
	var ht = height/rows;
	var RectWd = F * wd;
	var RectHt = F * ht;

	fill(255);
	strokeWeight(1);
	rect(xy.x,xy.y,RectWd,RectHt);	
}

function DisplayF2(i,j,F)
{
	var wd = width/cols;
	var ht = height/rows;
	var RectWd = F * wd;
	var RectHt = F * ht;
	
	var xy = ij2xy_2(i,j);

	push();
	translate(xy.x,xy.y);
	rotate(F*GetTimeNow());
	fill(255);
	strokeWeight(2);
	rect(0,0,RectWd,RectHt);	
	pop();
}


function DisplayF3(i,j,F)
{
	var wd = width/cols;
	var ht = height/rows;

	var halfWd = wd/2;
	var halfHt = ht/2;
	
	var RectWd = F * wd;
	var RectHt = F * ht;
	
	var xy = ij2xy_2(i,j);
	
	push();
	translate(xy.x,xy.y);
	rotate(F*GetTimeNow());
	var s = cos(F*GetTimeNow())*RectHt;
	scale(s,s);
	rect(0,0,1,1);
	fill(255);
	noStroke();
	ellipse(0,0,1.4,1.4);	
	pop();
}

function ij2xy_0(i,j)
{
	var wd = width/cols;
	var ht = height/rows;

	var halfWd = wd/2;
	var halfHt = ht/2;

	var xy0 = scaling(
		i,j,wd,ht);
	var xy1 = translation(
		xy0.x,xy0.y,halfWd,halfWd);
	var xy2 = rotation(xy1.x,xy1.y,PI/6);

	var XY = {
    x: xy2.x,
    y: xy2.y
	};
	return XY;
}

function ij2xy_1(i,j)
{
	var thetaStep = TWO_PI/cols;
	var radiusStep = width*0.5/rows;

	var theta = i*thetaStep;
	var radius = j*radiusStep;

	var x = radius * cos(theta);
	var y = radius * sin(theta);

	x += width/2;
	y += height/2;

	var XY = {
	    x: x,
	    y: y
	};
	return XY;
}

function ij2xy_2(i,j)
{
	var wd = width/cols;
	var ht = height/rows;

	var halfWd = wd/2;
	var halfHt = ht/2;

	var xy0 = scaling(
		i,j,2/cols,1/rows);
	var xy1 = translation(
		xy0.x,xy0.y,-1,0);

	// non-linear transform
	var xy2 = xy1;
	
	xy2.x = 
		xy1.x*xy1.x - xy1.y*xy1.y;
	xy2.y = 
		2*xy1.x*xy1.y;

	var xy3= scaling(xy2.x,xy2.y,100,100);
	var xy4 = translation(xy3.x,xy3.y,width/2,height/4);

	var XY = {
    x: xy4.x,
    y: xy4.y
	};
	return XY;
}


