let systems = [];
var soundFile;
var fft;
var spectrum;

function preload() {
	soundFile = loadSound('papercut.mp3');
}

function setup() {
	createCanvas(492, 500);
	this.p = new ParticleSystem(createVector(0, 530));
	systems.push(p);
	mouseClicked();
	soundFile.amp(0.2);
	fft = new p5.FFT(0.9, 128);
}

function draw() {
	
	spectrum = fft.analyze();
	
	
	background(255);
	for (i = 0; i < systems.length; i++) {
		systems[i].run();
		systems[i].addParticle();
		
	}
	if (systems.length == 0) {
		fill(255);
	}
  }
function mouseClicked() {
  if (soundFile.isPlaying()) {
    soundFile.pause();
  } else {
    soundFile.play();
  }
}
  

