function solution(log) {
  let answer = '';
  let totalMin = 0;
  for (let i = 0; i < log.length; i++) {
    let min1 = log[i].slice(0, 2) * 60 + Number(log[i].slice(3, 5));
    let min2 = log[i + 1].slice(0, 2) * 60 + Number(log[i + 1].slice(3, 5));
    let minMinus = min2 - min1;

    if (minMinus > 105) {
      totalMin += 105;
    } else if (minMinus > 4) {
      totalMin += minMinus;
    }
    i++;
  }
  if (parseInt(totalMin / 60) < 10) {
    answer += '0' + parseInt(totalMin / 60);
  } else {
    answer += parseInt(totalMin / 60);
  }
  answer += ':' + (totalMin % 60);

  return answer;
}
