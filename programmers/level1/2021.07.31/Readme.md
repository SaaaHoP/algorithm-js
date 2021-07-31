# 2021.07.31 알고리즘 풀이

## Level 1 예산

별로 안어렵다. 배열을 정렬 한 뒤, 작은 값 부터 예산에서 빼며 가능한 수를 세주면 된다.\

https://programmers.co.kr/learn/courses/30/lessons/12982

## Level 1 두 개 뽑아서 더하기

이중 for문을 사용하여 배열 안에서 두 수를 더한 값을 구한다.\
temp에 저장하여 includes 사용하여 배열에 있는지 확인하고, 없으면 push하고 있으면 건너뛴다.\
마지막으로 sort를 하여 오름차순으로 정렬하여 반환한다.

다른 방법으로는 Set을 사용하는 것이다.\
Set 객체는 중복값을 허용하지 않는다.\
따라서 모든 값을 push한 뒤, new Set(temp)를 통하여 Set객체를 만든다.\
배열로 리턴해야 하므로 객체를 배열로 바꾸려면 ... 스프레드 연산자를 사용해야 한다.\
const answer = [...new Set(temp)]; 이렇게 하면 중복값이 없는 배열이 생성된다.

https://programmers.co.kr/learn/courses/30/lessons/68644

## Level 1 2016년

첫번째 방법은 요일과 각 월의 마지막 날을 입력해놓은 배열을 사용한다.\
개월수를 전부 일수로 바꿔서 계산하여 요일을 구하는 방식이다.\

두번째 방법은 Date()를 사용하였다. 훨씬 편하고 쉽지만 속도가 느린 단점이 있다.

https://programmers.co.kr/learn/courses/30/lessons/12901
