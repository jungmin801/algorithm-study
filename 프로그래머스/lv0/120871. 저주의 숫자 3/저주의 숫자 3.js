function solution(n) {
    let answer = [];
    let num = 1;
    
    while(answer.length < n){  
        if(String(num).split('').includes('3') === false) {
            if( num % 3 !== 0 ) {
                answer.push(num);
            }
        }         
        num++
    }
    
    return (answer[n-1]); 
}