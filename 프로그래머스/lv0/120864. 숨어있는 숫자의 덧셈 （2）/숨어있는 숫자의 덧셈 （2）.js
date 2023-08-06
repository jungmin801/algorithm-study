function solution(my_string) {
    // 1. my_string을 split한 후 각 요소를 parseInt하면 '1' -> 1, 'a' -> NaN
    // 2. 해당 배열의 요소를 join하여 하나의 문자로 만든다.
    // 3. NaN을 기준으로 split 한다. 
    
    let str = my_string.split('').map(a => parseInt(a)).join(''); // NaNNaNNaN1NaN2NaNNaN34NaNNaNNaN
    let arr = str.split('NaN').filter(a => a !== "").map( a => parseInt(a))
    
    console.log(str.split('NaN'))
    
    let answer = 0;
    arr.forEach( el => answer += el)
    return answer;

}