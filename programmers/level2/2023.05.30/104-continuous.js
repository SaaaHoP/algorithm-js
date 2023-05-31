function solution(elements) {
  var answer = 0;

  const arr = [...elements, ...elements];
  const length = elements.length;
  const sumArr = [];

  for (let j = 1; j <= length; j++) {
    for (let i = 0; i < length; i++) {
      const sum = arr.slice(i, i + j).reduce((prev, cur) => prev + cur);
      sumArr.push(sum);
    }
  }

  answer = new Set(sumArr).size;

  return answer;
}

console.log(solution([7, 9, 1, 1, 4]));
