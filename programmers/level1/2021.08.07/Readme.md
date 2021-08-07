# 2021.08.06 알고리즘 풀이

## Level 1 나누어 떨어지는 숫자 배열

쉽다. 나누었을때 나머지가 0이면 나누어 떨어지는 숫자이므로 정답 배열에 push한다.\
나누어 안떨어지면 정답 배열에 변수가 들어가 있지 않으므로 길이가 0일테고,\
0이면 -1을 푸쉬한다.

https://programmers.co.kr/learn/courses/30/lessons/12910

## Level 1 두 정수 사이의 합

쉽다. Math.max, Math.min을 사용하여 a b중에 큰 수를 고르고,\
for문을 돌려서 사이의 정수들을 더하면 된다.

https://programmers.co.kr/learn/courses/30/lessons/12912

## Level 1 문자열 내 마음대로 정렬하기

sort함수를 사용하면 편하다. 근데 맨처음에 생각해주지 못한게,\
같은 문자면 문자열 자체의 오름차순을 비교해야 한다.\
그래서 나는 맨처음에 자체의 오름차순 정렬을 위해 그냥 sort()를 하였고,\
다음으로 n 인덱스 선택한 문자를 기준으로 정렬을 위해 sort((a,b) => a[n], b[n])... 로 정렬하였다.

https://programmers.co.kr/learn/courses/30/lessons/12915

## Level 1 문자열 내 p와 y의 개수

맨처음 풀이는 조금 단순하게 생각해서 문자열을 배열로 접근하여 풀었다.\
다른 사람의 풀이를 보니, 정규식을 이용한 match 또는 문자 P, Y로 split하여 풀었다.\
s.match의 문제는 만약 해당 문자가 없으면 배열이 생성되지 않고, null을 반환한다. 그래서 따로 예외 처리를 해주어야 한다.\
split은 P, Y 기준으로 split하면 P or Y의 갯수 + 1 만큼의 공백 배열이 생긴다. 결국 갯수는 비교 가능하므로 훨씬 빠르고 간단하게 풀 수 있다.\
match 함수, split 함수를 기억해 놓자. 문자열 관련 문제를 풀때 도움이 될듯하다.

https://programmers.co.kr/learn/courses/30/lessons/12916
