function solution(numbers) {
    //1. 오름차순으로 정렬 -> 음수가 여러개 있을 수 있다.
    //2. 앞에서 2개, 뒤에서 2개를 곱한 값을 비교
     
    numbers.sort((x,y) => x - y);
    
    let a = numbers[0] * numbers[1];
    let b = numbers[numbers.length-1] * numbers[numbers.length-2];
    
    return answer = a > b ? a : b;
}