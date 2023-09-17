function convert(arr, n){
    return arr.map(el => {
        let str = el.toString(2);
        if(str.length < n) str = "0".repeat(n-str.length) + str;
        return str;
    })
};

function solution(n, arr1, arr2) {
    const binary1 = convert(arr1, n);
    const binary2 = convert(arr2, n);
    let answer = [];
    for(let i=0; i<binary1.length; i++){
        let check = "";
        for(let j=0; j<n; j++){
            if(binary1[i][j] === "1" || binary2[i][j] === "1") check += "1";
            else check += "0";
        }
        const replace = check.replaceAll("1","#").replaceAll("0"," ");
        answer.push(replace);
    }
    return answer;
};