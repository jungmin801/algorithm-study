function solution(n) {
    let prime = [2,3];
    for(let i=4; i<=n; i++){
        let isprime = false;
        for(let j=2; j<i; j++){
            if(i % j === 0) {
                isprime = true;
                break;
            }
        }
        if(isprime === false) prime.push(i);
    }

    let answer = [];
    for(let x=0; x<prime.length; x++){
        if(n % prime[x] === 0) answer.push(prime[x])
    }
    
    return answer;
}

