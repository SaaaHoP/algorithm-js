function solution(msg) {
  const alphas = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const ans = [];
  let txtlen = 1;
  let textbefore;
  for (let i = 0; i < msg.length; i++) {
    if (txtlen !== 1) {
      txtlen -= 1;
      continue;
    }
    let text = msg[i];
    let ii = i;
    while (alphas.includes(text)) {
      ii += 1;
      textbefore = text;
      text += msg[ii];
    }
    ans.push(alphas.indexOf(textbefore));
    alphas.push(text);
    txtlen = textbefore.length;
  }
  return ans;
}

console.log(solution('KAKAO'));
