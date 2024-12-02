function solution(p, s) {
   const queue = [];
    const answer = [];
    for(let i=0; i < p.length; i++){
        queue.push(Math.ceil((100-p[i]) / s[i]))
    }

    while(queue.length > 0) {
        let count = 1;
        for(let j=0; j<queue.length-1; j++){
            if(queue[0] >= queue[j+1]) {
                count++;
            }
            else break;
        }
        
        answer.push(count);
        queue.splice(0, count);
    }
    return answer;
}