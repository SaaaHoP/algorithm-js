# 2021.08.25 알고리즘 풀이

## Level 1 핸드폰 번호 가리기

쉽다. 문자열을 배열 인덱스로 접근하여 for문을 사용했다.

https://programmers.co.kr/learn/courses/30/lessons/12948

## Level 1 행렬의 덧셈

처음에는 for문 먼저 사용하여, 1차원 배열에 new Array를 하여 2차원 배열을 만들어 줬다.\
그리고 2중 for문을 이용하여 2차월 배열에 접근해 각각 합을 구하여 정답을 구했다.\
다른 사람의 풀이를 보니, map을 쓰면 코드가 매우 간결해 졌다.\
map은 새로운 배열을 리턴하므로, map을 2번 사용하여 2차원 배열을 만들었다.

https://programmers.co.kr/learn/courses/30/lessons/12950

## Level 1 x만큼 간격이 있는 n개의 숫자

쉽다. for문을 이용하여 간격만큼의 각각 값을 push를 이용해 배열에 넣어주었다.

https://programmers.co.kr/learn/courses/30/lessons/12954

## Level 1 직사각형 별찍기

쉽다. 2중 for문을 사용하여 첫번째 줄 별을 찍고, 바깥 for문에서 '\n' 개행을 처리해 주었다.

https://programmers.co.kr/learn/courses/30/lessons/12969
