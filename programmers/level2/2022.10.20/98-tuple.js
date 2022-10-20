function solution(s) {
  var answer = [];

  //   const arr = s
  //     .slice(1, s.length - 1)
  //     .split('},')
  //     .map((item) => {
  //       const array = item
  //         .replace(/{|}/g, '')
  //         .split(',')
  //         .map((string) => Number(string));
  //       return array;
  //     });

  const arr = JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']')).sort(
    (a, b) => a.length - b.length
  );

  for (let j = 0; j < arr.length; j++) {
    for (let k = 0; k < arr[j].length; k++) {
      if (!answer.includes(arr[j][k])) {
        answer.push(arr[j][k]);
      }
    }
  }

  return answer;
}

console.log(solution('{{1,2,3},{2,1},{1,2,4,3},{2}}'));
console.log(solution('{{20,111},{111}}'));
