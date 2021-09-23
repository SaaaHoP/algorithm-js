function solution(n, words) {
  let answer = [0, 0];
  let dic = [words[0]];
  let number = 1;
  let turn = 1;
  let lastWord;

  for (let i = 1; i < words.length; i++) {
    lastWord = dic[dic.length - 1];

    if (dic.includes(words[i])) {
      number++;
      if (i % n === 0) {
        number = 1;
        turn++;
      }
      answer[0] = number;
      answer[1] = turn;
      break;
    } else {
      if (lastWord.charAt(lastWord.length - 1) === words[i].charAt(0)) {
        number++;
        dic.push(words[i]);
      } else {
        number++;
        if (i % n === 0) {
          number = 1;
          turn++;
        }
        answer[0] = number;
        answer[1] = turn;
        break;
      }
    }
    if (i % n === 0) {
      number = 1;
      turn++;
    }
  }
  return answer;
}

console.log(solution(2, ['land', 'dream', 'mom', 'mom']));
