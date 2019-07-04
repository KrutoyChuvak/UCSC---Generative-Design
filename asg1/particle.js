let Particle = function(position) {
	this.acceleration = createVector(0, -0.05);
	this.velocity = createVector(0, random(-10, 0));
	this.position = position.copy();
	this.position.x = position.x + random(492);
	this.scale = 0;
	this.lifespan = 255.0;
	this.alpha = 50;
	this.color = color(random(255), random(255), random(255));
};

Particle.prototype.run = function() {
	this.update();
	this.display();
	if (spectrum[Math.round(this.position.x/41)] === undefined) {
		//honestly should just reword the if to ask for defined numbers
	}
	else {
		this.scale = (spectrum[Math.round(this.position.x/41)])/15;
		this.velocity = createVector(0, -this.scale/2);
		this.alpha += this.scale*30;
	}
};

Particle.prototype.update = function(){
	this.velocity.add(this.acceleration);
	this.position.add(this.velocity);
	this.lifespan -= 3;
	this.scale -= 5;
};

Particle.prototype.display = function () {
	stroke(0, 0);
	fill(this.color);
	this.color.setAlpha(this.lifespan);
	ellipse(this.position.x, this.position.y, 10*this.scale, 10*this.scale);
};

Particle.prototype.isDead = function () {
	if (this.lifespan < 0) {
		return true;
	} else {
		return false;
	}
};


