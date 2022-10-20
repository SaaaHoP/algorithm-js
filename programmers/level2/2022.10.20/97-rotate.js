function solution(s) {
  const checkStack = (array) => {
    const stack = [];

    for (let j = 0; j < array.length; j++) {
      stack.push(array[j]);

      if (stack[stack.length - 2] === '[' && stack[stack.length - 1] === ']') {
        stack.pop();
        stack.pop();
        continue;
      }

      if (stack[stack.length - 2] === '{' && stack[stack.length - 1] === '}') {
        stack.pop();
        stack.pop();
        continue;
      }

      if (stack[stack.length - 2] === '(' && stack[stack.length - 1] === ')') {
        stack.pop();
        stack.pop();
      }
    }

    if (stack.length === 0) {
      return true;
    }
    return false;
  };

  let answer = 0;
  const arr = s.split('');

  for (let i = 0; i < arr.length - 1; i++) {
    if (checkStack(arr)) {
      answer++;
    }

    const item = arr.shift();
    arr.push(item);
  }

  return answer;
}

console.log(solution('[](){}'));
