function solution(arr) {
  const minIndex = arr.indexOf(Math.min(...arr));
  arr.splice(minIndex, 1);

  if (arr.length < 2) {
    return [-1];
  }
  return arr;
}

console.log(solution([4, 3, 2, 1, 2, 4, 2]));
