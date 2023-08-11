function solution(balls, share) {
    let denominator = 1; // 분모
    let numerator = 1; // 분자
    
    for(let i=1; i<=balls-share; i++){
        denominator *= i;
    }
    
    for(let j=share+1; j<=balls; j++){
        numerator *= j;
    }
    
    return parseInt(numerator / denominator);
    
}