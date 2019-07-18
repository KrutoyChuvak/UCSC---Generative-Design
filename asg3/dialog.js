//dialog box class, takes in words array
class DialogBox {
	constructor(words) {
		this.words = words;
		this.another = ["Would you like another? y/n"];
	}
	//draws text for the generated story, and for a question
	draw() {
		textSize(12);
		fill(150, 150, 150);
		//bound to a box so that wrapping can be done
		text(this.words, 60, 100, 280, 200);
		
		fill(150, 0, 150);
		text(this.another, 60, 250);
	}
	
	//destroy function in case of wanting to clear the words displayed
	destroy(){
		this.words = null;
		this.another = null;
	}
}