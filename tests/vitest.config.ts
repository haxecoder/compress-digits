import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        reporters: ["default"],
        include: ['tests/**/*.spec.ts']
    },
    resolve: {
        alias: {
            'src': resolve(__dirname, '../src')
        },
    },
});