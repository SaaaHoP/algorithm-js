function solution(arr) {
  let sum = 0;
  arr.forEach((v) => {
    sum += v;
  });
  return sum / arr.length;
}
