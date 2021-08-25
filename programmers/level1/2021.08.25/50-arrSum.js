function solution(arr1, arr2) {
  var answer = new Array(arr1.length);
  for (let i = 0; i < arr1.length; i++) {
    answer[i] = new Array(arr1[0].length);
  }
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return answer;
}

function solution2(arr1, arr2) {
  return arr1.map((v1, i1) => v1.map((v2, i2) => v2 + arr2[i1][i2]));
}

console.log(
  solution2(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);
