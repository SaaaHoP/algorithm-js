function solution(numbers, target) {
  let answer = 0;

  function getAnswer(idx, sum) {
    if (idx < numbers.length) {
      getAnswer(idx + 1, sum + numbers[idx]);
      getAnswer(idx + 1, sum - numbers[idx]);
    } else {
      if (sum === target) {
        answer++;
      }
    }
  }

  getAnswer(0, 0);

  return answer;
}

console.log(solution([4, 1, 2, 1], 4));
