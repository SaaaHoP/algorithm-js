function solution(priorities, location) {
  var answer = 0;

  const objArr = priorities.map((priority, idx) => {
    return {
      priority,
      location: idx,
    };
  });

  const resultArr = [];

  while (priorities.length !== 0) {
    if (priorities[0] >= Math.max(...priorities)) {
      priorities.shift();
      resultArr.push(objArr.shift());
      continue;
    }

    priorities.push(priorities.shift());
    objArr.push(objArr.shift());
  }

  for (let i = 0; i < resultArr.length; i++) {
    if (resultArr[i].location === location) {
      answer = i + 1;
      break;
    }
  }

  return answer;
}

console.log(solution([2, 1, 3, 2], 2));
