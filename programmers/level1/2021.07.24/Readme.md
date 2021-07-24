# 2021.07.24 알고리즘 풀이

## Level 1 내적

그냥 내적 풀듯이 for문에 넣어서 더해주면 된다. 매우 쉬움

https://programmers.co.kr/learn/courses/30/lessons/70128

## Level 1 완주하지 못한 선수

participant, completion 배열을 우선 정렬한다.\
for문을 통해 각 인덱스의 값이 다르면 그 선수는 완주하지 못한 선수이고,\
completion 배열의 길이까지 찾았는데 없으면 participant 마지막에 있는 선수가 완주하지 못한 선수이다.\
for문을 두번 돌려서 해결하면 효율성에서 통과하지 못한다.

https://programmers.co.kr/learn/courses/30/lessons/42576
