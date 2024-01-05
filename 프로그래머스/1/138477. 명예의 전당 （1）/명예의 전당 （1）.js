function solution(k, score) {
    let result = [score[0]];
    let hallOfFame = [score[0]];
    
    for(let i=1; i<score.length; i++) {
        if(i < k) {
            hallOfFame.push(score[i]);
            result.push(Math.min(result[i-1], score[i]));
        } else{
            let min = Math.min(...hallOfFame);
            if(min < score[i]) {
                hallOfFame[hallOfFame.indexOf(min)] = score[i];
            }
            result.push(Math.min(...hallOfFame));
        }
    }
    return result
}