function solution(before, after) {
    // 1. before의 알파벳이 after에 포함도 되어있으면서, 개수도 같아야한다.
    // 2. 둘다 오름차순 sort를 한 후에 각 요소를 비교한다.
    
    let beforeArr = [...before].sort()
    let afterArr = [...after].sort()
    let check = true;
    beforeArr.forEach( (a,i) => {
        return a === afterArr[i] ? '' : check = false;
    })
    
    return check === true ? 1 : 0;
}