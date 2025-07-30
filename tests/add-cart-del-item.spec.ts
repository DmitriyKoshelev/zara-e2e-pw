import { test,expect} from '../fixtures/fixture';
import { acceptCookiesIfVisible } from '../cookies/acceptCookies';
import { RegistrationFormData } from '../types/registration';

test.describe('', () => {
  const invalidFormData: RegistrationFormData = {
  email: 'test',
  password: '123',
  firstName: '123',
  lastName: '123',
  marketingConsent: true,
  privacyConsent: true,
};
  
test('zara-01 searching and adding a product to the cart will delete every second one',{tag: "@testCart"}, 
  async ({page, searchPage, cartAction, registerPage}) => {
  test.slow();

    await page.goto('https://www.zara.com/ua/');
    await acceptCookiesIfVisible(page);

  await test.step('Find first product and add to cart', async () => {
      await searchPage.searchItem('джинси');
      await searchPage.openFirstSearchResult();
      const sizes = await cartAction.getlableSizes();
      await cartAction.addSizeToCart(sizes);
    });

  await test.step('Delete product from cart', async () => {
    await cartAction.openCart();
    await cartAction.deleteEverySecondCartItem();
    });

  await test.step("registration formData", async () => {
    await registerPage.registerWithData(invalidFormData);

    await registerPage.expectErrorMessageVisible();
});
});
});
