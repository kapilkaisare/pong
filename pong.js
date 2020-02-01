const gameBoard = document.getElementById('gameboard')
const pong = new Game(gameBoard)

pong.entities = [
    pong.background = new Background(),
    pong.ball = new Ball(),
    pong.player = new Player(),
    pong.npc = new NPC()
]

pong.start()
gameBoard.focus()
