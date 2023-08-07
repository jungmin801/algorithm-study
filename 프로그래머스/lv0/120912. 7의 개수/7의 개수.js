function solution(array) {
    let cnt = 0;
    let newArr = array.map(String);
    
    newArr.forEach( a => {
        if(a.split('7').length === 1) cnt += 0;
        else if(a.split('7').length >= 2 ) cnt += a.split('7').length - 1; 
    })
    
    return cnt;
}