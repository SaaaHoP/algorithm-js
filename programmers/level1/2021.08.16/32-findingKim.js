function solution(seoul) {
  let answer = '';
  seoul.forEach((v, i) => {
    if (v === 'Kim') {
      answer = `김서방은 ${i}에 있다`;
    }
  });
  return answer;
}
