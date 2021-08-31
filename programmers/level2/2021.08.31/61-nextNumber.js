function solution(n) {
  let answer = 0;
  let num = n + 1;
  let binaryN = n.toString(2);
  let binaryNum = num.toString(2);
  let countN = 0;
  let countNum = 0;

  for (let j = 0; j < binaryN.length; j++) {
    if (binaryN[j] === '1') {
      countN++;
    }
  }

  while (true) {
    countNum = 0;
    binaryNum = num.toString(2);
    for (let i = 0; i < binaryNum.length; i++) {
      if (binaryNum[i] === '1') {
        countNum++;
      }
    }

    if (countN === countNum) {
      answer = num;
      break;
    }
    num++;
  }
  return answer;
}

console.log(solution(15));
