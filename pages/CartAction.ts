import {Page, Locator, expect} from '@playwright/test';

export class CartAction {
    readonly page: Page;
    readonly addToCartButton: Locator;
    readonly cartLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToCartButton = page.locator('button[data-qa-action="add-to-cart"]');
        this.cartLink = page.locator('[data-qa-action="shop-navigation-link-Shopping_bag"]');
    
    }
    //see all sizes product
    async getlableSizes(): Promise<string[]> {
        await this.addToCartButton.click();

        const sizeButton = this.page.locator('button').filter({ hasText: /^[0-9]{2}$/ });
        const sizes: string[] = [];

        const count = await sizeButton.count();
        for(let i = 0; i < count; i++) {
            const btn = sizeButton.nth(i);
            if(await btn.isEnabled()) {
                const text = await btn.textContent();
                if(text) sizes.push(text.trim());
            }
        }
        console.log(`Знайдено ${sizes.length} доступних розмірів:`, sizes);
        return sizes;
    }
    
//add sizes to cart
async addSizeToCart(sizes: string[], count: number = 4) {
  for (let i = 0; i < count; i++) {
    const size = sizes[i];

    await this.page.getByRole('button', { name: size, exact: true }).click();

    const forceAdd = this.page.getByRole('button', { name: 'УСЕ ОДНО ДОДАТИ' });
    if (await forceAdd.isVisible({ timeout: 1000 }).catch(() => false)) {
      await forceAdd.click();
    }

// close popup
    const closeButton = this.page.getByRole('button', { name: 'Закрити' });
      await closeButton.click().catch(() => this.page.keyboard.press('Escape'));
      await this.page.keyboard.press('Escape');
    
      await this.page.waitForTimeout(500);
      await this.addToCartButton.click();
  }
};

  async openCart() {
    await this.page.getByRole('link', { name: /Товари в кошику/ }).click();
    await this.page.waitForTimeout(500);
  };

  //delete two product
  async deleteEverySecondCartItem() {
    const cartItems = this.page.locator('ul.shop-cart-grid-items > li');
    const count = await cartItems.count();
    
    for (let i = 1; i < count; i += 2) {
      const item = cartItems.nth(i);
      const deleteBtn = item.getByRole('button', { name: 'Видалити позицію' });
      await item.hover();
      await deleteBtn.waitFor({ state: 'visible' });

      await deleteBtn.first().click();
      await this.page.waitForTimeout(500);
      await deleteBtn.first().click();
      break;
    }
  };

  async expectCartItemCount(count: number) {
    await this.page.waitForTimeout(500);
    await expect(this.cartLink).toContainText('2');
  }
};