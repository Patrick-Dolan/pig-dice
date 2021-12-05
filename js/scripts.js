console.log("Scripts Loaded");
// Business Logic
function rollDice() {
  return Math.floor((Math.random() * 6 ) + 1);
}
// Player Business Logic
function Player(name) {
  this.name = name;
  this.score = 0;
  this.turns = [];
  
}
// Game Business Logic
function Game() {
  this.players = [player1, player2];
  //this.curPlayer = [];
}

Game.prototype.checkRoll = function() {
  let rollValue = rollDice();
  if (rollValue > 1) {
    this.curPlayer.turns[this.curPlayer.turns.length - 1].push(rollValue);
  } else {
    console.log("rolled a 1");
  }
}

Game.prototype.turnChange = function() {
    let nextTurn = Infinity;
    let currentPlayer;
    this.players.forEach(function(player) {
      if (player.turns.length < nextTurn) {
        currentPlayer = player;
        nextTurn = player.turns.length;
      }
    });
    this.curPlayer = currentPlayer;
    this.curPlayer.turns.push([])
};



// Global Variables
const player1 = new Player("Branden");
const player2 = new Player("Patrick");
const game = new Game();