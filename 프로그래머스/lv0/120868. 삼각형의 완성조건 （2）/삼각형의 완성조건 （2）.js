// 1. 두 값중에서 max값이 가장 긴 변이라면?
// 1-1. 두 값중에서 max 값을 찾는다.
// 1-2. for(let i=0; i<=max값; i++) -> max값 < i + 나머지길이 가 충족되는 개수를 찾는다.

// 2. 두 값 이외의 값이 가장 긴 변이라면?
// 2-2. for(let j=max값+1; j<=어레이의 두값의 합; j++) -> j의 개수를 찾는다.

function solution(sides) {
    let rest = Math.min(...sides) 
    let max = Math.max(...sides)
    let arr = [];
    // max가 가장 긴변일때
    for(let i=1; i<=max; i++){
        if(max < rest + i) arr.push(i);
    }
    // 가장 긴변이 따로 있을때
    for(let j=max+1; j<max+rest; j++){
        arr.push(j);
    }
    
    return arr.length;
}