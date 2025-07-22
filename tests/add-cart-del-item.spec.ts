import { test, expect } from '@playwright/test';
import { CartAction } from '../pages/CartAction';
import { SearchPage } from '../pages/SearchComponent';
import { RegisterPage } from '../pages/RegistrationPage';

test('func-01 finder product add to cart and delete two secont product', async ({page}) => {
  test.slow();
  tag: "@testCart";
  
  const search = new SearchPage(page);
  const cart = new CartAction(page);
  const registerPage = new RegisterPage(page);

  await page.goto('https://www.zara.com/ua/');

  //accept cookies
await search.acceptCookiesIfVisible();

await test.step("Find first product add to cart", async () => {
// search product
await search.searchJeans();
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
//checkout product in cart
await cart.expectCartItemCount(2);
//goto register page
await registerPage.registerWithInvalidData();
//check result invalid data
await registerPage.expectErrorMessageVisible();
});
});
 
