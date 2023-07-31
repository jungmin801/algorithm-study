function solution(numbers, direction) {
    // 1. right : 마지막 값을 맨 앞에 넣어주고, 맨 마지막 값을 삭제
    // 2. left : 마지막 값을 맨 뒤에 넣어주고, 맨 앞 값을 삭제
    let answer = [];
    
    if(direction === "right" ){
        numbers.unshift(numbers[numbers.length-1]);
        numbers.pop();
    } else {
        numbers.push(numbers[0]);
        numbers.splice(0,1);
    }
    return numbers
     
}