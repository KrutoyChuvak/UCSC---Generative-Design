//map generator
class MAP {
	constructor() {
		this.rows = 100;
		this.cols = 100;
		this.cells = [];
		for (var i = 0; i < this.rows; i++) {
			this.cells[i] = [];
			for (var u = 0; u < this.cols; u++) {
				this.cells[i][u] = 0;
			}
			console.log("building array");
		}
		this.numbRooms = Math.round(random(15, 20));
	}
	
	clearMap(){
		for (var i = 0; i < this.rows; i++) {
			this.cells[i] = [];
			for (var u = 0; u < this.cols; u++) {
				this.cells[i][u] = 0;
			}
		}
		this.numbRooms = Math.round(random(15, 20));
	}
	
	createMap(){
		//starting area
		this.createRoom(50, 50);
		//find edges and create more rooms
	}
	
	//last path up=0, right=1, down=2, left=3
	createPath(xposition, yposition){
		var pathDist = Math.round(random(14, 18));
		var newRoom = [0,0];
		var someDirection = Math.round(random(0, 3));
		if (xposition > 75) {someDirection = 1};
		if (xposition < 25) {someDirection = 0};
		if (yposition > 75) {someDirection = 3};
		if (yposition < 25) {someDirection = 2};
		switch(someDirection){
			case 0:
				for(var i = 0; i<pathDist; i++){
					this.cells[xposition+i][yposition] = 1;
					newRoom = [xposition+i, yposition];
					//console.log(newRoom);
				}
				break;
			case 1:
				for(var i = 0; i<pathDist; i++){
					this.cells[xposition-i][yposition] = 1;
					newRoom = [xposition-i, yposition];
					//console.log(newRoom);
				}
				break;
			case 2:
				for(var i = 0; i<pathDist; i++){
					this.cells[xposition][yposition+i] = 1;
					newRoom = [xposition, yposition+i];
					//console.log(newRoom);
				}
				break;
			case 3:
				for(var i = 0; i<pathDist; i++){
					this.cells[xposition][yposition-i] = 1;
					newRoom = [xposition, yposition-i];
					//console.log(newRoom);
				}
		}
		if (this.numbRooms > 0) {
			console.log("numbRooms" , this.numbRooms);
			this.numbRooms--;
			this.createRoom(newRoom[0]+1, newRoom[1]+1);
		}
		
	}
	
	createRoom(roomX, roomY) {
		var randWidth = Math.round(random(3, 7));
		var randHeight = Math.round(random(3, 7));
		var pathStart = Math.round(random(0, randWidth*randHeight));
		for(var i = randWidth; i >= 0; i--){
			for(var u = randHeight; u >= 0; u--){
				this.cells[roomX-i][roomY-u] = 1;
				if (pathStart == 0){
					if(this.numbRooms == 0) {
						this.cells[roomX-i][roomY-u] = 2;
					}
					else {
						this.createPath(roomX-i, roomY-u);
						var tempRand = Math.round(random(0, 3));
						if (tempRand==3) {
							this.cells[roomX-i][roomY-u] = 3;
						}
						if (tempRand==2){
							this.cells[roomX-i][roomY-u] = 4;
						}
					}
				}
				pathStart--;
			}
		}
	}
	
	placeEnd() {
		var isEnd = false;
		var lastTile = [0, 0];
		for(var i = 0; i < this.rows; i++){
			for(var u = 0; u < this.cols; u++){
				if(this.cells[i][u] == 2) {
					isEnd = true;
				}
				if(this.cells[i][u] == 1){
					lastTile[0] = i;
					lastTile[1]= u;
				}
			}
		}
		if (!isEnd){
			this.cells[lastTile[0]][lastTile[1]] = 2;
		}
	}
	
	drawRooms(){
		for(var i = 0; i < this.rows; i++){
			for(var u = 0; u < this.cols; u++){

				if(this.cells[i][u] == 1){
					fill(100, 100, 100, 250);
					rect(i*4, u*4, 4, 4);
				}
				else if(this.cells[i][u] == 2){
					fill(200, 200, 200, 255);
					rect(i*4, u*4, 4, 4);
				}
				else if (this.cells[i][u] == 3){
					fill(200, 200, 10, 255);
					rect(i*4, u*4, 4, 4);
				}
				else if (this.cells[i][u] == 4){
					fill(200, 10, 10, 255);
					rect(i*4, u*4, 4, 4);
				}
			}
		}
		console.log("done drawing rooms");
	}
}