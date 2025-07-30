import { Locator, Page } from '@playwright/test';

export class SearchPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async searchItem(query: string) {
    await this.page.locator('[data-qa-id="header-search-text-link"]').click();

    const searchBox = this.page.getByRole('searchbox', { name: 'Введення тексту для пошуку' });
    await searchBox.fill(query);
    await searchBox.press('Enter');
  }

  async openFirstSearchResult() {
    const firstProduct = this.page.locator('[data-qa-qualifier="media-image"]').first();
    await firstProduct.click();
  }
}

