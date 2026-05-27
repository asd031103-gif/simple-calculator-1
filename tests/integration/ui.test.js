/**
 * @jest-environment jsdom
 */
import fs from "fs";
import path from "path";

// ⬇️ import.meta 오류를 방지하기 위해 일반 노드 경로 문법으로 대체했습니다.
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

    // 빼기 버튼 기능 검증 통합 테스트
    test("빼기 버튼이 두 입력값을 빼서 display에 표시한다", () => {
        document.getElementById("inputA").value = "10";
        document.getElementById("inputB").value = "8";
        document.querySelector('[data-testid="btn-subtract"]').click();
        expect(document.querySelector('[data-testid="display"]').textContent).toBe("2");
    });
});