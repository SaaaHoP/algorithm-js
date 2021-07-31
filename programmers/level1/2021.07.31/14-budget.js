function solution(d, budget) {
  let answer = 0;
  let temp = budget;
  d.sort((a, b) => a - b).forEach((v) => {
    if (temp - v >= 0) {
      temp -= v;
      answer++;
    }
  });
  // for (let i = 0; i < d.length; i++) {
  //   if (temp - d[i] >= 0) {
  //     temp -= d[i];
  //     answer++;
  //   }
  return answer;
}

console.log(solution([2, 2, 3, 3], 10));
