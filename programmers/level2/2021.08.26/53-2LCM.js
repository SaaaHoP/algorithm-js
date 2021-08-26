function solution(arr) {
  while (arr.length > 1) {
    let a = arr.pop();
    let b = arr.pop();
    arr.push(lcm(a, b));
  }

  return arr.pop();
}

function lcm(a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  let temp = 1;
  for (let i = 1; i <= min; i++) {
    if (max % i === 0 && min % i === 0) {
      temp = i;
    }
  }
  return (a * b) / temp;
}

console.log(solution([3, 4, 9, 16]));
