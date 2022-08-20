function solution(paths) {
  var answer = '/';
  let temp = '';

  paths.forEach((path) => {
    if (path[0] !== '/') {
      temp += '/' + path;
    } else {
      temp += path;
    }
  });

  const splitedArr = temp.split('/');
  splitedArr.splice(0, 1);

  const stack = [];

  for (let i = 0; i < splitedArr.length; i++) {
    if (splitedArr[i] === '...') {
      stack.pop();
      stack.pop();
      continue;
    }
    if (splitedArr[i] === '..') {
      stack.pop();
      continue;
    }
    if (splitedArr[i] === '.') {
      continue;
    }
    stack.push(splitedArr[i]);
  }

  answer += stack.join('/');

  return answer;
}

solution(['/foo', 'bar', 'baz/asdf']);
// '/foo/bar/baz/asdf'

solution(['/foo', 'bar', 'baz/asdf', 'quux', '..']);
// '/foo/bar/baz/asdf'

solution(['/foo', 'bar', 'baz/./asdf']);
// '/foo/bar/baz/asdf'

solution(['/foo', 'bar', 'baz', '...', '/asdf']);
// '/foo/asdf'

solution(['/foo', 'bar', '...', '.', 'ab']);
// '/ab'
