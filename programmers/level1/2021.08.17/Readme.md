# 2021.08.17 알고리즘 풀이

## Level 1 수박수박수박

맨처음 풀이는 for문에서 i가 짝수일때는 '수', 홀수일때는 '박'을 추가해줬다.\
다른 정답을 확인해보니, 문자열 기본 내장 함수에 repeat이라고 있다.\
repeat(n) n번만큼 문자열을 반복해준다.\
repeat(n).slice(0,n) 해서 잘라준다.

https://programmers.co.kr/learn/courses/30/lessons/12922

## Level 1 문자열을 정수로 바꾸기

맨처음 풀이는 parseInt를 이용해서 풀었다.\
charAt을 이용해서 0번 인덱스에 '-'면 음수를 붙여준다.\
다른 정답 확인해보니, JS는 자동 형변환 기능이 있어서 숫자형 문자열로 사칙연산을 진행하려고 하면, 자동으로 숫자로 바꿔준다. 이를 이용해서 return +s 하면 정답이 나온다.

https://programmers.co.kr/learn/courses/30/lessons/12925

## Level 1 시저 암호

아스키 코드를 이용해서 풀었다. split을 통해 배열로 나누어주고, 공백인 경우 스킵해주었다.\
대문자인 경우 n숫자가 한바퀴 돌고 올수도 있으므로 - 65 + n 에 % 26으로 알파벳 개수만큼 나머지를 가져온뒤, 다시 65를 더해서 대문자일때를 해결 해주고, 소문자인 경우도 동일하게 한뒤 join으로 다시 합쳤다.\
꽤 어려웠다. 한바퀴 돌고 오는 경우 생각하는게 힘들었음.

https://programmers.co.kr/learn/courses/30/lessons/12926
