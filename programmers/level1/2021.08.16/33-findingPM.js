function solution(n) {
  var answer = 0;
  let tempArr = [];
  for (let i = 0; i <= n; i++) {
    tempArr.push(i);
  }
  tempArr[1] = 0;

  for (let j = 2; j <= n; j++) {
    if (tempArr[j] === 0) {
      continue;
    }
    for (let k = j + j; k <= n; k += j) {
      tempArr[k] = 0;
    }
  }

  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i] !== 0) {
      answer++;
    }
  }

  return answer;
}

console.log(solution(10));
