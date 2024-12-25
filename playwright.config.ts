import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
    testDir: './src/tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 1 : 0,
    workers: process.env.CI ? 1 : 5,
    reporter: [
        ['list'],
        [
            '@testomatio/reporter/lib/adapter/playwright.js',
            {
                apiKey: process.env.TESTOMATIO
            }
        ]
    ],

    use: {
        baseURL: 'https://shopdemo-alex-hot.koyeb.app',
        trace: 'retain-on-failure'
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] }
        }
    ]

    /* Run your local dev server before starting the tests */
    // webServer: {
    //   command: 'npm run start',
    //   url: 'http://127.0.0.1:3000',
    //   reuseExistingServer: !process.env.CI,
    // },
});
