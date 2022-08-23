function parse(route, path) {
  const obj = {
    matches: true,
    params: {},
  };

  if (path[0] !== '/') {
    path = '/' + path;
  }

  const routeArr = route.split('/');
  const pathArr = path.split('/');

  pathArr.forEach((v, i) => {
    if (v !== routeArr[i]) {
      obj.matches = false;
    }
    if (routeArr[i][0] === '[' && Number.isInteger(Number(v))) {
      const replacedString = routeArr[i].replace('[', '').replace(']', '');
      obj.params[replacedString] = v;
      obj.matches = true;
    }
  });

  if (obj.matches === false) {
    delete obj.params;
  }

  console.log(obj);

  return obj;
}

function solution(route, path) {
  var result = parse(route, path);
  return JSON.stringify(result);
}

parse('/about', 'about');
// {
//     'matches':true,
//     'params':{}
// }

parse('/service/[id]', '/service/1');
// {
//     'matches':true,
//     'params':{
//         'id':'1'
//     }
// }

parse('/service/[id]', '/services');
// {
//     'matches':false
// }

parse('/about', '/');
// {
//     'matches':false
// }

parse(
  '/service/[serviceId]/deployment/[deploymentId]',
  '/service/1/deployment/9'
);
// {
//     'matches':true,
//     'params':{
//         'serviceId':'1',
//         'deploymentId':'9'
//     },
// }
