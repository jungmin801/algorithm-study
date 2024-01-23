function solution(brown, yellow) {
    const sum = brown + yellow;
    
    for (let i = 1; i <= Math.sqrt(sum); i++) {
        if (sum % i === 0) {
            const width = sum / i;
            const height = i;
            
            // (가로-2) * (세로-2) = yellow 조건 확인
            if ((width - 2) * (height - 2) === yellow) {
                return [width, height];
            }
        }
    }
}