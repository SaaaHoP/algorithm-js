function solution(lottos, win_nums) {
  var answer = [];
  let count = 0;
  let zeroCount = 0;
  for (let i = 0; i < win_nums.length; i++) {
    if (lottos.includes(win_nums[i])) {
      count++;
    }
    if (lottos[i] === 0) {
      zeroCount++;
    }
  }

  if (count === 0 && zeroCount === 0) {
    answer.push(6);
    answer.push(6);
  } else if (zeroCount === 6) {
    answer.push(1);
    answer.push(6);
  } else if (count === 0) {
    answer.push(7 - zeroCount);
    answer.push(6);
  } else {
    answer.push(7 - count - zeroCount);
    answer.push(7 - count);
  }

  return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
