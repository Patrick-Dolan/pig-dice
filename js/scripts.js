console.log("Scripts Loaded");
// Business Logic
function rollDice() {
  return Math.floor((Math.random() * 6 ) + 1);
}
// Player Business Logic
function Player(name) {
  this.name = name;
  this.score = 0;
  this.turns = 0;
}
// Game Business Logic
function Game() {
  this.players = [player1, player2];
}

// Global Variables
const player1 = new Player("Branden");
const player2 = new Player("Patrick");
const game = new Game();