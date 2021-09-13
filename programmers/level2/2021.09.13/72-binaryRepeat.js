function solution(s) {
  let answer = [];
  let binary = s;
  let tempString = '';
  let repeatCount = 0;
  let zeroCount = 0;

  while (binary.length > 1) {
    tempString = '';
    for (let i = 0; i < binary.length; i++) {
      if (binary[i] === '0') {
        zeroCount++;
      } else {
        tempString += binary[i];
      }
    }
    binary = tempString.length.toString(2);
    repeatCount++;
  }
  answer.push(repeatCount, zeroCount);
  return answer;
}

console.log(solution('110010101001'));
