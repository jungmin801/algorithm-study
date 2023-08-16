function solution(score) {
    let answer = [];
    const average = score.map( item => (item[0]+item[1]) / 2 )
    for(let i=0; i<average.length; i++){
        let rank = 1;
        for(let j=0; j<average.length; j++){
            if(average[i]<average[j]){
                rank++;
            }
        }
        answer.push(rank);
    }
    
    return answer;
    
//     const average = score.map( item => (item[0]+item[1]) / 2 )  // 75, 75, 40, 95, 95, 100, 20
//     const sortArr = [...average].sort((a,b) => b-a);

//     const rank = []; 
//     for(let i=0; i<sortArr.length; i++){
//         rank.push([sortArr[i],i+1]);
//         if(sortArr[i] === sortArr[i+1]) {
//          rank.push([sortArr[i+1],i+1]);
//          i += 1;   
//         }
//     }
    
//     let answer = [];
//     average.forEach(value => {
//         rank.forEach(item => {
//             if (item[0] === value) {
//                 answer.push(item[1]);
//                 break;
//             }
//         });
//     });
    
//     console.log(answer)
    
    
// //     const answer = [];
// //     for(let j=0; j<average.length; j++){
// //         for(let z=0; z<rank.length; z++){
// //             if(average[j] === rank[z][0]) {
// //                 answer.push(rank[z][1]);
// //                 break;
// //             } else continue;
// //         }
// //     }
    
// //     return answer;
}