function solution(numlist, n) {    
    let obj = {};
    numlist.sort((a,b) => b-a)
           .forEach( a => {
               let diff = Math.abs(n - a);
               if(!obj.hasOwnProperty(diff)){
                   obj[diff] = [];
               }
               obj[diff].push(a);
           });
    
    let answer = [];
    for(let index in obj){
        answer.push(...obj[index]);
    }
    return answer;
}