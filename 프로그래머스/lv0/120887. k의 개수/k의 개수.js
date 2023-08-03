function solution(i, j, k) {
    let cnt = 0;
    let str = [];
    for(let x=i; x<=j; x++){
        str = [...(x).toString()];
        cnt += str.filter(el => el === (k).toString()).length
        str = [];
    }
    return cnt
}