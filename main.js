img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;

function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
    mario_gameover = loadSound("gameover.wav");
	mario_die = loadSound("mariodie.wav");
	mario_kick = loadSound("kick.wav");
	//img = loadImage("mario05.png");

	setSprites();
	MarioAnimation();
}

function setup() 
{
	canvas = createCanvas(1240 ,336);
	canvas.parent("canvas");

	intializeInSetup(mario);

	video = createCapture(VIDEO);
    video.size(600 ,300);
	video.parent('game_console');

	posenet = ml5.poseNet(video ,modelLoaded);
	posenet.on('pose', gotPoses);
}

  function draw() {

	game()
  /*background("#D3D3D3");

  if(noseX < 300)
  {
	  marioX = marioX - 1;
  }
  if(noseX > 300)
  {
	  marioX = marioX + 1;
  }
  if(noseY < 150)
  {
	  marioY = marioY - 1;
  }

  image(img,marioX, marioY, 40,70);*/
}

function gotPoses(results)
{
	if(results.length > 0)
	{
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		}
}

function modelLoaded()
{
	console.log("ModelLoaded!");
}