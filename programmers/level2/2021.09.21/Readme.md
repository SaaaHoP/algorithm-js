# 2021.09.21 알고리즘 풀이

## Level 2 7주차 입실 퇴실

우선 정답 배열을 인원수 만큼 0으로 초기화 시켜놓는다.\
사람이 출입하는 arr 배열을 선언하고, enter 배열과 leave 배열의 인덱스로 사용할 enterIdx, leaveIdx를 선언한다.\
while문은 enterIdx 혹은 leaveIdx가 배열의 길이를 넘어갈때까지 돌린다.\
enter배열의 원소 nextEnter, leave배열의 원소 nextLeave를 선언한다.\
먼저, 방에 nextLeave가 있는지 확인한다. 있으면, 바로 빼줘야 하므로 splice를 통해 빼준다. 정답 배열에 인원 번호에 맞춰 현재 방에 있는 사람들의 수를 더해준다.\
방 안에 있는 사람들은 한명을 봤으므로 forEach를 통해 ++ 해준다.\
만약에 방안에 현재 순서의 빼줄 사람이 없으면 계속 방안에 다음 사람을 추가해주고, 이 순서를 반복해주면 정답 배열이 나온다.

https://programmers.co.kr/learn/courses/30/lessons/86048
