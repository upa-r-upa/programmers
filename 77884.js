function solution(left, right) {
    let result = 0;
    
    for (let i = left; i <= right; i++) {
        let isEven = true;
        
        for (let j = 1; j <= i; j ++) {
            if (i % j == 0) isEven = !isEven;
        }
        
        result += isEven ? i : i * -1;
    }
    
    return result;
}
