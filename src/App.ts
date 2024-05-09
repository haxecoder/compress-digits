import { Encoder } from "./Encoder";
import { Table1, Table23, TableInt } from "./Tables";

class App {
    private readonly encoder: Encoder;

    constructor() {
        this.encoder = new Encoder(Table1, Table23, TableInt);
    }

    public run() {
        this.runCase("random 50", this.generateInput(50));
        this.runCase("random 100", this.generateInput(100));
        this.runCase("random 500", this.generateInput(500));
        this.runCase("random 1000", this.generateInput(1000));

        this.runCase("one digit 50", this.generateInput(50, 9));
        this.runCase("one digit 100", this.generateInput(100, 9));
        this.runCase("one digit 500", this.generateInput(500, 9));
        this.runCase("one digit 1000", this.generateInput(1000, 9));

        this.runCase("two digits 50", this.generateInput(50, 89, 10));
        this.runCase("two digits 100", this.generateInput(100, 89, 10));
        this.runCase("two digits 500", this.generateInput(500, 89, 10));
        this.runCase("two digits 1000", this.generateInput(1000, 89, 10));

        this.runCase("three digits 50", this.generateInput(50, 200, 100));
        this.runCase("three digits 100", this.generateInput(100, 200, 100));
        this.runCase("three digits 500", this.generateInput(500, 200, 100));
        this.runCase("three digits 1000", this.generateInput(1000, 200, 100));

        this.runCase("all numbers 3 times", this.generateAllForThreeInput900());
    }

    private runCase(caseName: string, input: number[]) {
        console.log(`running case ${caseName}`);
        const serialized = input.join(",").length;
        const encoded = this.encoder.encode(input);
        const encodedLen = encoded.length;
        console.log(`serialized: ${serialized}, encoded: ${encodedLen} (${((encodedLen / serialized) * 100).toFixed(3)}%)`);
    }

    private generateAllForThreeInput900(): number[] {
        const result: number[] = [];

        for (let i = 1; i < 301; i++) {
            result.push(i);
            result.push(i);
            result.push(i);
        }

        return result;
    }

    private generateInput(valuesCount: number, maxValue = 300, minValue = 1): number[] {
        const result: number[] = [];
        for (let i = 0; i < valuesCount; i++) {
            result.push(Math.floor(Math.random() * maxValue) + minValue);
        }
        return result;
    }
}

const app = new App();
app.run();