function solution(box, n) {
    // 1. 모서리의 길이 n으로 상자의 가로, 세로, 높이 값을 나눈 몫을 구한다.
    // 2. 구한 3개의 몫을 모두 곱한다.
    
    return answer = box.map( a => parseInt(a/n)).reduce( (acc, cur) => acc * cur, 1) 
}