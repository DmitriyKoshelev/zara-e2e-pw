import { Locator, Page } from '@playwright/test';

export class SearchPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async acceptCookiesIfVisible() {
    const cookieButton = this.page.getByRole('button', { name: 'Дозволити всі файли cookie' });
    if (await cookieButton.isVisible()) {
      await cookieButton.click();
    }
  }

  async searchJeans() {
    await this.page.getByRole('link', { name: 'Пошук' }).click();
    const searchBox = this.page.getByRole('searchbox', { name: 'Введення тексту для пошуку' });
    await searchBox.fill('джинси');
    await searchBox.press('Enter');
  }

  async openFirstSearchResult() {
    await this.page.getByRole('link', { name: /ДЖИНСИ/i }).first().click();
  }
}
