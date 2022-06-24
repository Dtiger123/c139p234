img="";
noseX=0;
noseY=0;
marioX=325;
marioY=325;
function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	img = loadImage("mario.jpg");
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(650, 300);
	poseNet = ml5.posenet(video, modelLoaded);
	posenet.on(poseNet, gotposes);
}
function modeLoaded(){
	console.log('Model Loaded!');
}
function gotposes(results){
if(results.length > 0){
	noseX = results[0].pose.nose.x;
	noseY = results[0].pose.nose.y;
	console.log("noseX =" + noseX + "noseY =" + noseY);
}
}

function draw() {
	game();
	background("#D3D3D3");
	if(noseX > 300){
		marioX = marioX - 1;
	}
	if(noseX < 300){
		marioX = marioX + 1;
	}
	if(noseY < 150){
		marioX = marioX + 1;
	}
	image(img,marioX,marioY,40,70);
}






