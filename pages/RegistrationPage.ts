import { Page, Locator, expect } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;
  readonly continueBtn: Locator;
  readonly singlupBtn: Locator;
  readonly emailInput: Locator;
  readonly passInput: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly marketingCheckbox: Locator;
  readonly privacyCheckbox: Locator;
  readonly createAccountBtn: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.continueBtn = page.getByRole('button', { name: 'ПРОДОВЖИТИ' });
    this.singlupBtn = page.getByRole('button', { name: 'Зареєструйтеся' });
    this.emailInput = page.getByRole('textbox', { name: 'Електронна пошта' });
    this.passInput = page.getByRole('textbox', { name: 'Пароль' });
    this.firstNameInput = page.getByRole('textbox', { name: "Ім'я" });
    this.lastNameInput = page.getByRole('textbox', { name: 'Прізвище' });
    this.marketingCheckbox = page.locator('label', { hasText: 'Я хочу отримувати персоналізовані повідомлення комерційного характеру від ZARA' }).locator('svg').nth(1);
    this.privacyCheckbox = page.locator('label', { hasText: 'Я прочитав(-ла) і розумію Політику конфіденційності та використання файлів' }).locator('svg').nth(1);
    this.createAccountBtn = page.getByRole('button', { name: 'Створити рахунок' });
    this.errorMessage = page.getByText('Особисті даніПеревірте наведені далі помилкиЕлектронна пошта: Укажіть дійсну адр');

  }
  
  async registerWithInvalidData() {
    await this.continueBtn.click();
    await this.singlupBtn.click();
    await this.emailInput.fill('test');
    await this.passInput.fill('test');
    await this.firstNameInput.fill('test');
    await this.lastNameInput.fill('test');
    await this.marketingCheckbox.click();
    await this.privacyCheckbox.click();
    await this.createAccountBtn.click();
  }

  async expectErrorMessageVisible() {
    await expect(this.errorMessage).toBeVisible();
  }
}