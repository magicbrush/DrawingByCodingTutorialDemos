

function dodgeCircle(
	x,y,radius,
	senseRadius)
{
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.senseRadius = senseRadius;

	this.pointX = 10000;
	this.pointY = 10000;

	this.draw = function()
	{
		//this.pointX = mouseX;
		//this.pointY = mouseY;

		var secs = millis()/1000.0;
		
		var dx = this.pointX - this.x;
		var dy = this.pointY - this.y;
		var dist = sqrt(dx*dx + dy*dy);
		var distC = constrain(dist,0,this.senseRadius);
		//var bDodging = (dist<=this.senseRadius);

		var xShift = 0;
		var yShift = 0;
		
		var dodgingPwr = 
		1.05 - distC/this.senseRadius;
		var dodgintDist = 
			random(dodgingPwr) * this.senseRadius;
		var dodgingTheta = random(TWO_PI);
		xShift = dodgintDist * cos(dodgingTheta);
		yShift = dodgintDist * sin(dodgingTheta);
		
		
		var x = this.x + xShift;
		var y = this.y + yShift;

		var r = this.radius * sqrt(dodgingPwr);
		//print("x:" + x + " y:" + y);
		
		push();
		//noStroke();
		//strokeWeight(0.2);
		//stroke(0,0,0,0);
		noStroke();
		fill(0,0,0,(1-0.95*sqrt(dodgingPwr))*150);
		
		//fill(0,0,0,0.01);
		translate(x,y);
		scale(r,r);
		//scale(10,10);
		ellipse(0,0,1,1);
		pop();
		
		
	}

	this.pointerMove = function(pointx,pointy)
	{
		//print("pointerMove");
		this.pointX = pointx;
		this.pointY = pointy;
	}

	//print("dodgeCircle");

}
/*
	
*/

/*
	

	
*/
//}





