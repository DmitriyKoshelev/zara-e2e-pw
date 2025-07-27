import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
<<<<<<< HEAD
=======
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    headless: true, // Запуск в headless режимі
    storageState: './auth/storageState.json',
  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
  locale: 'uk-UA',
  viewport: { width: 1280, height: 800 },
    
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://www.zara.com/ua',
>>>>>>> 3021ff785f294cdadedee300c77a1e2ea1160ebc

  use: {
    headless: false,
    baseURL: 'https://www.zara.com/ua',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ]
});
