function solution(n, m) {
   if(n>m) [n,m] = [m,n];
    function GCD(a,b){
        if(b === 0) return a;
        else return GCD(b, a%b);
    }
   const result = GCD(n,m);
    
    if(result === 1) return [result, n*m];
    else return [result, n*m/result];
}