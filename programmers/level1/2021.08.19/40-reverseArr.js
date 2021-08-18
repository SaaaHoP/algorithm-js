function solution(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .map((v) => {
      return parseInt(v);
    });
}

console.log(solution(12345));
