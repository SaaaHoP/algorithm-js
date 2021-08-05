function solution(n, arr1, arr2) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    let string1 = arr1[i].toString(2);
    let string2 = arr2[i].toString(2);
    let string1L = string1.length;
    let string2L = string2.length;

    for (let j = 0; j < n - string1L; j++) {
      string1 = '0' + string1;
    }
    for (let j = 0; j < n - string2L; j++) {
      string2 = '0' + string2;
    }

    let tempString = '';
    for (let k = 0; k < n; k++) {
      if (string1[k] === '1' && string2[k] === '1') {
        tempString += '#';
      } else if (
        (string1[k] === '1' && string2[k] === '0') ||
        (string1[k] === '0' && string2[k] === '1')
      ) {
        tempString += '#';
      } else {
        tempString += ' ';
      }
    }
    answer.push(tempString);
  }
  return answer;
}

function solution2(n, arr1, arr2) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    let string1 = (arr1[i] | arr2[i]).toString(2);
    let string1L = string1.length;
    let string2 = '';

    for (let j = 0; j < n - string1L; j++) {
      string1 = '0' + string1;
    }

    for (let k = 0; k < string1.length; k++) {
      if (string1[k] === '1') {
        string2 += '#';
      } else {
        string2 += ' ';
      }
    }
    answer.push(string2);
  }
  return answer;
}

console.log(solution2(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
