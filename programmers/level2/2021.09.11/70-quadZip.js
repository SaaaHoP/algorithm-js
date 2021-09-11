function solution(arr) {
  if (arr.every((row) => row.every((cell) => cell === 0))) return [1, 0];
  if (arr.every((row) => row.every((cell) => cell === 1))) return [0, 1];
  const len = arr.length,
    q1 = arr.splice(0, len / 2),
    q2 = q1.map((row) => row.splice(len / 2, len / 2)),
    q3 = arr,
    q4 = q3.map((row) => row.splice(len / 2, len / 2));
  return [q1, q2, q3, q4].reduce(
    (ans, x) => solution(x).map((d, i) => d + ans[i]),
    [0, 0]
  );
}
