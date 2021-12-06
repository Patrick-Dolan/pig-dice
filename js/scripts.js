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
  this.players = [player1, player2, player3];
}

Game.prototype.checkRoll = function() {
  let rollValue = rollDice();
  if (rollValue > 1) {
    this.curPlayer.turns[this.curPlayer.turns.length - 1].push(rollValue);
    console.log(this.curPlayer.turns);
  } else {
    console.log("rolled a 1");
    this.curPlayer.turns[this.curPlayer.turns.length - 1].push(rollValue);
    //this.turnChange();
  }
};

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

Game.prototype.scoreTotal = function() {
  let scoreTotal = 0;
  for (let i = 0; i < this.curPlayer.turns.length; i++) {
    if (this.curPlayer.turns[i].includes(1)) {
      console.log("Includes a 1")
    } else {
      scoreTotal += this.curPlayer.turns[i].reduce((a, b) => a + b, 0);
    }
  }
  this.curPlayer.score = scoreTotal;
};

// Global Variables
const player1 = new Player("Branden");
const player2 = new Player("Patrick");
const player3 = new Player("Jack");
const game = new Game();