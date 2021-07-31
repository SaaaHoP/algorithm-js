function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let temp = 0;
      temp = numbers[i] + numbers[j];
      if (!answer.includes(temp)) {
        answer.push(temp);
      }
    }
  }
  answer.sort((a, b) => a - b);
  return answer;
}

function solution2(numbers) {
  let temp = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }
  //set을 배열로 만들때 ... 스프레드 연산자 사용해야 한다.
  const answer = [...new Set(temp)];
  answer.sort((a, b) => a - b);
  return answer;
}

console.log(solution2([5, 0, 2, 7]));
