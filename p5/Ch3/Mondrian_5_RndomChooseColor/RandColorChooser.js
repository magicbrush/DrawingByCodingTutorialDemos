
// color pallette
var ColorPallette = new Array(3);
var GrayPallette = new Array(8);

// random choose color from pallette
function RandChooseColor()
{
  var randId = floor(
  random(ColorPallette.length-0.00001));
  var cr = ColorPallette[randId];
  
  return cr;
}
function RandChooseGrayColor()
{
  var randId = 
    floor(
    random(GrayPallette.length-0.0001));
  var grayValue = GrayPallette[randId];
  var crGray = color(grayValue);
  return crGray;
}