# 2021.08.01 알고리즘 풀이

## Level 1 가운데 글자 가져오기

별로 안어렵다. if문 사용해서 해당하는 케이스때 문자 반환해주면 된다.

https://programmers.co.kr/learn/courses/30/lessons/12903

## Level 1 숫자 문자열과 영단어(카카오)

숫자, 영단어가 들어가있는 배열을 선언 한 뒤, for문을 사용한다.\
JS에 replaceAll이 문서에는 있는데 사용이 안되서 reaplce 와 정규식을 사용하였다.\
정규식이 변수로 바뀌므로 new RegExp를 사용하여 정규식을 만들었다.\
RegExp('정규식', '조건')으로 선언 하면 되고, 조건에는 모두 바꿀지, 대소문자 구별할지 등의 조건들이 들어간다.\
마지막으로 숫자를 반환해야 하므로 문자형식을 parseInt로 숫자로 변환해준다.

https://programmers.co.kr/learn/courses/30/lessons/81301
