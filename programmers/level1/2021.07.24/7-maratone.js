function solution(participant, completion) {
  participant.sort();
  completion.sort();

  console.log(participant, completion);

  for (let i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
  return participant[participant.length - 1];
}

console.log(
  solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
);
