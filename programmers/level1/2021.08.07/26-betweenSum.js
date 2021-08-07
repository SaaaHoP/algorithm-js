function solution(a, b) {
  let answer = 0;
  let maxNum = Math.max(a, b);
  let minNum = Math.min(a, b);

  for (let i = minNum; i <= maxNum; i++) {
    answer += i;
  }

  return answer;
}
