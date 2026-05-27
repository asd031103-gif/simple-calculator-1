/**
 * @jest-environment jsdom
 */
import fs from "fs";
import path from "path";

const __dirname = path.resolve();

describe("계산기 UI 통합", () => {
    beforeEach(async () => {
        const html = fs.readFileSync(
            path.resolve(__dirname, "src/index.html"),
            "utf8"
        );
        document.documentElement.innerHTML = html;
        jest.resetModules();
        await import("../../src/app.js");
    });

    test("더하기 버튼이 두 입력값을 더해 display에 표시한다", () => {
        document.getElementById("inputA").value = "7";
        document.getElementById("inputB").value = "8";
        document.querySelector('[data-testid="btn-add"]').click();
        expect(document.querySelector('[data-testid="display"]').textContent).toBe("15");
    });

    test("초기화 버튼이 입력과 display를 리셋한다", () => {
        document.getElementById("inputA").value = "1";
        document.getElementById("inputB").value = "2";
        document.querySelector('[data-testid="btn-add"]').click();
        document.querySelector('[data-testid="btn-clear"]').click();
        expect(document.getElementById("inputA").value).toBe("");
        expect(document.getElementById("inputB").value).toBe("");
        expect(document.querySelector('[data-testid="display"]').textContent).toBe("0");
    });

    test("빼기 버튼이 두 입력값을 빼서 display에 표시한다", () => {
        document.getElementById("inputA").value = "10";
        document.getElementById("inputB").value = "8";
        document.querySelector('[data-testid="btn-subtract"]').click();
        expect(document.querySelector('[data-testid="display"]').textContent).toBe("2");
    });

    test("곱하기 버튼이 두 입력값을 곱해서 display에 표시한다", () => {
        document.getElementById("inputA").value = "2";
        document.getElementById("inputB").value = "9";
        document.querySelector('[data-testid="btn-multiply"]').click();
        expect(document.querySelector('[data-testid="display"]').textContent).toBe("18");
    });

    // ⬇️ 나누기 버튼 기능 검증 통합 테스트가 새로 추가되었습니다!
    test("나누기 버튼이 두 입력값을 나눠서 display에 표시한다", () => {
        document.getElementById("inputA").value = "15";
        document.getElementById("inputB").value = "3";
        document.querySelector('[data-testid="btn-divide"]').click();
        expect(document.querySelector('[data-testid="display"]').textContent).toBe("5");
    });
});