function solution(cacheSize, cities) {
  let time = 0;
  let cache = [];
  for (let i in cities) {
    if (cacheSize === 0) {
      time = cities.length * 5;
      break;
    }
    if (cache.length < cacheSize) {
      if (cache.includes(cities[i].toLowerCase())) {
        cache.splice(cache.indexOf(cities[i].toLowerCase()), 1);
        cache.push(cities[i].toLowerCase());
        time += 1;
      } else {
        cache.push(cities[i].toLowerCase());
        time += 5;
      }
    } else {
      if (cache.includes(cities[i].toLowerCase())) {
        cache.splice(cache.indexOf(cities[i].toLowerCase()), 1);
        cache.push(cities[i].toLowerCase());
        time += 1;
      } else {
        cache.splice(0, 1);
        cache.push(cities[i].toLowerCase());
        time += 5;
      }
    }
  }
  return time;
}

console.log(
  solution(7, [
    '1',
    '2',
    '3',
    '4',
    '2',
    '4',
    '5',
    '6',
    '5',
    '7',
    '8',
    '9',
    '10',
  ])
);
