function solution(keyinput, board) {
    // board[0], board[1] -> -1 한 만큼까지만 이동 가능
    
    let x = 0;
    let y = 0;
    const rangeX = (board[0]-1) / 2;
    const rangeY = (board[1]-1) / 2;
    
    for(let value of keyinput){
        if(value === "right") {
            x < rangeX ? x += 1 : x = rangeX 
        } else if(value === "left") {
            x > -rangeX ? x -= 1 : x = -rangeX 
        } else if(value === "up") {
            y < rangeY ? y += 1 : y = rangeY 
        } else if(value === "down") {
            y > -rangeY ? y -= 1 : y = -rangeY 
        }    
    }
    
    return [x,y]


    
}