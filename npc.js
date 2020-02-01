const NPC = function() {
    Paddle.call(this)

    this.x = pong.width - this.width - 20
}

NPC.prototype = Object.create(Paddle.prototype)
NPC.prototype.constructor = NPC

NPC.prototype.update = function() {
    const speedDifferential = 5

    if (this.y < pong.ball.y) {
        this.yVelocity = speedDifferential
    } else if (this.y > pong.ball.y) {
        this.yVelocity = -speedDifferential
    } else {
        this.yVelocity = 0
    }

    Paddle.prototype.update.apply(this, arguments)
}