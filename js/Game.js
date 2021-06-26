export default class Game {
  constructor() {
    console.log("Vinesh");
    this.turn = "X";
    this.board = new Array(9).fill(null);
  }
  nextTurn() {
    if (this.turn == "X") {
      this.turn = "O";
    } else {
      this.turn = "X";
    }
  }

  makeMove(i) {
    if (this.endOfGame()) {
      return;
    }
    if (this.board[i]) {
      return;
    }
    this.board[i] = this.turn;
    let winningCombinations = this.findWinningCombinations();
    console.log("Winner", winningCombinations);
    if (!winningCombinations) {
      this.nextTurn();
    }
  }

  findWinningCombinations() {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;

      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] ===
        this.board[c]
      ) {
        return combination;
      }
    }
    return null;
  }
  endOfGame() {
    let winningCombinations = this.findWinningCombinations();
    if (winningCombinations) {
      return true;
    } else {
      return false;
    }
  }
}
