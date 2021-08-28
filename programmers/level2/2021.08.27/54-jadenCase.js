function solution(s) {
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      answer += ' ';
      continue;
    } else {
      if (s[i - 1] === ' ' || s[i - 1] === undefined) {
        answer += s[i].toUpperCase();
      } else {
        answer += s[i].toLowerCase();
      }
    }
  }
  return answer;
}

function solution2(s) {
  return s
    .split(' ')
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(' ');
}

console.log(solution2('3people   unFollowed me'));
