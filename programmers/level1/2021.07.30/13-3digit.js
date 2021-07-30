function solution(n) {
  let answer;
  let tempString1 = '';
  let tempString2 = '';
  tempString1 = n.toString(3);
  for (let i = tempString1.length - 1; i >= 0; i--) {
    tempString2 += tempString1[i];
  }
  tempString2 = Number.parseInt(tempString2, 3);
  answer = Number.parseInt(tempString2.toString(10), 10);

  return answer;
}

function solution2(n) {
  let answer = parseInt(n.toString(3).split('').reverse().join(''), 3);
  return answer;
}

console.log(solution2(45));
