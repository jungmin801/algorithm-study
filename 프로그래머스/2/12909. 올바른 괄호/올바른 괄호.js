function solution(s){
    // 1. "("를 스택에 집어넣는다.
    // 2. ")"가 나오면 스택에 집어넣은 후에 한쌍을 pop한다.
    // 3. 반복하여 스택이 비면 true, 아니면 false
    
    const stack = [];
    for(let i=0; i<s.length; i++){
        if(s[i] === "("){
            stack.push("(");
        }else{
            stack.push(")");
            if(stack.includes("(")){
                stack.pop();
                stack.pop();
            } else continue;
        }
    }
    
    
    return stack.length === 0 ? true : false;
}