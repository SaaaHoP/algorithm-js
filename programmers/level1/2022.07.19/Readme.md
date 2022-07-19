# 2022.07.19 알고리즘 풀이

## Level 1 신고 결과 받기(카카오)

https://school.programmers.co.kr/learn/courses/30/lessons/92334?language=javascript

이번 알고리즘 문제를 풀면서 알게 된 점 :

new Set의 Set 자료구조에서는 forEach를 쓸 수 있다. (Object는 쓸 수 없음.)\
(https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach)

객체에서 for문을 쓸 때, for(const temp in Object) 하면 Object의 key들을 순서대로 temp로 쓸 수 있다.

Array의 for문은 순서를 보장하지만, 객체에서 for문을 쓸 때는 순서를 보장하지 않기 때문에 주의하자.
