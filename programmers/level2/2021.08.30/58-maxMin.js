function solution(s) {
  //   const arr = s.split(' ').map((v) => parseInt(v));
  //   const min = Math.min(...arr).toString();
  //   const max = Math.max(...arr).toString();

  const arr = s.split(' ');

  //Math.min, Math.max는 string 타입에서도 자동 형변환이 되는듯. parseInt 안해줘도 된다.
  return Math.min(...arr) + ' ' + Math.max(...arr);
}
