function solution(progresses, speeds) {
  var answer = [];
  const days = progresses.map((progress, idx) =>
    Math.ceil((100 - progress) / speeds[idx])
  );

  let fixedDay = days[0];
  let count = 1;

  for (let j = 0; j < days.length; j++) {
    if (fixedDay >= days[j + 1]) {
      count++;
      continue;
    }
    fixedDay = days[j + 1];
    answer.push(count);
    count = 1;
  }

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));

// console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
