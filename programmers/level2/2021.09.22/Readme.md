# 2021.09.22 알고리즘 풀이

## Level 2 구명보트

생각해낸 방법은 내림차순으로 정렬 하면 무게가 제일 많이 나가는 사람이 맨 앞으로 오게되고, 작은 사람은 맨 뒤로 가게 된다.\
맨 앞, 맨 뒤 더했을때 한계보다 작으면 같이 태우고, 한계보다 크면 한명밖에 못태운다.\
Math.max, Math.min 및 splice를 이용해서 맨처음에 풀었는데, 정답은 맞았지만 효율성에서 다 떨어졌다.\
다음으로 생각해낸게 left 인덱스, right 인덱스를 선언해서 조건은 같지만 같이태우면 left++ right++ 해주고\
한명만 태우면 left++만 해주었다. left === right 되면 한명이 남은것이므로 태우고 정답을 ++ 해준다.\
효율성을 높이려면 내장 메소드를 최대한 지양하고 단차원적으로 풀어야 한다.

https://programmers.co.kr/learn/courses/30/lessons/42885
