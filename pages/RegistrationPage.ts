import { Page, Locator, expect } from '@playwright/test';
import { RegistrationFormData } from '../data/registration';

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
    this.continueBtn = page.locator('[data-qa-id="shop-continue"]');
    this.singlupBtn = page.locator('[data-qa-id="logon-view-alternate-button"]');
    this.emailInput = page.locator('[data-qa-input-qualifier="email"]');
    this.passInput = page.locator('[data-qa-input-qualifier="password"]');
    this.firstNameInput = page.locator('[data-qa-input-qualifier="firstName"]');
    this.lastNameInput = page.locator('[data-qa-input-qualifier="lastName"]');
    this.marketingCheckbox = page.locator('label').filter({ hasText: 'Я хочу отримувати персоналізовані повідомлення комерційного характеру від ZARA' }).locator('svg').nth(1);
    this.privacyCheckbox = page.locator('label').filter({ hasText: 'Я прочитав(-ла) і розумію Політику конфіденційності та використання файлів' }).locator('svg').nth(1);
    this.createAccountBtn = page.locator('[data-qa-action="sign-up-submit"]');
    this.errorMessage = page.getByText('Особисті даніПеревірте наведені далі помилкиЕлектронна пошта: Укажіть дійсну адр');
  }

  async registerWithData(data: RegistrationFormData) {
    await this.continueBtn.click();
    await this.singlupBtn.click();
    await this.emailInput.fill(data.email);
    await this.passInput.fill(data.password);
    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);

    if (data.marketingConsent) {
      await this.marketingCheckbox.click();
    }

    if (data.privacyConsent) {
      await this.privacyCheckbox.click();
    }

    await this.createAccountBtn.click();
  }

  async expectErrorMessageVisible() {
    await expect(this.errorMessage).toBeVisible();
  }
};
