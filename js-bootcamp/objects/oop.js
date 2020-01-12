// 1. Create a constructor function for the hangman game
// 2. Setup two attributes, One for the word itself. Another for the number of guesses allowed.
// 3. Creeate two instances of it and print both to the console

const hangGame = function(word, renmainingGuesses) {
  this.word = word
  this.renmainingGuesses = renmainingGuesses
}

const game1 = new hangGame('Cat',)
console.log(game1)

const game2 = new hangGame('New York', 4)