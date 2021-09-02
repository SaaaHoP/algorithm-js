function solution(files) {
  const reg = /^[a-zA-Z .-]+|\d{1,5}/g;
  return files.sort((a, b) => {
    const matchA = a.match(reg),
      matchB = b.match(reg),
      c = matchA[0].toLowerCase(), // + matchA[1].padStart(5,"0"),
      d = matchB[0].toLowerCase(); // + matchB[1].padStart(5,"0")
    if (c > d) {
      return 1;
    } else if (c < d) {
      return -1;
    } else {
      return matchA[1] - matchB[1];
    }
  });
}

console.log(
  solution([
    'img12.png',
    'img10.png',
    'img02.png',
    'img1.png',
    'IMG01.GIF',
    'img2.JPG',
  ])
);
