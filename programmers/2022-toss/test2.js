function createQueryString(object) {
  let queryString = '';
  const objectArr = Object.values(object);

  if (objectArr.length === 0) {
    return queryString;
  }

  queryString += '?';

  for (val in object) {
    if (object[val] === null || object[val] === undefined) {
      continue;
    }

    if (Array.isArray(object[val])) {
      object[val].forEach((v, i) => {
        queryString += `${val}=${v}`;
        if (i !== object[val].length - 1) {
          queryString += '&';
        }
      });
    } else {
      queryString += `${val}=${String(object[val]).replace(/ /g, '%20')}`;
    }

    if (objectArr[objectArr.length - 1] !== object[val]) {
      queryString += '&';
    }
  }

  return queryString;
}

function solution(input) {
  var object = JSON.parse(input);
  var answer = createQueryString(object);
  return answer;
}

createQueryString({}); // ''
createQueryString({ foo: 'bar' }); // '?foo=bar'
createQueryString({ foo: 'bar', enable: true }); // '?foo=bar&enable=true'

createQueryString({ foo: [1, 2, 3] }); // '?foo=1&foo=2&foo=3'
createQueryString({ foo: 'this is test' }); // '?foo=this%20is%20test'
createQueryString({ foo: '1', bar: null, baz: undefined, quux: 'foo' }); // '?foo=1&quux=foo'
