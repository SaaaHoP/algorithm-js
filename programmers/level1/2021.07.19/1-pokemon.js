num = [3, 3, 3, 2, 2, 4];

//첫번째 방법. 정렬을 한 뒤, 같은 숫자 그룹의 갯수를 샌다. 그룹 갯수가 N/2 보다 작으면 그룹 갯수 리턴, N/2 보다 크면 N/2 리턴.
function solution(num) {
  let count = 1;
  num.sort((a, b) => a - b);

  for (let i = 0; i < num.length; i++) {
    //맨마지막 인덱스는 다음 인덱스와 비교할 수 없으므로 break
    if (i === num.length - 1) {
      break;
    }
    if (num[i] !== num[i + 1]) {
      count++;
    }
  }

  if (count < num.length / 2) {
    answer = count;
  } else {
    answer = num.length / 2;
  }

  return answer;
}

//두번째 방법. js 표준내장객체를 사용한다. set은 유일한 값을 갖는 객체이기에 중복값이 없다. 배열을 받을수 있다. 중복이 없는 set객체의 사이즈를 구한 뒤, N/2와 비교한다.
function solution2(num) {
  const arrCount = new Set(num).size;
  const numCount = num.length / 2;
  return arrCount < numCount ? arrCount : numCount;
}

console.log(solution(num), solution2(num));
