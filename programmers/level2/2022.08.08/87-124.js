function solution(n) {
  var answer = '';
  const numList = [4, 1, 2];

  while (n > 0) {
    const rest = n % 3;
    answer = numList[rest] + answer;
    n = Math.floor((n - 1) / 3);
  }

  return answer;
}

console.log(solution(4));

// 1 - 1
// 2 - 2
// 3 - 4
// ---3

// 4 - 11
// 5 - 12
// 6 - 14
// 7 - 21
// 8 - 22
// 9 - 24
// 10 - 41
// 11 - 42
// 12 - 44
// ---9

// 13 - 111
// 14 - 112
// 15 - 114
// 16 - 121
// 17 - 122
// 18 - 124
// 19 - 141
// 20 - 142
// 21 - 144
// ...
// ---27
