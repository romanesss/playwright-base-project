import playwright from 'eslint-plugin-playwright';
import tseslint from 'typescript-eslint';
import eslint from '@eslint/js';

export default tseslint.config(eslint.configs.recommended, tseslint.configs.recommended, playwright.configs['flat/recommended'], {
    files: ['**/spec.ts'],
    rules: {
        'playwright/no-focused-test': 'error',
        'playwright/no-duplicate-hooks': 'error',
        'playwright/prefer-lowercase-title': 'error',
        'playwright/no-page-pause': 'warn',
        'playwright/no-useless-await': 'warn'
    }
});
