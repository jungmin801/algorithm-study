function solution(s) {
    let str = [...s].sort().join('');
    let set = [...new Set(str)];
    let arr = [];
    let cnt = 0;
    for(let i=0; i<set.length; i++){
        cnt = 0;
        for(let j=0; j<str.length; j++){
            if(set[i] === str[j]) {
               cnt += 1 
            }
        }
        arr.push([set[i],cnt])
        
    }
    let answer = '';
    arr.forEach( (el, i) => {
        return arr[i][1] === 1 ? answer += arr[i][0] : ''})
    return answer;
}