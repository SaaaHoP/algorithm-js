function solution(answers) {
  const answer = [];
  const numbers = [1, 2, 3, 4, 5];
  const no1 = [];
  const no2 = [];
  const no3 = [];
  let i = 0;
  let j = 0;
  let k = 0;

  for (let a = 0; a < answers.length; a++) {
    //1번 수포자
    if (i === 5) {
      i = 0;
      no1.push(numbers[i]);
      i++;
    } else {
      no1.push(numbers[i]);
      i++;
    }

    //2번 수포자
    if (a % 2 === 0) {
      no2.push(2);
    } else {
      if (j === 4 || j === 0) {
        j = 0;
        no2.push(numbers[j]);
        j++;
      } else {
        if (numbers[j] === 2) {
          j++;
          no2.push(numbers[j]);
        } else {
          j++;
          no2.push(numbers[j]);
        }
      }
    }

    //3번 수포자
    if (k === 6 || k === 0) {
      k = 0;
      no3.push(3);
      no3.push(3);
      k++;
    } else {
      if (numbers[k] === 3) {
        no3.push(numbers[k - 1]);
        no3.push(numbers[k - 1]);
        k++;
        k++;
      } else {
        no3.push(numbers[k - 1]);
        no3.push(numbers[k - 1]);
        k++;
      }
    }
  }

  let no1Count = 0;
  let no2Count = 0;
  let no3Count = 0;

  for (let b = 0; b < answers.length; b++) {
    if (no1[b] === answers[b]) {
      no1Count++;
    }
    if (no2[b] === answers[b]) {
      no2Count++;
    }
    if (no3[b] === answers[b]) {
      no3Count++;
    }
  }

  console.log(no1Count, no2Count, no3Count);

  if (no1Count > no2Count && no1Count > no3Count) {
    answer.push(1);
  } else if (no2Count > no1Count && no2Count > no3Count) {
    answer.push(2);
  } else if (no3Count > no1Count && no3Count > no2Count) {
    answer.push(3);
  } else if (no1Count === no2Count && no1Count > no3Count) {
    answer.push(1);
    answer.push(2);
  } else if (no2Count === no3Count && no2Count > no1Count) {
    answer.push(2);
    answer.push(3);
  } else if (no3Count === no1Count && no3Count > no2Count) {
    answer.push(1);
    answer.push(3);
  } else {
    answer.push(1);
    answer.push(2);
    answer.push(3);
  }

  return answer;
}

function solution2(answers) {
  const answer = [];
  const pattern1 = [1, 2, 3, 4, 5];
  const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const no1Arr = answers.filter((value, index) => {
    return value === pattern1[index % pattern1.length];
  });
  const no2Arr = answers.filter((value, index) => {
    return value === pattern2[index % pattern2.length];
  });
  const no3Arr = answers.filter((value, index) => {
    return value === pattern3[index % pattern3.length];
  });

  const temp = Math.max(no1Arr.length, no2Arr.length, no3Arr.length);

  if (temp === no1Arr.length) {
    answer.push(1);
  }
  if (temp === no2Arr.length) {
    answer.push(2);
  }
  if (temp === no3Arr.length) {
    answer.push(3);
  }
  return answer;
}

console.log(solution2([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));
