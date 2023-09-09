function solution(t, p) {
    let arr = [];
    for(let i = 0; i<t.length; i++){
        let slice = t.slice(i, i+p.length);
        if(slice.length === p.length) arr.push(slice);
    }
    return answer = arr.filter(el => parseInt(el) <= parseInt(p)).length;
}