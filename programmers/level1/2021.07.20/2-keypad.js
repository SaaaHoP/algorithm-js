function solution(numbers, hand) {
  const pos = {
    star: {
      x: -1,
      y: 0,
    },
    0: {
      x: 0,
      y: 0,
    },
    sharp: {
      x: 1,
      y: 0,
    },
    1: {
      x: -1,
      y: 3,
    },
    2: {
      x: 0,
      y: 3,
    },
    3: {
      x: 1,
      y: 3,
    },
    4: {
      x: -1,
      y: 2,
    },
    5: {
      x: 0,
      y: 2,
    },
    6: {
      x: 1,
      y: 2,
    },
    7: {
      x: -1,
      y: 1,
    },
    8: {
      x: 0,
      y: 1,
    },
    9: {
      x: 1,
      y: 1,
    },
  };
  let result = '';
  let currentNum;
  let currentLeft = pos.star;
  let currentRight = pos.sharp;
  //처음에는 거리 구하는걸 좌표 방식으로 구했다. 대각선인 경우는 사선으로 나오게. 근데 13~20번 틀려서 다시 보니 거리는 대각선이 아니라 손가락이 움직이는 횟수랑 같았다.
  //예를 들어 왼손4 오른손3 눌러야할거 5면, 왼손은 한칸, 오른손은 두칸 움직여야 5를 누르므로 왼손이 누른다
  const getLength = (pos1, pos2) => {
    return Math.abs(pos2.x - pos1.x) + Math.abs(pos2.y - pos1.y);
  };

  for (let i = 0; i < numbers.length; i++) {
    currentNum = pos[numbers[i]];
    if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
      result += 'L';
      currentLeft = pos[numbers[i]];
    } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
      result += 'R';
      currentRight = pos[numbers[i]];
    } else {
      if (hand === 'left') {
        if (
          getLength(currentNum, currentLeft) ===
          getLength(currentNum, currentRight)
        ) {
          result += 'L';
          currentLeft = pos[numbers[i]];
        } else if (
          getLength(currentNum, currentLeft) >
          getLength(currentNum, currentRight)
        ) {
          result += 'R';
          currentRight = pos[numbers[i]];
        } else {
          result += 'L';
          currentLeft = pos[numbers[i]];
        }
      } else {
        if (
          getLength(currentNum, currentLeft) ===
          getLength(currentNum, currentRight)
        ) {
          result += 'R';
          currentRight = pos[numbers[i]];
        } else if (
          getLength(currentNum, currentLeft) >
          getLength(currentNum, currentRight)
        ) {
          result += 'R';
          currentRight = pos[numbers[i]];
        } else {
          result += 'L';
          currentLeft = pos[numbers[i]];
        }
      }
    }
  }
  return result;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
