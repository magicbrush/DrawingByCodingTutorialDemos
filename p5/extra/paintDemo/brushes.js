
var brushes = [
  brush_ChainCircles, // 0
  brush_randomDots,   // 1
  brush_blinking, //2
  brush_synchronized_dots_freq1, // 3
  brush_synchronized_dots_freq3, // 4
  brush_sync_r10_a5_f1, // 5
  brush_sync_r0_a15_f2, // 6
  brush_wave_r10_a5_f1_wf10, // 7
  brush_wave_r5_a8_f10_wf30, // 8 
  brush_wave_r0_a15_f5_wf1, // 9
  brush_oval_0,// 10
  brush_oval_1,// 11
  brush_shaker_1, // 12
  brush_shaker_2, // 13
  brush_shaker_3, // 14
  brush_shaker_4, // 15
  brush_shaker_5, // 16
  brush_shaker_6, // 17
  brush_circleBlur_1, // 18
  brush_circleBlur_2, // 19
  brush_dodgeCircle_1, // 20
  brush_interactive_circleBlur // 21
  ];    

function brush_ChainCircles()
{
  var phase = millis()/30;
  append(circles, new circle(mouseX,mouseY,10,6,1,phase));
}

function brush_randomDots()
{
  var r = random(10,15);
  var a = random(3,r);
  var f = random(0.333,3);
  var phase = random(millis()/30,millis()/300);
  append(circles, new circle(mouseX,mouseY,r,a,f,phase));
}

function brush_blinking()
{
  var r = random(0,1);
  var a = random(8,16);
  var f = random(15,30);
  var phase = random(millis()/30,millis()/300);
  append(circles, new circle(mouseX,mouseY,r,a,f,phase));
}


function brush_synchronized_dots_freq1()
{
  var r = random(0,1);
  var a = random(8,16);
  var f = 1;
  var phase = 0;
  append(circles, new circle(mouseX,mouseY,r,a,f,phase));
}

function brush_synchronized_dots_freq3()
{
  var r = random(0,1);
  var a = random(8,16);
  var f = 3;
  var phase = 0;
  append(circles, new circle(mouseX,mouseY,r,a,f,phase));
}

function brush_sync_r10_a5_f1()
{
  var r = 10;
  var a = 5;
  var f = 1;
  var phase = 0;
  append(circles, new circle(mouseX,mouseY,r,a,f,phase));
}

function brush_sync_r0_a15_f2()
{
  var r = 0;
  var a = 15;
  var f = 2;
  var phase = 0;
  append(circles, new circle(mouseX,mouseY,r,a,f,phase));
}

function brush_wave_r10_a5_f1_wf10()
{
  var r = 10;
  var a = 5;
  var f = 1;
  var phase = 10*millis()/1000;
  append(circles, new circle(mouseX,mouseY,r,a,f,phase));
}

function brush_wave_r5_a8_f10_wf30()
{
  var r = 3;
  var a = 15 * sin(10*millis()/1000);
  var f = 10;
  var phase = 40*millis()/1000;
  append(circles, new circle(mouseX,mouseY,r,a,f,phase));
}

function brush_wave_r0_a15_f5_wf1()
{
  var r = 0;
  var a = 15;
  var f = 5;
  var phase = 1*millis()/1000;
  append(circles, new circle(mouseX,mouseY,r,a,f,phase));
}

function brush_oval_0()
{
  var rx = 8;
  var ax = 5;
  var fx = 2;
  var px = 0;
  
  var ry = 8;
  var ay = 5;
  var fy = 2;
  var py = TWO_PI/8;

  var angSpd = PI;

  var phase = millis()/200;
  
  append(circles, 
    new oval(mouseX,mouseY,
      rx,ax,fx,px,
      ry,ay,fy,py,
      angSpd,phase));
}

function brush_oval_1()
{
  var rx = 10;
  var ax = 10;
  var fx = 2;
  var px = 0;
  
  var ry = 10;
  var ay = 10;
  var fy = 3;
  var py = TWO_PI/8;

  var angSpd = PI/10;

  var phase = millis()/200;
  
  append(circles, 
    new oval(mouseX,mouseY,
      rx,ax,fx,px,
      ry,ay,fy,py,
      angSpd, phase));
}

