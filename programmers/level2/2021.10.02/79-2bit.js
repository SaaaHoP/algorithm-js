function solution(numbers) {
  let answer = [];
  let digitNumber;

  for (let i = 0; i < numbers.length; i++) {
    digitNumber = '0' + numbers[i].toString(2);
    if (digitNumber[digitNumber.length - 1] === '0') {
      answer.push(numbers[i] + 1);
    } else {
      for (let j = digitNumber.length; j >= 0; j--) {
        if (digitNumber[j] === '0') {
          answer.push(
            parseInt(
              digitNumber.substring(0, j) +
                '10' +
                digitNumber.substring(j + 2, digitNumber.length),
              2
            )
          );
          break;
        }
      }
    }
  }

  return answer;
}

console.log(
  solution([
    1001, 337, 0, 1, 333, 673, 343, 221, 898, 997, 121, 1015, 665, 779, 891,
    421, 222, 256, 512, 128, 100,
  ])
);
