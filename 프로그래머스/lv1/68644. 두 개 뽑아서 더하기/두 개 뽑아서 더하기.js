function solution(numbers) {
    const set = new Set();
    
    for(let i=0; i<numbers.length-1; i++){
        for(let j=i+1; j<numbers.length; j++){
            sum = numbers[i] + numbers[j];
            set.add(sum);
        } 
    }
    
    return [...set].sort((a,b) => a-b);
}