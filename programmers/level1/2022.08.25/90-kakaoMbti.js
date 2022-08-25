function solution(survey, choices) {
  var answer = '';

  const mbti = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  survey.forEach((v, i) => {
    const score = choices[i];

    if (score > 4) {
      mbti[v[1]] += score - 4;
    }
    if (score < 4) {
      mbti[v[0]] += 4 - score;
    }
  });

  mbti['R'] >= mbti['T'] ? (answer += 'R') : (answer += 'T');
  mbti['C'] >= mbti['F'] ? (answer += 'C') : (answer += 'F');
  mbti['J'] >= mbti['M'] ? (answer += 'J') : (answer += 'M');
  mbti['A'] >= mbti['N'] ? (answer += 'A') : (answer += 'N');

  return answer;
}

console.log(solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5]));
