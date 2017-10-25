var horiRes = 16;
var vertRes = 16;
var edgeWidth = 2;

var fillColors = new Array();
var edgeColors = new Array();

function setup()
{
  createCanvas(500,400);
  
  for(var i=0;i<horiRes;i++)
  {
    fillColors[i] = new Array();
    edgeColors[i] = new Array();
    for(var j=0;j<vertRes;j++)
    {
      var wd01 = i/horiRes;
      var ht01 = j/vertRes;
      var edgeBright = 255*(wd01+ht01)/2;
      fillColors[i][j] = color(
        255*wd01,
        255-255*ht01,
        0);
      edgeColors[i][j] = 
        color(
          edgeBright,
          edgeBright,
          edgeBright);
    }
  }
  
}

function draw()
{
  var wd = width/horiRes;
  var ht = height/vertRes;
  
  ellipse(200,200,50,40);
  
  strokeWeight(edgeWidth);
  for(var i=0;i<horiRes;i++)
  {
    for(var j=0;j<vertRes;j++)
    {
      var x = wd*i;
      var y = ht*j;
      
      fill(fillColors[i][j]);
      stroke(edgeColors[i][j]);
      rect(x,y,wd,ht);
    }
  }
  
}

// call on mouse moving
function mouseMoved() {
  for(var i=0;i<horiRes;i++)
  {
    for(var j=0;j<vertRes;j++)
    {
      var wd01 = i/horiRes;
      var ht01 = j/vertRes;
      fillColors[i][j] = color(
        255*wd01,
        255-255*ht01,
        (mouseY/height)*255);
    }
  }
  
}
