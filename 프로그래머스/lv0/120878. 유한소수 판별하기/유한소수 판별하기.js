function solution(a, b) {
    // 기약분수인지 판별? a와 b의 최대공약수를 구해서 나눈다.
    // 분모의 소인수를 구한다.
    // 2와 5만이 포함되어있다면 유한소수이다.
    
    let num = 0;
    if( a > b ){
       for(let i=1; i<=b; i++){
        if( a%i === 0 && b%i === 0 ) num = i;
        }
    } else {
        for(let i=1; i<=a; i++){
        if( a%i === 0 && b%i === 0 ) num = i;
        }
    }
    

    a = a / num;
    b = b / num;
    
    // b까지 소수 구하기
    let answer = 0;
    
    if(b === 1) {
       return answer = 1;
    } else {
      let prime = [2];
      for(let i=3; i<=b; i++){
          let isprime = true;
        for(let j=2; j<i; j++){
            if(i % j === 0) {
                isprime = false;
                break;
            } 
        }
        if(isprime === true) prime.push(i);
      }

        let result = prime.filter( el => b % el === 0 );
        if(result.some( el => el !== 2 && el !== 5)) {
            return answer = 2
        } else return answer = 1
     }
  
}