function solution(n) {
  let answer = 0;
  const temp = n.toString();
  for (let i = 0; i < temp.length; i++) {
    answer += parseInt(temp[i]);
  }
  return answer;
}

console.log(solution(123));
