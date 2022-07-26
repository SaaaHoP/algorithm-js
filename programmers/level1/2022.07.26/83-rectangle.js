function solution(sizes) {
  const widthArr = [];
  const heightArr = [];

  sizes.forEach((size) => {
    size.sort((a, b) => a - b);
  });

  for (let i = 0; i < sizes.length; i++) {
    widthArr.push(sizes[i][0]);
    heightArr.push(sizes[i][1]);
  }

  return Math.max(...widthArr) * Math.max(...heightArr);
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
