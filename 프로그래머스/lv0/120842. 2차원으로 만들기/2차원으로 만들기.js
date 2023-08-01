function solution(num_list, n) {
    let answer = [];
    let cycle = 1;
    for(let i=0; i<num_list.length; i += n){
        answer.push(num_list.slice(i,n*cycle))
        cycle++
    }
   return answer;
    
    // for(let i=0; i<num_list.length; i += n){
    //     let innerArr = [];
    //     for(let j=0; j<n; j++){
    //         innerArr.push(num_list[j])
    //         if(innerArr.length === n) {
    //             num_list.slice(0,n)
    //             break;
    //         }
    //     }
    //     answer.push(innerArr);
    //     innerArr = [];
    // }
}