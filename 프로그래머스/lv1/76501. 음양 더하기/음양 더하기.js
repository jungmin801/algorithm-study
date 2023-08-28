function solution(absolutes, signs) {
    let sum = 0;
    absolutes.forEach( (el,i) => {
        if(signs[i]) sum += el;
        else sum += -el;
    })
    
    return sum;
}