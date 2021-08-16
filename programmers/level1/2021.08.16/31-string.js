function solution(s) {
  const isLength = s.length === 4 || s.length === 6;
  let isNumber = true;

  for (let i = 0; i < s.length; i++) {
    if (isNaN(parseInt(s[i]))) {
      isNumber = false;
      break;
    }
  }

  if (isLength && isNumber) {
    return true;
  } else {
    return false;
  }
}

console.log(solution('2aa134'));
