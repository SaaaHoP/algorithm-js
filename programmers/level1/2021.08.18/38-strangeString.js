function solution(s) {
  let tempArr = s.split(' ');
  let answerArr = [];
  for (let i = 0; i < tempArr.length; i++) {
    let tempStr = '';
    for (let j = 0; j < tempArr[i].length; j++) {
      if (j % 2 === 0) {
        tempStr += tempArr[i][j].toUpperCase();
      } else {
        tempStr += tempArr[i][j].toLowerCase();
      }
    }
    answerArr.push(tempStr);
  }

  return answerArr.join(' ');
}

console.log(solution('try hello world'));
