function quickSort(origin) {
    if (origin.length < 2) {
        return origin;   
    }
    
    const left = [];
    const right = [];
    const [pivot] = origin; 
    
    for (let i=1; i<origin.length; i++) {
        if (parseInt(pivot + origin[i]) < parseInt(origin[i] + pivot)) {
            left.push(origin[i]);
        } else {
            right.push(origin[i]);
        }
    }
    
    return quickSort(left).concat(pivot, quickSort(right));
}

function solution(numbers) {
    const answer = quickSort(numbers.map((data) => String(data) || "0"));
    
    if (answer[0] == '0') return "0";
    else return answer.join("");
}
