import { describe, test, expect } from 'vitest';
import { Encoder } from "../src/Encoder";
import { Table1, Table23, TableInt } from "../src/Tables";
describe("encode()", () => {
    const unit = new Encoder(Table1, Table23, TableInt);

    test("encode([1,1,1]) => !!!", () => {
        const input = [1, 1, 1];
        expect(unit.encode(input)).toBe("!!!");
    });

    test("encode([31, 1, 62]) => R!S", () => {
        const input = [31, 1, 62];
        expect(unit.encode(input)).toBe("R!S");
    });
});

