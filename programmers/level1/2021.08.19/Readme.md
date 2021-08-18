# 2021.08.19 알고리즘 풀이

## Level 1 자릿수 더하기

매우 쉽다. 주어진 숫자를 toString으로 문자열로 바꾸고,\
문자열을 배열로 접근하여 각 인덱스의 해당하는 문자를 parseInt로 변환하여 더했다.

https://programmers.co.kr/learn/courses/30/lessons/12931

## Level 1 자연수 뒤집어 배열로 만들기

쉽다. 주어진 숫자를 toString으로 문자열로 바꾸고, split을 통해 배열로 만든다음,\
reverse를 하여 역순으로 변경 하였다. 마지막으로, map 을 통해 각각 배열 요소가 string 타입이므로 parseInt를 통해 숫자로 변환 해줬다.

https://programmers.co.kr/learn/courses/30/lessons/12932

## Level 1 정수 내림차순으로 배치하기

쉽다. 위의 문제와 비슷하게 풀면 된다. 숫자를 toString으로 문자열로 바꾸고, split을 통해 배열로 만든다음,\
sort((a,b) => b-a)를 통해 내림차순으로 정렬 해주었다. 마지막으로 join하여 문자열로 합쳐주고, parseInt하여 숫자로 변환 해줬다.

https://programmers.co.kr/learn/courses/30/lessons/12933

## Level 1 정수 제곱근 판별

for문을 통하여, Math.pow(i,2) 한 값이 주어진 숫자 n과 같으면 i의 제곱이 n이 된다.\
이를 통해 i+1의 제곱을 리턴해주고, if에서 나오지 않는다면 -1을 리턴 해주었다.

https://programmers.co.kr/learn/courses/30/lessons/12934

## Level 1 제일 작은 수 제거하기

배열에서 제일 작은 값을 찾기 위해 Math.min(...arr)을 사용했다. 주의할 점은, 배열에서 찾을때 스프레드 연산자를 사용해야 한다는 것이다.\
indexOf를 통해 제일 작은 값의 인덱스를 사용하여, splice하여 배열에서 값을 빼주었다.\
배열의 길이가 2보다 작은것들은 -1 배열을 리턴해주었다.

https://programmers.co.kr/learn/courses/30/lessons/12935
