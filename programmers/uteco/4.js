function solution(s) {
  const answer = [];
  let temp = s[0];
  let count = 0;
  let tempString = '';
  let string = '';
  if (s[0] !== s[s.length - 1]) {
    for (let i = 0; i < s.length; i++) {
      if (temp === s[i]) {
        count++;
      } else {
        answer.push(count);
        count = 0;
        temp = s[i];
        count++;
      }
    }
    answer.push(count);
  } else {
    for (let j = 0; j < s.length; j++) {
      if (s[0] === s[j]) {
        tempString += s[j];
        count++;
      } else {
        break;
      }
    }
    string = s.slice(count, s.length) + tempString;
    count = 0;
    temp = string[0];
    for (let i = 0; i < string.length; i++) {
      if (temp === string[i]) {
        count++;
      } else {
        answer.push(count);
        count = 0;
        temp = string[i];
        count++;
      }
    }
    answer.push(count);
  }
  answer.sort();
  return answer;
}
