function solution(s, n) {
    return s.split("").map((str) => {
        if (str === " ") {
            return str;
        } else {
            const origin = str.toUpperCase().charCodeAt() + n;
            const result = origin > 90 ? str.charCodeAt() - 26: str.charCodeAt(); 
            return String.fromCharCode(result + n);
        }
        
    }).join("");
}
