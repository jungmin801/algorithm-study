function solution(n, control) {
    let answer = [...control].reduce( (acc,cur) => {
        if ( cur === 'w') return acc + 1 
        else if ( cur === 's') return acc - 1
        else if ( cur === 'd') return acc + 10
        else if ( cur === 'a') return acc - 10
    }, n)
    return answer
  
    
//     obj.w = arr.filter( a => a === 'w').length;
//     obj.s = arr.filter( a => a === 's').length * -1;
//     obj.d = arr.filter( a => a === 'd').length * 10;
//     obj.a = arr.filter( a => a === 'a').length * -10;
    
//     return answer = n + obj.w + obj.s + obj.d + obj.a 
//     let answer = n;
//     for (let i = 0; i<=control.length; i++) {
//         if(control[i] === 'w') {
//             answer += 1
//         }
//         else if(control[i] === 's') {
//             answer -= 1
//         } else if(control[i] === 'd') {
//             answer += 10
//         } else if (control[i] === 'a') {
//             answer -= 10
//         }
//     }
    
//     return answer;
}