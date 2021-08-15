function solution(scores) {
  let answer = '';

  for (let i = 0; i < scores.length; i++) {
    let tempArr = [];
    let avg = 0;
    let temp = 0;

    for (let k = 0; k < scores.length; k++) {
      tempArr.push(scores[k][i]);
    }
    temp = tempArr[i];
    tempArr.splice(i, 1);
    if (temp <= Math.max(...tempArr) && temp >= Math.min(...tempArr)) {
      tempArr.push(temp);
      tempArr.forEach((v) => {
        avg += v;
      });
      avg = avg / tempArr.length;
    } else {
      tempArr.forEach((v) => {
        avg += v;
      });
      avg = avg / tempArr.length;
    }

    if (avg >= 90) {
      answer += 'A';
    } else if (avg < 90 && avg >= 80) {
      answer += 'B';
    } else if (avg < 80 && avg >= 70) {
      answer += 'C';
    } else if (avg < 70 && avg >= 50) {
      answer += 'D';
    } else {
      answer += 'F';
    }
  }

  return answer;
}

console.log(
  solution([
    [100, 90, 98, 88, 65],
    [50, 45, 99, 85, 77],
    [47, 88, 95, 80, 67],
    [61, 57, 100, 80, 65],
    [24, 90, 94, 75, 65],
  ])
);
