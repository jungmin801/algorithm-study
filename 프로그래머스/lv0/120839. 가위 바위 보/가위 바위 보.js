function solution(rsp) {
    return answer = [...rsp].map( a => {
        if(a === '2') return 0
        else if(a === '0') return 5
        else return 2
    }).join('')
}