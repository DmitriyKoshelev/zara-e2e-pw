import { Locator, Page } from '@playwright/test';

export class SearchPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async searchItem() {
    await this.page.locator('[data-qa-id="header-search-text-link"]').click();
    const searchBox = this.page.getByRole('searchbox', { name: 'Введення тексту для пошуку' });
    await searchBox.fill('джинси');
    await searchBox.press('Enter');
  }

  async openFirstSearchResult() {
    await this.page.getByRole('link', { name: /ДЖИНСИ/i }).first().click();
  }
}
