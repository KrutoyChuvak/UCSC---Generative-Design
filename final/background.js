//random background stuff?
class background {
	constructor(seed){
		this.width = 400;
		this.height = 400;
		this.seed = seed;
	}
	
	makeCool() {
		var xoff = 0.01;
		loadPixels();
		for(var i = 0; i < this.width; i++){
			for(var u = 0; u < this.width; u++){
				var r = noise(xoff)*255;
				pixels[i,u] = r;
			}
		}
	}
}