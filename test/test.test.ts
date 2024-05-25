import { expect, test } from "bun:test";
import { hello } from "..";

test("hello() should return a greeting", () => {
	const result = hello("John");
	expect(result).toBe("Hello, John!");
});
