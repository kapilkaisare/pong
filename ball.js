const Ball = function() {
    Entity.call(this)

    this.width = 20
    this.height = 20

    this.reset()

}

Ball.prototype = Object.create(Entity.prototype)
Ball.prototype.constructor = Ball

Ball.prototype.reset = function() {
    const min = -5
    const max = 5

    this.x = (pong.width / 2) - this.width
    this.y = (pong.height / 2) - this.height

    this.yVelocity = Math.floor(Math.random() * (max - min + 1) + min)
    this.xVelocity = Math.random() > 0.5 ? 5 : -5
}

Ball.prototype.rebound = function(hitter) {
    this.xVelocity = this.xVelocity * -1.1
    this.yVelocity = this.yVelocity * -1.1 + (hitter.yVelocity / 4)
}

Ball.prototype.update = function() {
    let hitter;

    Entity.prototype.update.apply(this, arguments)

    if (
        (this.y > (pong.height - this.height)) ||
        (this.y < 0)
    ) {
        this.yVelocity = this.yVelocity * -1
    }

    if (this.x > pong.width) {
        pong.player.score = pong.player.score + 1
        this.reset();
    } else if (this.x < 0) {
        pong.npc.score = pong.npc.score + 1
        this.reset();
    }

    if (this.intersect(pong.npc)) {
        hitter = pong.npc
    } else if (this.intersect(pong.player)) {
        hitter = pong.player
    }

    if (hitter) {
        this.rebound(hitter);
    }
}