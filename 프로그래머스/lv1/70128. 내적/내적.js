function solution(a, b) {
    return answer = a.map( (el,i) => el*b[i])
                     .reduce((acc,cur)=> acc+cur, 0);
}