function solution(s, n) {
    const result = s.split('')
                   .map(el => {
                        if(el == ' ') return el;
                        const isUpperCase = el === el.toUpperCase();
                        const base = isUpperCase? 65 : 97;
                        const calc = (el.charCodeAt() - base + n) % 26;
                        return String.fromCharCode(base + calc);
                    }).join('');
    
    return result;
}