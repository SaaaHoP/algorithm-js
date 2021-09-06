function solution(m, musicinfos) {
  let answer = '(None)';
  let arr = [];
  let objArr = [];
  let ansArr = [];
  musicinfos.forEach((v) => arr.push(v.split(',')));

  for (let i = 0; i < arr.length; i++) {
    objArr.push({
      minutes:
        parseInt(arr[i][1].slice(0, 2)) * 60 +
        parseInt(arr[i][1].slice(3, 5)) -
        parseInt(arr[i][0].slice(0, 2)) * 60 -
        parseInt(arr[i][0].slice(3, 5)),
      name: arr[i][2],
      melody: arr[i][3],
      pattern: '',
    });
    let num = 0;
    let str = '';

    for (let j = 0; j < objArr[i].minutes; j++) {
      if (num === objArr[i].melody.length) {
        num = 0;
      }
      if (objArr[i].melody[num + 1] === '#') {
        j--;
        objArr[i].pattern += objArr[i].melody[num].toLowerCase();
        num++;
        continue;
      }
      objArr[i].pattern += objArr[i].melody[num];
      num++;
    }

    for (let k = 0; k < m.length; k++) {
      if (m[k + 1] === '#') {
        str += m[k].toLowerCase();
        continue;
      }
      str += m[k];
    }

    if (objArr[i].pattern.includes(str)) {
      ansArr.push(objArr[i]);
      answer = objArr[i].name;
    }

    if (ansArr.length > 1) {
      let compare = ansArr[0].minutes;
      ansArr.forEach((v) => {
        if (v.minutes === compare) {
          answer = ansArr[0].name;
        }
        if (v.minutes > compare) {
          compare = v.minutes;
          answer = v.name;
        }
      });
    }
  }
  console.log(objArr);
  return answer;
}

console.log(
  solution('ABC', ['12:00,12:14,HELLO,C#DEFGAB', '13:00,13:05,WORLD,ABCDEF'])
);
