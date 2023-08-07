function solution(my_str, n) {
    let answer = [];
    let cycle = 1;
    for(let i=0; i<my_str.length; i += n){
        answer.push(my_str.slice(i, n*cycle));
        cycle += 1;
    }
    
    return answer;
}