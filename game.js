const Game = function (canvas) {
    this.context = canvas.getContext('2d')
    this.width = canvas.width
    this.height = canvas.height

    this.keyPressed = {}

    this.registerKeyEvents(canvas)
}

Game.prototype.keys = {
    32: 'space',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
}

Game.prototype.registerKeyEvents = function(canvas) {
    const that = this

    const keyHandler = (e) => {
        const keyName = that.keys[e.which]
        if (keyName) {
            that.keyPressed[keyName] = e.type === 'keydown'
            e.preventDefault()
        }
    }

    canvas.addEventListener('keydown', keyHandler)
    canvas.addEventListener('keyup', keyHandler)
}

Game.prototype.start = function() {
    const that = this
    const fps = 60
    const interval = 1000 / fps

    setInterval(() => {
        that.update()
        that.draw()
    }, interval)
}

Game.prototype.update = function() {
    this.entities.forEach((entity) => {
        if (entity.update) entity.update()
    })
}

Game.prototype.draw = function() {
    const that = this

    this.entities.forEach((entity) => {
        if (entity.draw) entity.draw(that.context)
    })
}


