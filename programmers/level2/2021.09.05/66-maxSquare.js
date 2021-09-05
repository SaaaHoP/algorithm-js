function solution(board) {
  let answer = 0;

  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[0].length; j++) {
      if (board[i][j] > 0) {
        board[i][j] =
          Math.min(board[i - 1][j - 1], board[i][j - 1], board[i - 1][j]) + 1;
        if (answer < board[i][j]) {
          answer = board[i][j];
        }
      }
    }
  }

  if (board.length === 1) {
    if (board[0].includes(1)) {
      answer = 1;
    }
  }

  return answer * answer;
}

console.log(
  solution([
    [0, 1, 1, 0],
    [0, 1, 0, 1],
  ])
);
