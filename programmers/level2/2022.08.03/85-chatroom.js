function solution(record) {
  var answer = [];

  const obj = {};

  record.forEach((string) => {
    const [command, uid, name] = string.split(' ');
    if (command !== 'Leave') {
      obj[uid] = name;
    }
  });

  record.forEach((string) => {
    const [command, uid] = string.split(' ');
    if (command === 'Enter') {
      answer.push(`${obj[uid]}님이 들어왔습니다.`);
    }
    if (command === 'Leave') {
      answer.push(`${obj[uid]}님이 나갔습니다.`);
    }
  });

  return answer;
}

console.log(
  solution([
    'Enter uid1234 Muzi',
    'Enter uid4567 Prodo',
    'Leave uid1234',
    'Enter uid1234 Prodo',
    'Change uid4567 Ryan',
  ])
);
