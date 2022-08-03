function solution(s) {
  let answer = 0;
  let result = new Array(s.length);
  for (i = 1; i < s.length + 1; i++) {
    sentence = '';
    last = 0;
    while (last < s.length) {
      cnt = 1;
      while (s.slice(last, last + i) == s.slice(last + i, last + i + i)) {
        cnt++;
        last = last + i;
      }
      if (cnt > 1) sentence = sentence + cnt;
      sentence = sentence + s.slice(last, last + i);
      last = last + i;
    }
    temp = [];
    temp.sentence = sentence;
    temp.len = sentence.length;
    result.push(temp);
  }
  result.sort(function (a, b) {
    return a.len - b.len;
  });
  return result[0].len;
}
