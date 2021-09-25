function solution(n) {
  let temp = new Array(n).fill(0).map((v, i) => new Array(i + 1));

  let count = 0;
  let x = 0;
  let y = -1;

  while (n > 0) {
    for (let i = 0; i < n; i++) temp[++y][x] = ++count;
    for (let j = 0; j < n - 1; j++) temp[y][++x] = ++count;
    for (let k = 0; k < n - 2; k++) temp[--y][--x] = ++count;
    n -= 3;
  }
  //flat은 숫자 깊이 조건을 받아 평탄화 시켜준다
  temp = temp.flat(1);

  //   temp.forEach((v) => v.forEach((v) => answer.push(v)));

  return temp;
}

console.log(solution(4));
