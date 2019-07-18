//takes in type, probability, and an expansion
//probability isnt implemented yet, type is the sort of art being displayed, expansion is the target array that will be processed
class GenerativeGrammar {
	constructor(type, probability, expansion){
		this.type = type;
		this.probability = probability;
		this.expansion = expansion;
		this.result = [];
	}
	//expands/processes the array to create a new string in this.result
	startExpansion() {
		if (this.type = "story") {
			var grammar = tracery.createGrammar(this.expansion);
			this.result = grammar.flatten('#story#');
		}
		else if (this.type = "drawing") {
			
		}
		else if (this.type = "music") {
			
		}
		else console.log("not given a type");
	}
}