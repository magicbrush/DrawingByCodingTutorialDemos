
var horiRes = 16;
var vertRes = 16;
var edgeWidth = 2;

var fillColors = new Array(16); // 16*16
var edgeColors = new Array(16);

function setup()
{
  // init canvas
  createCanvas(500,400);
  
  // init pallettes
  ColorPallette[0] = color(220,140,160);
  ColorPallette[1] = color(150,180,240);
  ColorPallette[2] = color(250,230,90);
  for(var i=0;i<GrayPallette.length;i++)
  {
    GrayPallette[i] =130 + 125.0 *
      i/GrayPallette.length;
  }
  
  // init grid color array
  for(var i=0;i<horiRes;i++)
  {
    fillColors[i] = new Array(horiRes);
    edgeColors[i] = new Array(horiRes);
    for(var j=0;j<vertRes;j++)
    {
      if(random(1.0)<0.5)
      {
        fillColors[i][j] = RandChooseColor();
      }
      else
      {
        fillColors[i][j] = RandChooseGrayColor();
      }
      edgeColors[i][j] = color(random(0,100));
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