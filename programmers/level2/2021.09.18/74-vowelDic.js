function solution(word) {
  let answer = 0;
  const dic = ['A', 'E', 'I', 'O', 'U'];
  const count = [781, 156, 31, 6, 1];
  let arr = word.split('');

  for (let i in arr) {
    let index = dic.indexOf(arr[i]);
    answer += index * count[i] + 1;
  }
  return answer;
}

console.log(solution('AAAAE'));
