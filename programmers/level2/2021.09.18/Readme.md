# 2021.09.18 알고리즘 풀이

## Level 2 5주차\_모음사전

처음에 규칙을 찾아내는게 힘들었다. 각 자리수별로 알파벳 사이에 몇개에 단어가 만들어지는지를 캐치해야한다.\
AAAAA ~ AAAAU 5개, AAAA ~ AAAU 25개, AAA ~ AAU 125개, AA ~ AU 625개 이므로 count 배열이 781, 156, 31, 6, 1이다.\
그래서 각 자리별로 사전의 인덱스\*자릿수 카운트 + 하여 정답으로 몇번째에 있는지 구해준다.\
수학적인 규칙을 찾는게 중요한듯 하다. DFS로 푸는 사람도 있던거 같은데 나중에 해보자.

https://programmers.co.kr/learn/courses/30/lessons/84512
