function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    let tempArr = [];
    tempArr = array.slice(commands[i][0] - 1, commands[i][1]);
    tempArr.sort((a, b) => a - b);
    answer.push(tempArr[commands[i][2] - 1]);
  }
  return answer;
}

function solution2(array, commands) {
  let answer = [];
  commands.forEach((command) => {
    const [index1, index2, kNmber] = command;
    const tempArr = array.slice(index1 - 1, index2).sort((a, b) => a - b);
    answer.push(tempArr[kNmber - 1]);
  });
  return answer;
}

function solution3(array, commands) {
  return commands.map((command) => {
    const [index1, index2, kNmber] = command;
    const tempArr = array.slice(index1 - 1, index2).sort((a, b) => a - b);
    return tempArr[kNmber - 1];
  });
}

console.log(
  solution3(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
