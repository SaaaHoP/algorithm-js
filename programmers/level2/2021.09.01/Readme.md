# 2021.09.01 알고리즘 풀이

## Level 2 [3차] n진수 게임(카카오)

조금 어려웠다. toString을 통해 n 진수로 바꾸어 줬다.\
for문을 두번 돌려서, 첫번째 for문은 숫자의 갯수 t만큼, 두번째 for문은 1 ~ m번 까지 순서로 for문을 돌렸다.\
j라는 수를 사용해서, n진수의 숫자 자릿수로 사용하였다.\
j가 n진수의 길이를 넘어가면, 정수를 1 올리고, 다시 n진수로 변환하여 반복하였다.\
16진수 같은 알파벳이 들어가면 대문자로 나와야 하므로 toUpperCase를 사용했다.\
toString 16진수 하면 알파벳은 소문자로 나온다.

https://programmers.co.kr/learn/courses/30/lessons/17687

## Level 2 올바른 괄호

쉽다. 문자열의 길이만큼 for문을 돌려서, 처음에 ) 나오면 무조건 올바르지 않으니,\
false를 리턴하고, for문을 돌면서 ( 카운트, ) 카운트를 계산한다.\
돌다가 ) 카운트가 더 커지면 올바르지 않으므로, false를 리턴한다.

https://programmers.co.kr/learn/courses/30/lessons/12909
