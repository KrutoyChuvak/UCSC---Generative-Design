
var player;
var map0;
var depth = 1;

function preload() {
	img = loadImage('assets/menu.PNG');
}

function setup() {
	createCanvas(400, 400);
	background(30);
	player = new PLAYER();
	map0 = new MAP();
	map0.createMap();
	map0.placeEnd();
	
	//first game start state
	fill(100, 100, 100, 250);
	rect(0, 0, 400, 400);
	image(img, 400-350, 400-300, 300, 200);
}

function draw() {
	if (player.money == 0) {
		player.dead = true;
		gameOver();
	}
	if (player.dead == true){
		gameOver();
	}
	if (map0.cells[player.xPos/4][(player.yPos/4)] == 2){
		newLevel();
	}
	else if (map0.cells[player.xPos/4][(player.yPos/4)] == 3){
		player.swordPickup();
		map0.cells[player.xPos/4][(player.yPos/4)] = 1;
	}
	else if (map0.cells[player.xPos/4][(player.yPos/4)] == 4){
		player.fight();
		map0.cells[player.xPos/4][(player.yPos/4)] = 1;
	}
}

function keyPressed() {
	if(key === 'w' && map0.cells[player.xPos/4][(player.yPos/4)-1] != 0) {
		player.yPos -= 4;
		player.money--;
		renderStuff();
	}
	else if(key === 's' && map0.cells[player.xPos/4][(player.yPos/4)+1] != 0) {
		player.yPos += 4;
		player.money--;
		renderStuff();
	}
	else if(key === 'a' && map0.cells[(player.xPos/4)-1][player.yPos/4] != 0) {
		player.xPos -= 4;
		player.money--;
		renderStuff();
	}
	else if(key === 'd' && map0.cells[(player.xPos/4)+1][player.yPos/4] != 0) {
		player.xPos += 4;
		player.money--;
		renderStuff();
	}
}

function newLevel(){
	depth++;
	map0.clearMap();
	map0.createMap();
	player.xPos = 200;
	player.yPos = 200;
	map0.placeEnd();
}

function renderStuff() {
	background(30);
	map0.drawRooms();
	player.drawP();
	player.drawMoney();
	text('Your current depth is: '+ depth, 10, 15);
}

function gameOver() {
	textSize(50);
	fill(225, 225, 225, 225);
	text('GAME OVER', 50, 200);
	textSize(12);
	player.respawn();
	depth = 0;
	newLevel();
}
