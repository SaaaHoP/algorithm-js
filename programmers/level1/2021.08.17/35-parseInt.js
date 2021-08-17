function solution(s) {
  if (s.charAt(0) === '-') {
    return -parseInt(s.substring(1));
  } else {
    return parseInt(s);
  }
}
