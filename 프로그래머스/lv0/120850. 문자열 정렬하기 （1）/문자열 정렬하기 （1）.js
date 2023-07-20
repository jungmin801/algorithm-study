function solution(my_string) {
    return answer = [...my_string].map( a => parseInt(a)).filter( b => Number.isInteger(b) ).sort((x,y) => x - y)
    
}