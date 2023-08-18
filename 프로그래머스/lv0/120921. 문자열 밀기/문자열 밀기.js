function solution(A, B) {
    let cnt = 0;
    let arrA = A.split('');
    
    if (A === B) {
        return cnt;
    } else {
        for(let i=0; i<A.length; i++){
            cnt++;
            
            let last = arrA.splice(-1);
            arrA.unshift(...last);
            let newA = arrA.join('');
            
            if(newA === B) return cnt;
            else {
                if(cnt === A.length) return -1;
            }  
        }
        return cnt;
    }
}