boolean bShowTitle = true;
float titleTxtSize = 10;

color bgColor = color(0);

void setup()
{
  size(450,564);
  
  colorMode(HSB,360,100,100,100);
  bgColor = color(30,8,95);
  background(bgColor);
  
  // 8
  draw_HalfCircleCapRow_Yellow();
  draw_HalfCircleCapRow_Red();
  
  // 1
  drawQuad_BigBrown();
  
  // 2
  drawQuad_MiddleRed();
  
  // 3
  drawQuad_Checkerboard();
  
  // 4
  draw_HollowRect();
  
  // 5
  draw3HalfCircleCaps();
  
  // 6
  drawCurves_Parabola();
  
  // 7
  drawCurve_Sinusoidal();
  
  // 9 ring bands
  draw_RingBands();
}