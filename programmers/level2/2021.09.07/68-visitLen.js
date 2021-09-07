function solution(dirs) {
  const move = { U: [0, 1], D: [0, -1], L: [-1, 0], R: [1, 0] };

  let check = new Set();
  let now = [0, 0];

  for (let i = 0; i < dirs.length; i++) {
    let nx = now[0] + move[dirs[i]][0];
    let ny = now[1] + move[dirs[i]][1];

    if (nx > 5 || nx < -5 || ny > 5 || ny < -5) continue;

    check.add('' + now[0] + now[1] + nx + ny);
    check.add('' + nx + ny + now[0] + now[1]);

    now = [nx, ny];
    console.log(check);
  }

  return check.size / 2;
}

console.log(solution('LRLR'));
