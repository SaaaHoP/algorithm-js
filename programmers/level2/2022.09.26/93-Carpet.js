function solution(brown, yellow) {
  const answer = [];

  let width = 1;
  let height = 1;

  const addedNumber = brown + yellow;

  for (let i = 1; i <= addedNumber; i++) {
    if (addedNumber % i === 0) {
      width = i;
    }

    height = addedNumber / width;

    if (2 * width + 2 * height - 4 === brown && width >= height) {
      answer.push(width);
      answer.push(height);
      break;
    }
  }
  return answer;
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
console.log(solution(16, 8)); //[8, 3]
console.log(solution(50, 22)); //[24, 3]
// [6, 4];
// OOOOOO
// OXXXXO
// OXXXXO
// OOOOOO
