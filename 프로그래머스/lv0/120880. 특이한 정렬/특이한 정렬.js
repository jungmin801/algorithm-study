function solution(numlist, n) {
    let set = new Set();
    numlist.sort((a,b) => b-a).map( x => set.add(Math.abs(n - x)));
    let setArr = [...set].sort((a,b) => a-b);
    
    let obj = {};
    for(let value of set){
       let temp = numlist.filter( el => (Math.abs(n - el) === value));
       obj[value] = temp;                          
    }
    
    let answer = [];
    for(let index in obj){
        answer.push(...obj[index]);
    }
    
    return answer;
}