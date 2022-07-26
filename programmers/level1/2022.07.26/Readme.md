# 2022.07.26 알고리즘 풀이

## Level 1 최소직사각형

https://school.programmers.co.kr/learn/courses/30/lessons/86491

이번 알고리즘 문제를 풀면서 알게 된 점 :

array.sort() 메서드를 사용할때, compareFunction을 넣어주지 않으면 array 내부의 요소들을 문자열로 취급하여 유니코드 값 순서로 정렬한다.

Math.max() 메서드에서 배열의 최대값을 알고 싶을 때, Math.max(...array) 스프레드 연산자를 이용해야 한다.\
추가로, 배열의 요소가 너어무 많을때 스프레드 연산자로 Math.max를 이용하면 잘못된 결과를 반환할수도 있다고 한다.\
array.reduce를 사용하는걸 추천한다고 한다.
