function solution(new_id) {
  // 1단계
  let answer = new_id.toLocaleLowerCase();
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const number = '1234567890';

  //2단계
  for (let i = answer.length - 1; i >= 0; i--) {
    if (!alphabet.includes(answer[i]) && !number.includes(answer[i])) {
      if (answer[i] !== '-' && answer[i] !== '_' && answer[i] !== '.') {
        answer = answer.replace(answer[i], '');
      }
    }
  }

  //3단계
  for (let i = answer.length - 1; i >= 0; i--) {
    answer = answer.replace('..', '.');
  }

  //4단계
  if (answer[0] === '.') {
    answer = answer.substring(1);
  }

  //4단계
  if (answer[answer.length - 1] === '.') {
    answer = answer.substring(0, answer.length - 1);
  }

  //5단계
  if (answer === '') {
    answer += 'a';
  }

  //6단계
  if (answer.length >= 16) {
    answer = answer.substring(0, 15);
    if (answer[answer.length - 1] === '.') {
      answer = answer.substring(0, answer.length - 1);
    }
  }

  //7단계
  if (answer.length <= 2) {
    for (let j = answer.length; j < 3; j++) {
      answer += answer[answer.length - 1];
    }
  }

  return answer;
}

console.log(solution('z-+.^.'));
