function solution(s) {
    let str = [];
    let answer = [];
    
    for(let i=0; i<s.length; i++){
        if(!str.includes(s[i])) {
            answer.push(-1);   
        } else {
            let index = str.lastIndexOf(s[i]);
            answer.push(i-index);
        }
        str.push(s[i]);
    }
    return answer;
}