function solution(s, n) {
  let temp = s.split('');

  for (let i = 0; i < temp.length; i++) {
    let charCode = temp[i].charCodeAt(0);
    if (temp[i] !== ' ') {
      if (charCode <= 90) {
        charCode = (charCode - 65 + n) % 26;
        temp[i] = String.fromCharCode(charCode + 65);
      } else {
        charCode = (charCode - 97 + n) % 26;
        temp[i] = String.fromCharCode(charCode + 97);
      }
    }
  }
  return temp.join('');
}

console.log(solution('A A ', 5));
