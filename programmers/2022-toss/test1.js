function safelyGet(object, path) {
  const splitedPath = path.split('.');
  let getValue = object;

  for (let i = 0; i < splitedPath.length; i++) {
    if (getValue[splitedPath[i]] === undefined) {
      getValue = undefined;
      break;
    }
    getValue = getValue[splitedPath[i]];
  }

  return getValue;
}

function solution(input, path) {
  const result = safelyGet(JSON.parse(input), path);

  if (result === undefined) {
    return 'undefined';
  }

  return JSON.stringify(result);
}

const object1 = {
  repository: undefined,
};

const object2 = {
  repository: {
    readme: undefined,
  },
};

const object3 = {
  repository: {
    readme: {
      extension: 'md',
      content: '금융을 쉽고 간편하게',
    },
  },
};

safelyGet(object1, 'repository'); // -> undefined
safelyGet(object2, 'repository.readme.extension'); // -> undefined
safelyGet(object2, 'repository.readme'); // -> undefined
safelyGet(object3, 'repository.readme.extension'); // -> 'md'
