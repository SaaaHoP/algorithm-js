function solution(k, tangerine) {
  var answer = 0;
  const obj = {};

  tangerine.forEach((v) => (obj[v] = (obj[v] ?? 0) + 1));

  const arr = Object.values(obj).sort((a, b) => b - a);

  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (k <= 0) {
      break;
    }
    k -= arr[i];
    answer++;
  }

  return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
