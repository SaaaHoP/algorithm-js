# 2021.07.21 알고리즘 풀이

## Level 1 K번째 수

1. 첫번째 방법\
   for문을 이용해서 commands 배열을 순회한다.\
   array.slice(a,b)를 통해 배열을 잘라낸다.(a이상 b미만)\
   tempArr.sort(조건식)을 통해 배열을 정렬시킨다.(a,b => a-b)면 오름차순 \
   answer.push()를 통해 배열에 K번째 수를 넣는다.

2. 두번째 방법\
   forEach를 이용해서 좀 더 편하게 배열을 순회한다.\
   비구조화 할당을 통해 const [index1, index2, kNumber] = command 처럼 변수를 편하게 사용한다.\
   나머지는 위의 풀이와 같다.

3. 세번째 방법\
   map을 이용해서 코드 수를 줄이고, 간결하게 만든다.\
   map을 한 배열은 임의의 함수를 통해서 바뀐 배열을 리턴한다.(기존 배열은 변화X)\
   map에서 return tempArr[kNumber - 1]을 하여 K번째 수들을 갖는 배열을 리턴한다.

   https://programmers.co.kr/learn/courses/30/lessons/42748
