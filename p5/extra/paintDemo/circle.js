
function circle(
	x,y,radius, 
	amp, freq, phase )
{
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.amplitude = amp;
	this.frequence= freq;
	this.phase = phase;

	this.draw = function()
	{
		var secs = millis()/1000.0;
		var rBias = 
			this.amplitude * 
			sin(this.frequence * secs + this.phase);
		var r = this.radius + rBias;
		
		push();
		noStroke();
		strokeWeight(0.2);
		stroke(0,0,0,50);
		fill(0,10);
		translate(this.x,this.y);
		scale(r,r);
		ellipse(0,0,1,1);
		pop();
	}

	this.toJson = function()
	{
		var jsonObj = {};
		jsonObj.x = this.x;
		jsonObj.y = this.y;
		jsonObj.radius = this.radius;
		jsonObj.amplitude = this.amplitude;
		jsonObj.frequence = this.frequence;
		jsonObj.phase = this.phase;
		return jsonObj;
	}

	this.fromJson = function(jsonObj)
	{
		this.x = jsonObj.x;
		this.y = jsonObj.y;
		this.radius = jsonObj.radius;
		this.amplitude = jsonObj.amplitude;
		this.frequence = jsonObj.frequence;
		this.phase = jsonObj.phase;
	}	

}

function circleBlur(
	x,y,radius, 
	amp, freq, phase )
{
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.amplitude = amp;
	this.frequence= freq;
	this.phase = phase;

	this.draw = function()
	{
		var secs = millis()/1000.0;
		var rBias = 
			this.amplitude * 
			sin(this.frequence * secs + this.phase);
		var r = this.radius + rBias;
		
		push();
		noStroke();
		fill(0,4);
		translate(this.x,this.y);
		scale(r,r);
		var i=10;
		do{
			fill(0,random(1,8));
			ellipse(0,0,1,1);
			scale(0.9,0,9);
			i--;
		}while(i>0)
		
		pop();
	}

}


function circleBlurInteractive(
	x,y,radius, 
	amp, freq, phase,
	senseRadius )
{
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.amplitude = amp;
	this.frequence= freq;
	this.phase = phase;
	this.senseRadius = senseRadius;

	this.pointX = 10000;
	this.pointY = 10000;

	this.draw = function()
	{
		var secs = millis()/1000.0;
		var rBias = 
			this.amplitude * 
			sin(this.frequence * secs + this.phase);
		var r = this.radius + rBias;

		var dx = this.pointX - this.x;
		var dy = this.pointY - this.y;
		var dist = sqrt(dx*dx + dy*dy);
		var distC = constrain(dist,0,this.senseRadius);
		var dist01 = distC/senseRadius;

		var r2 = r / (1.1-dist01);

		push();
		noStroke();
		fill(0,4);
		translate(this.x,this.y);
		scale(r2,r2);
		var i=10;
		do{
			fill(0,(1.05-dist01)*random(10,20));
			ellipse(0,0,1,1);
			scale(0.9,0,9);
			i--;
		}while(i>0)
		
		pop();
	}

	this.pointerMove = function(pointx,pointy)
	{
		//print("pointerMove");
		this.pointX = pointx;
		this.pointY = pointy;
	}

}


