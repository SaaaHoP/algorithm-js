function solution(people, limit) {
  let answer = 0;
  let left = 0;
  let right = people.length - 1;
  people.sort((a, b) => b - a);

  while (left <= right) {
    if (left === right) {
      answer++;
      break;
    }

    if (people[left] + people[right] <= limit) {
      answer++;
      left++;
      right--;
    } else {
      answer++;
      left++;
    }
  }
  return answer;
}

console.log(solution([70, 50, 80, 50], 100));
