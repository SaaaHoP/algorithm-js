function solution(s) {
  let answer = s;
  const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const numberEng = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  for (let j = 0; j < numberEng.length; j++) {
    if (answer.includes(numberEng[j])) {
      let regExp = new RegExp(numberEng[j], 'g');
      answer = answer.replace(regExp, number[j]);
    }
  }
  answer = parseInt(answer);
  return answer;
}

console.log(solution('1zerotwozero3'));
