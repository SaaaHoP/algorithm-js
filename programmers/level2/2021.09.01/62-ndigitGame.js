function solution(n, t, m, p) {
  let answer = '';
  let num = 0;
  let nDigit = num.toString(n).toUpperCase();
  let j = 0;

  for (let k = 0; k < t; k++) {
    for (let i = 1; i <= m; i++) {
      if (j < nDigit.length) {
        if (i === p) {
          answer += nDigit[j];
        }
        j++;
      } else {
        num++;
        j = 0;
        nDigit = num.toString(n).toUpperCase();
        if (i === p) {
          answer += nDigit[j];
        }
        j++;
      }
    }
  }
  return answer;
}

console.log(solution(16, 16, 2, 2));
