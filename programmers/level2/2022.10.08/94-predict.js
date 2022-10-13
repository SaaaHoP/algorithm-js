function solution(n, a, b) {
  var answer = 0;

  let big = Math.max(a, b);
  let small = Math.min(a, b);

  while (big !== small) {
    small = Math.ceil(small / 2);
    big = Math.ceil(big / 2);

    answer++;
  }

  return answer;
}

console.log(solution(8, 4, 5));
