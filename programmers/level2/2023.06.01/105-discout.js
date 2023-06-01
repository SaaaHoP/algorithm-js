function solution(want, number, discount) {
  var answer = 0;

  let obj = {};

  for (let i = 0; i < want.length; i++) {
    obj[want[i]] = number[i];
  }

  for (let j = 0; j < discount.length; j++) {
    const slicedArr = discount.slice(j, j + 10);
    const copyObj = { ...obj };
    for (let k = 0; k < slicedArr.length; k++) {
      copyObj[slicedArr[k]]--;
    }
    if (Object.values(copyObj).every((val) => val === 0)) {
      answer++;
    }
  }

  return answer;
}

console.log(
  solution(
    ['banana', 'apple', 'rice', 'pork', 'pot'],
    [3, 2, 2, 2, 1],
    [
      'chicken',
      'apple',
      'apple',
      'banana',
      'rice',
      'apple',
      'pork',
      'banana',
      'pork',
      'rice',
      'pot',
      'banana',
      'apple',
      'banana',
    ]
  )
);
