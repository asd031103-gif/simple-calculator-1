// 단위 테스트: 함수 하나를 격리해서 테스트
import { add, subtract, calculate } from "../../src/calculator.js";

describe("add", () => {
    test("두 양수를 더한다", () => {
        expect(add(2, 3)).toBe(5);
    });

    test("음수도 처리한다", () => {
        expect(add(-2, 5)).toBe(3);
    });
});

describe("calculate", () => {
    test("연산자 문자열로 알맞은 함수를 호출한다", () => {
        expect(calculate("add", 1, 2)).toBe(3);
    });

    test("알 수 없는 연산자는 에러를 던진다", () => {
        expect(() => calculate("modulo", 1, 2)).toThrow("알 수 없는 연산자");
    });
});

// ⬇️ 빼기(subtract) 단위 테스트가 아래에 새로 추가되었습니다!
describe("subtract", () => {
    test("두 수를 뺀다", () => {
        expect(subtract(10, 4)).toBe(6);
    });
    test("음수 결과도 처리한다", () => {
        expect(subtract(3, 10)).toBe(-7);
    });
});