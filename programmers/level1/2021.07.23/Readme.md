# 2021.07.23 알고리즘 풀이

## Level 1 크레인 인형뽑기 게임(카카오)

2차원 배열 newArr을 만들어서 가로 순서로 되어있는 board 배열을 세로 순서로 바꾸어서 newArr에 복사한다.\
여기서 복사할때, 0인 부분은 체크하여 복사할때 제외하여 복사한다.\
JS에 배열 push, pop은 스택의 작동원리와 같으므로 인형을 뽑을때 newArr에서 pop을 하여 basket에 push한다.\

pop을 할때, 이미 인형을 다 뺀 배열의 경우 pop을 하면 undefined를 리턴함으로 체크하여 다음 순서로 넘긴다.\
그리고 뽑은 인형이 basket에 제일 마지막 인형과 같은지 확인하여 같으면 count를 올리고, basket의 제일 마지막 인형을 pop하고 다음 순서로 넘긴다.\
위에 두가지에 해당하지 않는 경우에는 뽑은 인형을 basket에 push한다.

https://programmers.co.kr/learn/courses/30/lessons/64061
