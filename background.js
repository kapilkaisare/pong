const Background = function() {

}

Background.prototype.draw = function(context) {
    context.fillStyle = '#000000'
    context.fillRect(0, 0, pong.width, pong.height)

    context.fillStyle = '#ffffff'
    context.font = '40px monospace'
    context.fillText(pong.player.score, pong.width * (3/8), 50)
    context.fillText(pong.npc.score, pong.width * (5/8), 50)
}

Background.prototype.update = function(context) {

}