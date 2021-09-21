function solution(enter, leave) {
  let answer = [];

  for (let i = 0; i < enter.length; i++) {
    answer.push(0);
  }

  let arr = [];
  let enterIdx = 0;
  let leaveIdx = 0;

  while (enterIdx < enter.length || leaveIdx < leave.length) {
    let nextEnter = enter[enterIdx];
    let nextLeave = leave[leaveIdx];

    console.log(arr);
    if (arr.includes(nextLeave)) {
      arr.splice(arr.indexOf(nextLeave), 1);
      answer[nextLeave - 1] += arr.length;
      arr.forEach((v) => {
        answer[v - 1]++;
      });
      leaveIdx++;
    } else {
      arr.push(nextEnter);
      enterIdx++;
    }
  }
  return answer;
}

console.log(solution([1, 4, 2, 3], [2, 1, 3, 4]));
