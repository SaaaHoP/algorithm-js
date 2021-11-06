function solution(rows, columns) {
  const answer = [];
  let r = 0;
  let c = 0;
  let val = 1;
  for (let i = 0; i < rows; i++) {
    answer.push(new Array(columns).fill(0));
  }
  answer[r][c] = val;

  let tempArr = answer;

  while (tempArr.flat().includes(0)) {
    if (rows === columns) {
      if (val % 2 === 0) {
        r++;
        if (r === rows) {
          r = 0;
        }
      } else {
        c++;
        if (c === columns) {
          c = 0;
        }
      }
      if (r === 0 && c === 0) break;
      answer[r][c] = ++val;
    } else {
      if (val % 2 === 0) {
        r++;
        if (r === rows) {
          r = 0;
        }
      } else {
        c++;
        if (c === columns) {
          c = 0;
        }
      }
      answer[r][c] = ++val;
    }
  }

  return answer;
}
