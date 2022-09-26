/*
interval[i] = [starti, endi] 인 간격의 배열이 주어지면
겹치는 모든 간격을 병합하고 입력의 모든 간격을 포함하는 겹치지 않는 간격의 배열을 반환합니다.

input : [[1,3],[2,6],[8,10],[15,18]]
output: [[1,6],[8,10],[15,18]]

input: [[1,3], [2,6], [4,10], [15,18]]
output: []

input : [[1,4],[4,5]]
output: [[1,5]]

input : [[2, 4], [1, 3]]
output : [[1, 4]]
*/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// 순서가 꼭 다음이 큰게 올거라는 보장이 없는데 왜 그렇게 생각했을까? -> 작은순서대로 먼저 정렬해줘야 한다.
// 겹치는 구간이 있으면, 두개의 좌표를 비교해서 가장 작은값과 가장 큰 값으로 좌표를 넣어주면 된다.
const merge = function (intervals) {
  const sortedIntervals = intervals.sort((a, b) => {
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    if (a[0] === b[0]) return 0;
  });

  const answer = [[...sortedIntervals[0]]];

  for (let i = 1; i < sortedIntervals.length; i++) {
    if (answer[answer.length - 1][1] >= sortedIntervals[i][0]) {
      const tempArr = [...answer[answer.length - 1], ...sortedIntervals[i]];
      const minValue = Math.min(...tempArr);
      const maxValue = Math.max(...tempArr);
      answer.pop();
      answer.push([minValue, maxValue]);
      continue;
    }

    answer.push(sortedIntervals[i]);
  }

  return answer;
};

console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
);
