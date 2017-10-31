
function oval(
	x,y, 
	rx, ax,fx,px,
	ry, ay,fy,py,
	angleSpd,
	phase)
{
	this.x = x;
	this.y = y;

	this.rx = rx;
	this.ax = ax;
	this.fx = fx;
	this.px = px;
	
	this.ry = ry;
	this.ay = ay;
	this.fy = fy;
	this.py = py;

	this.angleSpd = angleSpd;

	this.phase = phase;
	
	this.draw = function()
	{
		var secs = millis()/1000.0;
		var rx = 
			this.rx + this.ax * sin(this.fx * secs + this.px + this.phase);
		var ry = 
			this.ry + this.ay * sin(this.fy * secs + this.py + this.phase);
		
		var rotAngle = this.angleSpd * secs;

		push();
		noStroke();
		strokeWeight(0.2);
		stroke(0,0,0,50);
		fill(0,10);
		translate(this.x,this.y);
		rotate(rotAngle);
		scale(rx,ry);
		
		//print("rotAngle:" + rotAngle)
		ellipse(0,0,1,1);
		pop();
	}
}




