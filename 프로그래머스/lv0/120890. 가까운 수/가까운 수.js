function solution(array, n) {
    array.sort((a,b) => a-b);
    
    let newArr = array.map( a => Math.abs(a-n));
    let index = newArr.indexOf(Math.min(...newArr));
    
    return array[index]
}