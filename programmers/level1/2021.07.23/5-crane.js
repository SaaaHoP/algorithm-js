function solution(board, moves) {
  let answer = 0;
  let basket = [];
  let newArr = [];

  for (let i = 0; i < board.length; i++) {
    newArr[i] = [];
    for (let j = 0; j < board.length; j++) {
      if (board[board.length - 1 - j][i] === 0) {
        continue;
      } else {
        newArr[i][j] = board[board.length - 1 - j][i];
      }
    }
  }

  for (let k = 0; k < moves.length; k++) {
    let pops = newArr[moves[k] - 1].pop();
    if (pops === undefined) {
      continue;
    } else if (basket[basket.length - 1] === pops) {
      basket.pop();
      answer++;
      continue;
    }
    basket.push(pops);
  }
  return answer * 2;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
