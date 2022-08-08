function solution(w, h) {
  var answer = 0;

  for (let i = 1; i < w; i++) {
    answer += Math.floor((h * i) / w);
  }

  answer *= 2;

  return answer;
}

console.log(solution(8, 12));
