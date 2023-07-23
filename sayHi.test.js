import { sayHi } from ".";
import {expect, jest, test} from '@jest/globals';

test("Returns a greeting as a string", function () {
	expect(typeof sayHi()).toBe("string");
});
test("Returns a greeting as a string", function () {
	expect(sayHi("Merlin").includes("Merlin")).toBe(true);
});
test("Returns a greeting as a string", function () {
	expect(sayHi("Merlin")).toContain("Merlin");
});
test("Returns a greeting as a string", function () {
	expect(sayHi()).toBeTruthy();
});
test("Returns a greeting as a string", function () {
	expect(sayHi()).not.toHaveLength(0)
});
