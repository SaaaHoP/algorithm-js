function solution(n, lost, reserve) {
  let answer = n - lost.length;

  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  //중복 제거
  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      if (lost[i] === reserve[j]) {
        answer++;
        lost[i] = -1;
        reserve[j] = -1;
        break;
      }
    }
  }

  console.log(lost, reserve);

  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      if (lost[i] - 1 === reserve[j] || lost[i] + 1 === reserve[j]) {
        answer++;
        reserve[j] = -1;
        break;
      }
    }
  }

  return answer;
}

console.log(solution(10, [1, 3, 5, 7], [3, 5, 6, 8]));
