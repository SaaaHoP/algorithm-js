function solution(dartResult) {
  let answer = 0;
  let previous = 0;
  let current = 0;

  const score = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  for (let i = 0; i < dartResult.length; i++) {
    if (score.includes(dartResult[i])) {
      if (dartResult[i - 1] === '1' && dartResult[i] === '0') {
        continue;
      }
      if (dartResult[i + 1] == '0') {
        answer += current;
        previous = current;
        current = 10;
      } else {
        answer += current;
        previous = current;
        current = parseInt(dartResult[i]);
      }
    }

    if (dartResult[i] === 'S') {
      current = Math.pow(current, 1);
    } else if (dartResult[i] === 'D') {
      current = Math.pow(current, 2);
    } else if (dartResult[i] === 'T') {
      current = Math.pow(current, 3);
    }

    if (dartResult[i] === '*') {
      answer -= previous;
      previous = previous * 2;
      current = current * 2;
      answer += previous;
    } else if (dartResult[i] === '#') {
      current = current * -1;
    }

    if (i === dartResult.length - 1) {
      answer += current;
    }
  }
  return answer;
}

console.log(solution('10S10S10S'));