function brush_shaker_1()
{
  var radius = random(20,40);
  var ax = random(6,12);
  var fx = 2.5;
  var px = 0;
  var ay = random(6,12);
  var fy = 2.5;
  var py = TWO_PI/4;
  var phase = millis()/200;

  //print("brush_shaker_1");
  
  append(circles, 
    new shaker(mouseX,mouseY,
      radius,
      ax,fx,px,
      ay,fy,py,
      phase));
}

function brush_shaker_2()
{
  var radius = random(20,40);
  var ax = random(6,12);
  var fx = random(1,3);
  var px = 0;
  var ay = random(6,12);
  var fy = random(1,3);
  var py = random(0,TWO_PI);
  var phase = millis()/200;

  //print("brush_shaker_1");
  
  append(circles, 
    new shaker(mouseX,mouseY,
      radius,
      ax,fx,px,
      ay,fy,py,
      phase));
}

function brush_shaker_3()
{
  var radius = random(1,60);
  var ax = random(6,12);
  var fx = random(-10,10);
  var px = 0;
  var ay = random(6,12);
  var fy = random(-10,10);
  var py = random(0,TWO_PI);
  var phase = millis()/200;

  //print("brush_shaker_1");
  
  append(circles, 
    new shaker(mouseX,mouseY,
      radius,
      ax,fx,px,
      ay,fy,py,
      phase));
}

function brush_shaker_4()
{
  var radius = random(1,40);
  var ax = random(10,20);
  var fx = random(1)>1?
    random(10,20):random(-20,-10);
  var px = random(0,TWO_PI);
  var ay = random(2,5);
  var fy = fx;
  var py = random(0,TWO_PI);
  var phase = millis()/200;

  append(circles, 
    new shaker(mouseX,mouseY,
      radius,
      ax,fx,px,
      ay,fy,py,
      phase));
}

function brush_shaker_5()
{
  var secs = millis()/1000;
  var radius = 8*sin(15*secs) + 16;
  var ax = random(6,12);
  var fx = random(-10,10);
  var px = 0;
  var ay = random(6,12);
  var fy = random(-10,10);
  var py = random(0,TWO_PI);
  var phase = millis()/200;

  //print("brush_shaker_1");
  
  append(circles, 
    new shaker(mouseX,mouseY,
      radius,
      ax,fx,px,
      ay,fy,py,
      phase));
}


function brush_shaker_6()
{
  var secs = millis()/1000;
  var theta = 10*secs;
  var radius = 3*sin(theta+PI)+9;
  var ax = 5*sin(theta)+8;
  var fx = 5*sin(theta)+5;
  var px = 0;
  var ay = ax
  var fy = fx
  var py = PI/2;
  var phase = millis()/200;

  //print("brush_shaker_1");
  
  append(circles, 
    new shaker(mouseX,mouseY,
      radius,
      ax,fx,px,
      ay,fy,py,
      phase));
}

function brush_circleBlur_1()
{
  var r = 0;
  var a = 40;
  var f = 3;
  var phase = 1*millis()/300;
  append(circles, new circleBlur(
    mouseX,mouseY,r,a,f,phase));
}

function brush_circleBlur_2()
{
  var r = 25;
  var a = 25;
  var f = 2;
  var phase = 1*millis()/200;
  append(circles, new circleBlur(
    mouseX,mouseY,r,a,f,phase));
}


function brush_dodgeCircle_1()
{

  var x = mouseX;
  var y = mouseY;
  var r = random(10,20);
  var senseR = random(30,100);

  var dc = new dodgeCircle(x,y,r,senseR);
  
  append(circles, dc);
  //print("append(circles, dc);");
}

function brush_interactive_circleBlur()
{
  var secs = millis()/1000;
  var r = 15*sin(secs*0.25);
  var a = 10;
  var f = 15;
  var phase = 1*millis()/300;
  var senseR = random(50,120);
  append(circles, new circleBlurInteractive(
    mouseX,mouseY,r,a,f,phase,senseR));
}