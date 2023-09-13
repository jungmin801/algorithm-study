function solution(sizes) {
    let wArr = [];
    let hArr = [];
    sizes.forEach(el=>{
        if(el[0] < el[1]) {
            [el[0], el[1]] = [el[1], el[0]];   
        }
        wArr.push(el[0]);
        hArr.push(el[1]);
    })
    return Math.max(...wArr) * Math.max(...hArr);
}
    