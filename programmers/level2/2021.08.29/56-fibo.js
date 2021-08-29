function solution(a) {
  let arr = [];
  arr.push(0);
  arr.push(1);
  arr.push(1);
  for (let i = 3; i <= a; i++) {
    arr.push((arr[i - 1] + arr[i - 2]) % 1234567);
  }
  return arr[a];
}

console.log(solution(4));
