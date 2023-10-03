function solution(a, b, n) {
    let bottle = 0;
    let rest = 0;
    
    function divide(a, b, n){
        while(n > 0) {
            bottle += parseInt(n/a) * b;
            rest += parseInt(n%a);
            n = parseInt(n/a) * b;
            if(n === 0) rest += parseInt(n%a);
        }
    }

    divide(a,b,n);
    while( rest >= a ){
        n = rest;
        rest = 0;
        divide(a,b,n);
    }
    

    return bottle;
}