import { test,} from '@playwright/test';
import { CartAction } from '../pages/CartAction';
import { SearchPage } from '../pages/SearchComponent';
import { RegisterPage } from '../pages/RegistrationPage';
import { acceptCookiesIfVisible } from '../cookies/acceptCookies';
import { RegistrationFormData } from '../data/registration';

test.describe('', () => {
  const invalidFormData: RegistrationFormData = {
  email: 'test',
  password: '123',
  firstName: '123',
  lastName: '123',
  marketingConsent: true,
  privacyConsent: true,
};
  
test('zara-01 searching and adding a product to the cart will delete every second one',{tag: "@testCart"}, async ({page}) => {
  test.slow();

  const search = new SearchPage(page);
  const cart = new CartAction(page);
  const registerPage = new RegisterPage(page);

  await page.goto('https://www.zara.com/ua/');

  //accept cookies
   await acceptCookiesIfVisible(page);


await test.step("Find first product add to cart", async () => {
// search product
await search.searchItem();
//find first result
await search.openFirstSearchResult();
// get sizes
const sizes = await cart.getlableSizes();
//add product sizes
await cart.addSizeToCart(sizes);
});

await test.step("delete product in cart and goto registration", async () => {
//open cart
await cart.openCart();
//delete product in cart
await cart.deleteEverySecondCartItem();
});

await test.step("registration formData", async () => {
 await registerPage.registerWithData(invalidFormData);

 await registerPage.expectErrorMessageVisible();
});
});
});
