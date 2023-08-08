function solution(numbers, k) {
    let arr = numbers.filter((_,i) => i % 2 === 0);
    
    if(numbers.length % 2 !== 0 ){
        let second = numbers.filter((_,i) => i % 2 !== 0);
       arr = [...arr, ...second] 
    }

    if(arr.length >= k) return arr[k-1];
    else {
        if(k % arr.length === 0) return arr[arr.length-1]
        else return arr[(k % arr.length)-1] 
    }
}