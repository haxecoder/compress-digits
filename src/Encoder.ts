export class Encoder {

    constructor(
        private readonly table1: string,
        private readonly table23: string,
        private readonly tableInt: string,
    ) {}
    public encode(input: number[]): string {
        const chars: string[] = [];

        input.forEach(value => {
            if (value.toString().length === 1) {
                chars.push(this.table1.charAt(value));
                return;
            }

            if (value % this.table23.length === 0) {
                chars.push(this.tableInt.charAt(value / this.table23.length));
                return;
            }

            const int = Math.floor(value / this.table23.length);

            if (int === 0) {
                chars.push(this.table23.charAt(value));
                return;
            }

            chars.push(`${int}`);
            if (value % this.table23.length === 0) {
                return;
            }

            const remain = value % this.table23.length;

            chars.push(this.table23.charAt(remain));
        });

        return chars.join("");
    }
}
