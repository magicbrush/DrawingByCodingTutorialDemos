function shaker(
	x,y, 
	radius,
	ax,fx,px,
	ay,fy,py,
	phase)
{
	this.x = x;
	this.y = y;

	this.radius = radius;
	
	this.ax = ax;
	this.fx = fx;
	this.px = px;
	
	this.ay = ay;
	this.fy = fy;
	this.py = py;

	this.phase = phase;
	
	this.draw = function()
	{
		var secs = millis()/1000.0;

		var thetaX = this.fx * secs + this.px + this.phase;
		
		var xShift = 
			this.ax * sin(thetaX);
		var yShift = 
			this.ay * sin(this.fy * secs + this.py + this.phase);

		var xpos = this.x + xShift;
		var ypos = this.y + yShift;
		
		push();
		translate(xpos,ypos);
		scale(this.radius,this.radius);

		noStroke();
		//ellipse(xpos,ypos,5,5);
		
		fill(0,5);
		for(var i = 0;i<6;i++)
		{
			scale(0.85,0.85);
			ellipse(0,0,1,1);
		}
		//ellipse(0,0,1,1);
		pop();
		
		/*
		push();
		fill(255,0,0);
		ellipse(this.x,this.y,50,50);
		pop();
		*/
		//print("this.fx :" + this.fx  + " ys:" + yShift);
	}
}




