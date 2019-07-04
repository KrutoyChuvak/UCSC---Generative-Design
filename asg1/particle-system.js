let ParticleSystem = function (position) {
	this.start = position.copy();
	this.particles = [];
};

ParticleSystem.prototype.addParticle = function () {
	p = new Particle(this.start);
	this.particles.push(p);
};

ParticleSystem.prototype.run = function () {
	for (let i = this.particles.length - 1; i >= 0; i--) {
		let p = this.particles[i];
		p.run();
		if (p.isDead()) {
			this.particles.splice(i, 1);
		}
	}
};
