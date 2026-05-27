// 사칙연산 순수 함수 모음: 같은 입력에 항상 같은 출력, 외부 상태 변경 없음
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

// ⬇️ 곱하기 함수가 새로 추가되었습니다!
export function multiply(a, b) {
    return a * b;
}

// 연산자 문자열을 받아 알맞은 함수를 골라 실행
export function calculate(operator, a, b) {
    // ⬇️ ops 객체 안에 multiply를 추가해 줍니다!
    const ops = { add, subtract, multiply };
    const fn = ops[operator];
    if (!fn) {
        throw new Error(`알 수 없는 연산자: ${operator}`);
    }
    return fn(a, b);
}