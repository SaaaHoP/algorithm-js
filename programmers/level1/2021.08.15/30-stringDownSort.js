function solution(s) {
  return s
    .split('')
    .sort((a, b) => {
      if (a > b) return -1;
      if (a < b) return 1;
      if (a === b) return 0;
    })
    .join('');
}

function solution2(s) {
  return s.split('').sort().reverse().join('');
}

console.log(solution('Zbcdefg'));
