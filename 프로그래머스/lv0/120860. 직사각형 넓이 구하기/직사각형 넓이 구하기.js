function solution(dots) {
    let x = dots.map( a => a[0] );
    let y = dots.map ( a => a[1] );
    
    let min = [Math.min(...x), Math.min(...y)];
    let max = [Math.max(...x), Math.max(...y)];
    
    return answer = (max[0]-min[0]) * (max[1]-min[1]);
}
