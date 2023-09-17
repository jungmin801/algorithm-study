function solution(array, commands) {
    return answer = commands.map(el => {
        let [i, j, k] = el;
        const slice = array.slice(i-1, j).sort((a,b) => a-b);
        return slice[k-1]; 
    });
}