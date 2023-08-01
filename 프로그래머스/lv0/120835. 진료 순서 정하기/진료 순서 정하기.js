function solution(emergency) {
    let answer = [];
    let sortArr = [...emergency].sort((a,b) => b-a)
    
    for(let i=0; i<emergency.length; i++){
        for(let j=0; j<sortArr.length; j++){
            if(emergency[i] === sortArr[j]){
                answer.push(j+1);
                break;
            }
        }
    }
    return answer;
}