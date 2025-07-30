import { test as baseTest } from '@playwright/test';
import { SearchPage } from '../pages/SearchComponent';
import { CartAction } from '../pages/CartAction';
import { RegisterPage } from '../pages/RegistrationPage';

type ZaraFixtures = {
  searchPage: SearchPage;
  cartAction: CartAction;
  registerPage: RegisterPage;
};

export const test = baseTest.extend<ZaraFixtures>({
  searchPage: async ({ page }, use) => {

    await use(new SearchPage(page));
  },
  cartAction: async ({ page }, use) => {

    await use(new CartAction(page));
  },
  registerPage: async ({ page }, use) => {

    await use(new RegisterPage(page));
  },
});

export { expect } from '@playwright/test';
