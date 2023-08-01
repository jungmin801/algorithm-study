function solution(my_string) {
    let str = my_string.split('')
    let set = new Set();
    
    str.forEach( a => set.add(a) )
    
    return [...set].join('')
}