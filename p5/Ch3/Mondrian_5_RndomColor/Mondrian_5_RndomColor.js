
var horiRes = 16;
var vertRes = 16;
var edgeWidth = 2;

var fillColors = new Array(16);
var edgeColors = new Array(16);

function setup()
{
  createCanvas(500,400);
  
  
  for(var i=0;i<horiRes;i++)
  {
    fillColors[i] = new Array(vertRes);
    edgeColors[i] = new Array(vertRes);
    for(var j=0;j<vertRes;j++)
    {
      fillColors[i][j] = color(
        random(255),
        random(255),
        random(255));
      var edgeBright = random(255);
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