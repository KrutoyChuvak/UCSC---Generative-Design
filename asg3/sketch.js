var playerX = 100;
var playerY = 100;
var dBox;
var displayBox = false;
var displayStory = false;
var grammarGen;

//Vladislav Kardash
/*
I used this git hub code for a grammar processer https://github.com/galaxykate/tracery
not sure if this is allowed, but i wasnt sure how to make my own, maybe some sort of recursion or string manipulation to make it work?

*/
function setup() {
	createCanvas(400,400);
	npc = new NPC(11);
	npc.randomSeed();
}

function draw() {
	background(50);
	textSize(20);
	fill(200, 150, 50);
	text('Press E to interact with the NPC', 10, 20);
	
	//player
	fill(127, 101, 192);
	ellipse(playerX, playerY, 40, 40);
	
	//if the display box isnt showing, check if the player is pressing to move
	if (!displayBox) {
		if (keyIsDown(68)) {
			playerX += 3;
		}
		if (keyIsDown(65)) {
			playerX -= 3;
		}
		if (keyIsDown(87)) {
			playerY -= 3;
		}
		if (keyIsDown(83)) {
			playerY += 3;
		}
	}
	
	//if the player is close to the npc and presses E, the display box will open
	if (bounds() && keyIsDown(69) ) {
		displayBox = true;
	}
	
	//all of this happens when the box is displayed
	if (displayBox) {
		fill(255);
		rect(50, 50, 300, 300);
		
		textSize(12);
		fill(0, 150, 150);
		text('Would you like to hear a story? y/n', 60, 70);
		
		//n is down, else if y is down
		if (keyIsDown(78)){
			displayBox = false;
		}
		else if (keyIsDown(89) && !displayStory) {
			//get the grammar options for story case and set type to story
			npc.storyGrammar();
			npc.type = "story";
			
			//create new grammar generator
			grammarGen = new GenerativeGrammar("story", 99, npc.story);
			//create a story
			grammarGen.startExpansion();
			
			//set display story to true
			displayStory = true;
		}
		//if the story is displayed, display it
		else if (displayStory) {
			outputStory(grammarGen.result);
			
			//if the player presses y again
			if (keyIsDown(89)) {
				grammarGen.startExpansion();
				dBox = new DialogBox(grammarGen.result);
			}
		}
	}
	
	
	//npc
	fill(50, 220, 150);
	rect(350, 350, 40, 40);
}

//bounds testing for when player is close to npc
function bounds() {
	if (playerX > 310 && playerX < 390 && playerY < 390 && playerY > 310) {
		return true;
	}
	else {
		return false;
	}
}

function outputStory(string) {
	//get dBox to display the story
	dBox = new DialogBox(grammarGen.result);
	dBox.draw();
}
