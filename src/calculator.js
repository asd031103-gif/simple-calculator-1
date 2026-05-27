export function add(a, b) {
    return a + b;
}

// ⬇️ 아래 빼기 함수를 새로 추가해 주세요!
export function subtract(a, b) {
    return a - b;
}

export function calculate(operator, a, b) {
    // ⬇️ 여기에 subtract를 추가해 줍니다!
    const ops = { add, subtract };
    const fn = ops[operator];
    if (!fn) {
        throw new Error(`알 수 없는 연산자: ${operator}`);
    }
    return fn(a, b);
}