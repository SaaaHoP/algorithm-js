function solution(pin) {
  var answer = true;

  if (
    Number(pin[0]) === Number(pin[1]) &&
    Number(pin[0]) === Number(pin[2]) &&
    Number(pin[0]) === Number(pin[3])
  ) {
    answer = false;
  }

  if (
    Number(pin[0]) + 1 === Number(pin[1]) &&
    Number(pin[0]) + 2 === Number(pin[2])
  ) {
    answer = false;
  }

  if (
    Number(pin[1]) + 1 === Number(pin[2]) &&
    Number(pin[1]) + 2 === Number(pin[3])
  ) {
    answer = false;
  }

  if (
    Number(pin[0]) - 1 === Number(pin[1]) &&
    Number(pin[0]) - 2 === Number(pin[2])
  ) {
    answer = false;
  }

  if (
    Number(pin[1]) - 1 === Number(pin[2]) &&
    Number(pin[1]) - 2 === Number(pin[3])
  ) {
    answer = false;
  }

  console.log(answer);

  return answer;
}

// 비유효
// 4자리 모두 동일
solution('0000') === false;
// 987, 876이 연속
solution('9876') === false;
// 123, 234가 연속
solution('1234') === false;
// 123이 연속
solution('1230') === false;
// 987이 연속
solution('2987') === false;
// 012가 연속
solution('0129') === false;

// 유효
solution('1398') === true;
solution('1478') === true;
solution('1098') === true;
solution('9013') === true;
solution('1890') === true;
