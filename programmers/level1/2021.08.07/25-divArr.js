function solution(arr, divisor) {
  var answer = [];
  arr.forEach((v) => {
    if (v % divisor === 0) {
      answer.push(v);
    }
  });
  if (answer.length === 0) {
    answer.push(-1);
  }
  answer.sort((a, b) => a - b);
  return answer;
}
