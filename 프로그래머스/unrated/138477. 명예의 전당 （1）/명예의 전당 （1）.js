function solution(k, score) {
    let result = [score[0]];
    let hallOfFame = [score[0]];
    
    // 인덱스넘버 1부터 k-1까지 result와 명예의 전당에 k 개의 점수 채우기
    for(let i=1; i<k; i++){
        if(i >= score.length) break;
        if(score[i] < result[i-1]) result.push(score[i]);
        else(result.push(result[i-1]));
        hallOfFame.push(score[i]);
        
    }
    
    // 인덱스넘버 k부터 score배열 끝까지 돌면서 다음 점수와 최소값 비교
    for(let j=k; j<score.length; j++){
        let min = Math.min(...hallOfFame);
        if(min < score[j]) hallOfFame[hallOfFame.indexOf(min)] = score[j];
        result.push(Math.min(...hallOfFame));
    }
    
    return result;

}