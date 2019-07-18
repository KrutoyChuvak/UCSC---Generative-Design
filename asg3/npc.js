class NPC {
	constructor(seed) {
		this.seed = seed;
		this.axiomType = 0;
		this.story = [];
		this.drawing = [];
		this.music = [];
	}
	
	//might implement later, add multiple art styles at random
	randomSeed() {
		var randomThing = random([0, 1, 2]);
		switch(randomThing) {
			case 0:
				this.axiomType = "story";
				break;
			case 1:
				this.axiomType = "drawing";
				break;
			case 2:
				this.axiomType = "music";
		}
	}
	
	//https://shiffman.net/a2z/cfg/
	//this is pretty much an extension of the example from this website, not sure if im allowed to use other people's grammar libraries.
	storyGrammar(){
		this.story = {
		"story": ['In a #setting#, a #adj# #hero# began #pronoun# #mission# to find the #cool#, but found #interest# instead.'],
		"setting": ['land far far away', 'world filled with darkness', 'future dystopia', 'time long long ago'],
		"pronoun": ['his', 'her', 'its'],
		"cool": ['amulet of power', 'one ring', 'really big sword', 'nanochip', 'last light'],
		"interest": ['true love', 'themselves', 'their true passion', 'their long lost twin brother', 'absolutely nothing', 'unlimited power', 'the fountain of life'],
		"mission": ['mission', 'quest', 'task', 'journey'],
		"hero": ['snake', 'detective', 'warrior', 'wizard', 'android', 'Jedi', 'T-Rex'],
		"adj": ['smart', 'pretty', 'smelly', 'funny', 'angry', 'funky', 'wild', 'depressed', 'washed-up', 'loud']
		}
	}
	
	//not implemented
	drawingGrammar(){
		
	}
	//not implemented
	musicGrammar(){
		
	}
}