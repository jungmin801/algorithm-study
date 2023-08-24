function solution(n) {
    let arr = n.toString().split('').map(a => parseInt(a));
    let answer = [];
    for(let i = arr.length-1; i >= 0; i--){
        answer.push(arr[i]);
    }
    
    return answer;
}