const Player = function() {
    Paddle.call(this)

    this.x = 20
}

Player.prototype = Object.create(Paddle.prototype)
Player.prototype.constructor = Player

Player.prototype.update = function() {

    const speedDifferential = 15

    if (pong.keyPressed.up) {
        this.yVelocity = -speedDifferential
    } else if (pong.keyPressed.down) {
        this.yVelocity = speedDifferential
    } else {
        this.yVelocity = 0
    }

    Paddle.prototype.update.apply(this, arguments)
}