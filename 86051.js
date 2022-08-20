function solution(numbers) {
    let max = 45;
    for (const num of numbers) {
        max -= num;
    }
    return max;
}
