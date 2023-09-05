function solution(arr){
    let currentVal = arr[0]
    let answer = [arr[0]];
    for(let i = 1; i<arr.length; i++){
        if(currentVal !== arr[i]) {
            currentVal = arr[i];
            answer.push(arr[i]);            
        }
    }
    return answer;
}