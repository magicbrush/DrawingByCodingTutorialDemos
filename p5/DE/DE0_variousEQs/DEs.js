function Fxyt0(x,y,t)
{
	var d = 30*sin(1.2*t+0.01*x)*sin(0.1*(0.88*y+0.3*x));
	return d;
}

function Fxyt1(x,y,t)
{
	var d = 20*cos(0.777*t+0.01*y)*cos(0.123*(0.27*x+0.73*y));
	return d;
}

function Fxyt2(x,y,t)
{
	var d = 30*sin(t)*cos(0.123*sqrt(x*x+y*y));
	return d;
}

function Fxyt3(x,y,t)
{
	var d = 30*sin(t)*cos(2.02*sin(0.3*t)*(x+y));
	return d;
}

function Fxyt4(x,y,t)
{
	var d = 20*cos(0.37*t)*sin(2.03*cos(0.234*t)*(x-y));
	return d;
}

function Fxyt5(x,y,t)
{
	var xy = sqrt(x*x +y*y);
	var st = 20*sin(0.1*t)+1.5;
	var sxy = 10*sin(0.01*(x+y));
	var d = st *sxy ;
	return d;
}

function Fxyt6(x,y,t)
{
	var xy = sqrt(x*x +y*y);
	var st = 10*sin(0.123*t)+1.5;
	var sxy = 10*sin(0.01*(x+y));
	var d = st *sxy;
	return d;
}

function Fxyt7(x,y,t)
{
	var r = sqrt(x*x + y*y);
	var theta = atan2(x,y);
	var d = r*(1-cos(theta));
	return d;
}
function Fxyt8(x,y,t)
{
	var r = sqrt(x*x + y*y);
	var theta = atan2(x,y);
	var d = r*(1+sin(5*theta));
	return d;
}

function Fxyt9(x,y,t)
{
	var k = sin(3*(x+y));
	var p = cos(5*(sin(0.1*x)+cos(0.12*y)));
	var d = 10*k*p;
	return d;
}

function Fxyt10(x,y,t)
{
	var r = sqrt(x*x + y*y);
	var theta = atan2(x,y);
	var k = sin(0.1*theta);
	var p = cos(5*r);
	var d = 10*k*p;
	return d;
}