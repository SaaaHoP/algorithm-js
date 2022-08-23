function solution(ids, days) {
  const answer = [];
  const obj = {};

  ids.forEach((id) => {
    obj[id] = [];
  });

  ids.forEach((id, idx) => {
    if (!obj[id].includes(days[idx])) {
      obj[id].push(days[idx]);
    }
  });

  for (i in obj) {
    if (obj[i].length > 2) {
      answer.push(Number(i));
    }
  }

  console.log(answer);

  return answer;
}

solution(
  // ids
  [1, 2, 1, 3, 1, 2, 1],
  // days
  ['월', '목', '월', '수', '일', '화', '금']
);
// 결과 : [1]
