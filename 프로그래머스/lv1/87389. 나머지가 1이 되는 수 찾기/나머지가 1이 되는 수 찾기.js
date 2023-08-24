function solution(n) {
    // for(let i=2; i<n; i++){
    //     if(n % i === 1) return i
    // }
   
    let i=2; 
    while( n % i !== 1){
        i++;
    }
    
    return i;
}
