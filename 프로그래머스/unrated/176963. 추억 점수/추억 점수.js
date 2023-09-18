function solution(name, yearning, photo) {
    let obj = {};
    name.forEach((el,index) => obj[el] = yearning[index]);
    
    let convert = photo.map(arr => {
        return arr.map(name => obj.hasOwnProperty(name)? obj[name] : 0)
                  .reduce((acc,cur) => acc + cur);
    })
    
    return convert;
}