function solution(s) {
  let answer = true;
  let pCount = 0;
  let yCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'p' || s[i] === 'P') {
      pCount++;
    } else if (s[i] === 'y' || s[i] === 'Y') {
      yCount++;
    }
  }

  if (pCount === yCount) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}

function solution2(s) {
  let answer = true;
  //g는 한개만 아니라 여러개, i는 대소문자 무시
  //   const pRegExp = new RegExp('p', 'gi');
  //   const yRegExp = new RegExp('y', 'gi');
  //   const pLength = s.match(pRegExp).length;
  //   const yLength = s.match(yRegExp).length;
  let pLength;
  let yLength;

  if (s.match(/p/gi) === null) {
    pLength = 0;
  } else {
    pLength = s.match(/p/gi).length;
  }

  if (s.match(/y/gi) === null) {
    yLength = 0;
  } else {
    yLength = s.match(/y/gi).length;
  }

  if (pLength === yLength) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}

function solution3(s) {
  return (
    s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length
  );
}

console.log(solution3('ppppPPPPP'));
