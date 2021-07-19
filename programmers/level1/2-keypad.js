//2번문제 푸는중...
function solution(numbers, hand) {
  let result = '';
  let currentLeft = 0;
  let currentRight = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
      result += 'L';
      currentLeft = numbers[i];
    } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
      result += 'R';
      currentRight = numbers[i];
    } else {
      if (hand === 'right') {
        if (
          Math.abs(numbers[i] - currentLeft) ===
          Math.abs(numbers[i] - currentRight)
        ) {
          result += 'R';
          currentRight = numbers[i];
        } else if (
          Math.abs(numbers[i] - currentLeft) <
          Math.abs(numbers[i] - currentRight)
        ) {
          result += 'L';
          currentLeft = numbers[i];
        } else {
          result += 'R';
          currentRight = numbers[i];
        }
      } else {
        if (
          Math.abs(numbers[i] - currentLeft) ===
          Math.abs(numbers[i] - currentRight)
        ) {
          result += 'L';
          currentLeft = numbers[i];
        } else if (
          Math.abs(numbers[i] - currentLeft) <
          Math.abs(numbers[i] - currentRight)
        ) {
          result += 'L';
          currentLeft = numbers[i];
        } else {
          result += 'R';
          currentRight = numbers[i];
        }
      }
    }
  }
  return result;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
