function solution(my_string, target) {
    let split = my_string.split(target);
    return split.length >= 2 ? 1 : 0;
}