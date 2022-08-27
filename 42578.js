function solution(clothes) {
    const hash = new Map();

    for (let i=0; i<clothes.length; i++) {
        const [item, type] = clothes[i]; 

        hash.set(type, (hash.get(type) || 0) + 1);
    }

    let acc = 1;
  
    for (const [, count] of hash) {
         acc *= 1 + count
    }
    return acc - 1;
}
