function solution(a, b) {
  let answer = 0;
  a.sort((a, b) => a - b);
  b.sort((a, b) => b - a);

  a.forEach((v, i) => {
    answer += v * b[i];
  });

  return answer;
}
