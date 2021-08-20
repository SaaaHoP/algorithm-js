function solution(x) {
  let sum = 0;
  let numString = x.toString();
  for (let i = 0; i < numString.length; i++) {
    sum += parseInt(numString[i]);
  }
  if (x % sum === 0) {
    return true;
  } else {
    return false;
  }
  console.log(sum);
}

console.log(solution(11));
