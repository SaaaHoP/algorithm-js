function solution(citations) {
  var answer = 0;

  const sortedArr = citations.sort((a, b) => b - a);
  let h = 0;

  while (h <= sortedArr[h]) h++;
  answer = h;

  return answer;
}

console.log(solution([3, 0, 6, 1, 5]));
console.log(solution([6, 5, 5, 5, 3, 2, 1, 0]));
console.log(solution([5, 5, 5]));

// 0 1 2 3 5 5 5 6

// 4
