function solution(n) {
  const arr = [];
  arr[1] = 1;
  arr[2] = 2;

  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
  }

  return arr[n] % 1234567;
}

// console.log(solution(4));
console.log(solution(3));
