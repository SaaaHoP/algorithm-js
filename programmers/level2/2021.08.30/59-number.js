function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    let temp = 0;
    let inum = i;
    while (true) {
      temp += inum;
      if (temp === n) {
        answer++;
        break;
      } else if (temp > n) {
        break;
      }
      inum++;
    }
  }
  return answer;
}

//효울성 통과 안됨
function solution2(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    let temp = 0;
    for (let j = i; j <= n; j++) {
      temp += j;
      if (temp === n) {
        answer++;
        break;
      } else if (temp > n) {
        break;
      }
    }
  }
  return answer;
}

//이건 통과함
function solution3(n) {
  let answer = 0;
  let temp = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      temp += j;
      if (temp === n) {
        answer++;
        temp = 0;
        break;
      } else if (temp > n) {
        temp = 0;

        break;
      }
    }
  }
  return answer;
}
