function solution(numlist, n) {    
    let obj = {};
    numlist.sort((a,b) => b-a)
           .forEach( a => {
               let diff = Math.abs(n - a);
               if(!obj.hasOwnProperty(diff)) { 
                   obj[diff] = [];    
               }
               obj[diff].push(a);
           });
    return Object.values(obj);
}