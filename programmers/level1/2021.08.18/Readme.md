# 2021.08.18 알고리즘 풀이

## Level 1 약수의 합

매우 쉽다. for문 돌려서 나머지가 0일때 약수이므로 그 수들을 더해주면 된다.

https://programmers.co.kr/learn/courses/30/lessons/12928

## Level 1 이상한 문자 만들기

먼저 split을 이용해서 문자열의 공백을 기준으로 나누어서 배열을 만들었다.\
JS에서 문자열은 바뀔 수 없으므로, 따로 tempStr을 만들었다.\
이중 for문을 돌려서, 짝수 부분일때는 대문자로 변환해서 tempStr에 추가를,\
홀수 부분일때는 소문자로 변환해서 tempStr에 추가하였다.\
바뀐 문자열 tempStr을 배열 answerArr에 push하고, join을 통해 공백으로 나눈 문자열을 반환했다.

https://programmers.co.kr/learn/courses/30/lessons/12930
