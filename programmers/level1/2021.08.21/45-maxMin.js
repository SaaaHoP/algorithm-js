function solution(n, m) {
  let answer = [];
  const maxNum = Math.max(n, m);
  const minNum = Math.min(n, m);
  let max = 1;
  let min = 1;

  for (let i = 1; i <= minNum; i++) {
    if (maxNum % i === 0 && minNum % i === 0) {
      max = i;
    }
  }
  answer.push(max);

  min = (maxNum * minNum) / max;
  answer.push(min);

  return answer;
}

console.log(solution(3, 27));
