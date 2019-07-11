let angle = 0;
function setup() {
	createCanvas(600, 600, WEBGL);
	background(51);
	world = new WorldGenerator(100, 8);
	world.generateNoise();
	world.drawWorld();
}

function draw(){
	let mX = map(mouseX, 0, width, -200, 0);
	let mY = map(mouseY, 0, height, -200, 0);
	camera(mX, 0, mY, 0, 0, 0, 0, 1, 0);

}