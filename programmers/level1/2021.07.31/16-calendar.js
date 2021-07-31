function solution(a, b) {
  const dayName = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let diff = b - 1;
  for (let i = 1; i < a; i++) {
    diff += month[i - 1];
  }

  return dayName[diff % 7];
}

function solution2(a, b) {
  let day = new Date(2016, a - 1, b + 1).toUTCString();
  day = day.slice(0, 3).toLocaleUpperCase();
  return day;
}

console.log(solution2(5, 24));
