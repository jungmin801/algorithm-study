function solution(s) {
    let acc = 0;
    let arr = s.split(' ').map( el => parseInt(el))
    arr.forEach( (a,i) => {
        if(!isNaN(arr[i])) acc += arr[i];
        else acc -= arr[i-1];
    })
    return acc;
}