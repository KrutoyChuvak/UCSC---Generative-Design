//player object
class PLAYER {
	constructor() {
		this.color = color(250, 100, 100, 250);
		this.xPos = 200;
		this.yPos = 200;
		this.health = 0;
		this.weapon = [0,0];
		this.money = 51;
		
		this.dead = false;
		this.moving = false;
	}
	
	drawP() {
		fill(this.color);
		rect(this.xPos, this.yPos, 4, 4);
		text('Current Weapon attack: '+this.weapon[0]+' and durability: ' + this.weapon[1], 175, 15);
	}
	
	swordPickup(){
		this.weapon[0] = depth+1;
		this.weapon[1] = Math.round(random(1, 4));
	}
	
	fight(){
		if(this.weapon[0]>=depth && this.weapon[1]>0){
			this.money+=Math.round(random(10, 20));
			this.weapon[1]--;
		}
		else {
			this.dead = true;
		}
	}
	
	drawMoney(){
		text('Money: '+this.money, 330, 385);
	}
	
	respawn(){
		this.weapon[0]=0;
		this.weapon[1]=0;
		this.money= 51;
		this.xPos = 200;
		this.yPos = 200;
		this.dead = false;
	}
}