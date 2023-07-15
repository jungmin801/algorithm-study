function solution(my_string, n) {
    
    let answer = [];
    [...my_string].forEach( a => {
        for(let i=1; i<=n; i++){
            answer.push(a);
        }
    })
    return answer.join('');
}