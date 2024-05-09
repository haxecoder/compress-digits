import { describe, test, expect } from 'vitest';
import { Decoder } from "../src/Decoder";
import { Table1, Table23, TableInt } from "../src/Tables";
describe("decode()", () => {
    const unit = new Decoder(Table1, Table23, TableInt);

    test("decode(!!!) => [1, 1, 1]", () => {
        const input = "!!!";
        expect(unit.decode(input)).toEqual([1, 1, 1]);
    });

    test("decode(R!S) => [31, 1, 62]", () => {
        const input = "R!S";
        expect(unit.decode(input)).toEqual([31, 1, 62]);
    });
});