function solution(n) {
  let ans = 0;

  while (n < 0) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = n - 1;
      n = n / 2;
      ans++;
    }
  }

  return ans;
}
