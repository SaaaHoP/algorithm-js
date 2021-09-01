function solution(s) {
  let lCount = 0;
  let rCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[0] === ')') {
      return false;
    }
    if (s[i] === '(') {
      lCount++;
    } else {
      rCount++;
    }

    if (lCount < rCount) {
      return false;
    }
  }

  if (lCount === rCount) {
    return true;
  } else {
    return false;
  }
}
