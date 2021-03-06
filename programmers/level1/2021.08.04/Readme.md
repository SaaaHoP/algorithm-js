# 2021.08.04 알고리즘 풀이

## Level 1 체육복

먼저 lost배열과 reserve배열을 오름차순으로 정렬 해준다.\
먼저 여유 체육복을 가진 학생이 도난 당했을 경우를 계산해준다.\
이중 for문을 통해 lost값과 reserve값이 같을 때 answer++ 해주고,\
탐색에서 제외 시켜주기 위해 해당 인덱스 자리 값을 둘다 -1로 해준다.\
번호가 전 번호, 다음 번호 학생에게 체육복을 빌려 줄 수 있다.\
이 또한 이중 for문을 사용하여 전 번호, 다음 번호가 같을때 answer++ 해주고,\
빌려 주었으므로 해당하는 reserve 인덱스에 -1로 해준다.

https://programmers.co.kr/learn/courses/30/lessons/42862

## Level 1 로또의 최고 순위와 최저 순위

당첨 숫자와 선택 숫자가 같은 개수를 count, 0인 카운트는 zeroCount로 개수를 센다.\
케이스를 count가 0, zeroCount가 0 일때로 나눈다.\
같은게 없거나, 하나만 같은 경우부터 6위이므로 가장 높은 순위를 계산할때 7 - count - zeroCount로,\
제일 낮은 순위는 같은것만 빼준 7 - count로 새로운 배열에 push한다.

https://programmers.co.kr/learn/courses/30/lessons/77484
