function solution(s) {
  var answer = 0;
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  if (stack.length === 0) {
    answer = 1;
  }

  return answer;
}

console.log(solution(''));
