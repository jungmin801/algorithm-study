function solution(cards1, cards2, goal) {
    let index1 = 0;
    let index2 = 0;
    let result = true;
    
    goal.forEach((item) => {
        if(item === cards1[index1]){
            index1++;
        } else if(item === cards2[index2]){
            index2++;
        } else {
            result = false;
        }
    })
    
    return result ? "Yes" : "No";
}