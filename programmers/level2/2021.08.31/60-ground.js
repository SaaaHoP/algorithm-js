function solution(land) {
  for (let i = 1; i < land.length; i++) {
    land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
    land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
    land[i][2] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3]);
    land[i][3] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]);
  }
  return Math.max(...land[land.length - 1]);
}

// function solution2(land) {
//   let answer = 0;
//   let index = 999;

//   for (let i = 0; i < 4; i++) {
//     let temp = 0;
//     temp += land[0][i];
//     index = i;
//     for (let j = 0; j < land.length; j++) {
//       for (let k = 0; k < 4; k++) {
//         if (k === index) {
//           continue;
//         } else {
//           temp += land[j][k];
//           index = k;
//           break;
//         }
//       }
//     }
//     if (temp >= answer) {
//       answer = temp;
//     }
//   }
//   return answer;
// }

console.log(
  solution([
    [4, 3, 2, 1],
    [2, 2, 2, 1],
    [6, 6, 6, 4],
    [8, 7, 6, 5],
  ])
);
