export class Decoder {

    constructor(
        private readonly table1: string,
        private readonly table23: string,
        private readonly tableInt: string,
    ) {}

    public decode(input: string): number[] {
        const result: number[] = [];

        for (let i = 0; i < input.length; i++) {
            const current = input.charAt(i);
            if (this.table1.indexOf(current) !== -1) {
                result.push(this.table1.indexOf(current));
                continue;
            }

            if (this.tableInt.indexOf(current) !== -1) {
                result.push(this.tableInt.indexOf(current) * this.table23.length);
                continue;
            }

            if (!this.isInteger(current)) {
                result.push(this.table23.indexOf(current));
                continue;
            }

            const next = input.charAt(i + 1);

            if (this.isInteger(next)) {
                result.push(+current * this.table23.length);
                continue;
            }

            const int = +current * this.table23.length;
            const remain = this.table23.indexOf(next);

            result.push(int + remain);
            i++;
        }

        return result;
    }

    private isInteger(s: string): boolean {
        let i = 0;
        const len = s.length;
        let charCode: number;
        while (i < len) {
            charCode = s.charCodeAt(i);
            if (charCode >= 48 && charCode <= 57) {
                i++;
                continue;
            }
            return false;
        }
        return true;
    }

}