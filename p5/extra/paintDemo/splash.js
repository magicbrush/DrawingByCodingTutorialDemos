function splash(
	x,y, 
	dotRadius,
	dotRadiusVar,
	distVar,
	density)
{
	this.x = x;
	this.y = y;

	this.dotRadius = dotRadius;
	this.dotRadiusVar = dotRadiusVar;

	this.distVar = distVar;
	this.density = density;
	
	this.draw = function()
	{
		var secs = millis()/1000.0;
		
		var xShift = 0;
		var yShift = 0;

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
			ellipse(0,0,1,1);
			scale(0.85,0.85);
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




