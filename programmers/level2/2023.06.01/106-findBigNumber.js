function solution(numbers) {
  const answer = Array(numbers.length).fill(-1);
  const idxs = [];

  for (let i = 0; i < numbers.length; i++) {
    while (idxs.length && numbers[idxs[idxs.length - 1]] < numbers[i]) {
      answer[idxs.pop()] = numbers[i];
    }
    idxs.push(i);
    console.log(idxs);
  }

  return answer;
}

console.log(solution([9, 1, 5, 3, 6, 2]));
