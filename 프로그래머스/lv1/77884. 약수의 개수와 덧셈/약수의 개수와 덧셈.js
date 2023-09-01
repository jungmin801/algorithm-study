function solution(left, right) {
    let answer = 0;
    for(let i=left; i<=right; i++){
        let arr = [1];
        for(let j=2; j<=right; j++){
            i % j === 0 ? arr.push(j) : '';
        }
        arr.length % 2 === 0 ? answer += i : answer -= i;
    }
    return answer;   
    
    

}