import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['allure-playwright']],

  projects: [
    {
      name: 'ui',
      testMatch: 'ui/**/*.spec.ts',
      use: {
        ...devices['Desktop Chrome'],
        headless: true,
        screenshot: { mode: 'only-on-failure', fullPage: true },
        video: 'retain-on-failure',
        trace: 'on-first-retry',
        permissions: ['clipboard-read', 'clipboard-write'],
      },
    },
    {
      name: 'api',
      testMatch: 'api/**/*.spec.ts',
      use: {
        baseURL: 'https://api.example.com',
        extraHTTPHeaders: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        ignoreHTTPSErrors: true,
      },
    },
  ],
});
