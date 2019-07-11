class WorldGenerator {
	constructor(size, seed) {
		this.width = size;
		this.height = size;
		this.length = size;
		this.seed = seed;
		this.size = size;
		this.blocks = [this.size];
		for (let i = 0; i<this.size; i++) {
			this.blocks[i] = [this.size];
		}
	}
	
	generateNoise() {
		for (let x = 0; x<this.size; x++) {
			for (let y = 0; y<this.size; y++) {
				this.blocks[x][y] = noise(x, y);
				//console.log(x+", "+y+", "+noise(x, y));
			}
		}
	}
	
	drawWorld() {
		for (let x = 0; x<this.size; x++) {
			for (let y = 0; y<this.size; y++) {
				fill(this.blocks[x][y]*255);
				//console.log()
				translate(32*x,int(this.blocks[x][y]*10)*32, y*32);
				box(32);
				console.log(int(this.blocks[x][y]*10)*32);
				//rect(x*600/this.size, y*600/this.size, this.size, this.size);
			}
		}
	}
}