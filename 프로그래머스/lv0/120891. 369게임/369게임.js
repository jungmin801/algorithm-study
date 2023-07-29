function solution(order) {
    let arr = [...String(order)].map(a => parseInt(a));
    let answer = arr.filter( b => {
        if( b === 3 || b === 6 || b === 9) return b
    }).length
    
    return answer;
}