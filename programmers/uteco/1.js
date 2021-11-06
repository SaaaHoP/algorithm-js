function solution(arr) {
  const answer = [];
  let oneC = 0;
  let twoC = 0;
  let thrC = 0;

  arr.forEach((v) => {
    v === 1 && oneC++;
    v === 2 && twoC++;
    v === 3 && thrC++;
  });

  let max = Math.max(oneC, twoC, thrC);

  oneC === max ? answer.push(0) : answer.push(max - oneC);
  twoC === max ? answer.push(0) : answer.push(max - twoC);
  thrC === max ? answer.push(0) : answer.push(max - thrC);

  return answer;
}
