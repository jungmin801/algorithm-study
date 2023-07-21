function solution(my_string) {
    // 1. 전체를 소문자로 변환하여 새로운 변수에 집어넣는다.
    // 2. 새로운 변수의 각 요소가 my_string의 각 요소와 같은지 체크한다.
    // 3. 같으면 대문자로 변환
    
    // 문자열로 풀기
    // let str = my_string.toLowerCase();
    // let answer = '';
    // for(let i = 0; i<my_string.length; i++){
    //     if(str[i] === my_string[i]) answer += str[i].toUpperCase()
    //     else answer += str[i]
    // }
    // return answer;
    
    // 배열로 풀기
    let arr = [...my_string].map( a => a.toLowerCase())
    return answer = arr.map( (b, i) => {
        return b === my_string[i] ?  b.toUpperCase() :  b
    }).join("")
}