function solution(N, stages) {
  let answer = [];
  let tempArr = [];
  let tempArr1 = [];
  let stageCount = stages.length;

  for (let i = 1; i <= N; i++) {
    let count = 0;
    for (let j = 0; j < stages.length; j++) {
      if (i === stages[j]) {
        count++;
      }
    }
    if (stageCount === 0) {
      tempArr.push(0);
      tempArr1.push(0);
    } else {
      tempArr.push(count / stageCount);
      tempArr1.push(count / stageCount);
    }

    stageCount -= count;
  }

  tempArr.sort((a, b) => b - a);
  console.log(tempArr);
  console.log(tempArr1);

  for (let a = 0; a < tempArr.length; a++) {
    answer.push(tempArr1.indexOf(tempArr[a]) + 1);
    tempArr1[tempArr1.indexOf(tempArr[a])] = 999;
  }

  return answer;
}

//객체 사용
function solution2(N, stages) {
  let answer = [];
  let tempArr = [];
  let stageCount = stages.length;

  for (let i = 1; i <= N; i++) {
    let count = 0;
    for (let j = 0; j < stages.length; j++) {
      if (i === stages[j]) {
        count++;
      }
    }
    if (stageCount === 0) {
      tempArr.push({
        stage: i,
        rate: 0,
      });
    } else {
      tempArr.push({
        stage: i,
        rate: count / stageCount,
      });
    }
    stageCount -= count;
  }
  tempArr.sort((a, b) => b.rate - a.rate);

  for (let a = 0; a < tempArr.length; a++) {
    answer.push(tempArr[a].stage);
  }

  return answer;
}

console.log(solution2(5, [2, 1, 2, 6, 2, 4, 3, 3]));
