function solution(score) {
    const average = score.map( item => (item[0]+item[1]) / 2 )  // 75, 75, 40, 95, 95, 100, 20
    const sortArr = [...average].sort((a,b) => b-a); //  100, 95, 95, 75, 75, 40, 20
    
    const rank = []; 
    for(let i=0; i<sortArr.length; i++){
        rank.push([sortArr[i],i+1]);
        if(sortArr[i] === sortArr[i+1]) {
         rank.push([sortArr[i+1],i+1]);
         i += 1;   
        }
    }
    
    const answer = [];
    for(let j=0; j<average.length; j++){
        for(let z=0; z<rank.length; z++){
            if(average[j] === rank[z][0]) {
                answer.push(rank[z][1]);
                break;
            } else continue;
        }
    }
    
    return answer;
}