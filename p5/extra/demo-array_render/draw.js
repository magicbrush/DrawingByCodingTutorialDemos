
function drawFace(x,y,theta,wd,ht)
{
	push();
	translate(x,y);
	rotate(theta);
	ellipse(0,0,wd,ht);
	pop();
}
