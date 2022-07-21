function solution(numbers) {
  var answer = 0;

  const NUMBER_LIST = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  NUMBER_LIST.forEach((number) => {
    if (!numbers.includes(number)) {
      answer += number;
    }
  });
  return answer;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
