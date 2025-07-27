                                          This project is the result of my knowledge and skills that 
                                          I acquired in the courses on automation testing from (sampai DOJO)💹



#  Final Project – Playwright + TypeScript E2E Test Suite

This is an end-to-end (E2E) UI automation testing project built with **Playwright** and **TypeScript**.  
It focuses on automated testing for an online store interface, including:

-  Negative registration scenarios
-  Cart interactions (adding and removing items)
-  Collecting available product sizes

---

##  Project Structure

├── pages/ # Page Object Model classes

│ ├── RegisterPage.ts
│ └── CartPage.ts
├── tests/ # Test specifications

│ ├── register.spec.ts
│ └── cart.spec.ts
├── playwright.config.ts # Playwright config file

├── package.json # Project dependencies

└── tsconfig.json # TypeScript config

🚀 Running Tests:
npx playwright test
npx playwright test --ui

🧩 Page Objects Overview

//RegisterPage.ts:
goto() — Navigate to homepage

registerWithInvalidData() — Fill registration form with invalid data

expectErrorMessageVisible() — Check for error messages

//CartPage.ts:
getLabelSizes() — Collect available sizes and print count

deleteEverySecondCartItem() — Hover and delete every second item in cart


✅ Test Cases:

 ▶️RegisterPage:
✔️Negative registration scenario: fill invalid data and expect error message on email field

▶️artAction:

✔️Add item to cart (if needed)
✔️Collect all available product sizes
✔️Hover and delete every second cart item

🔄 Future Enhancements:

✅ Add positive registration tests with valid inputs

✅ Validate cart contents after item deletion

🔄 Add “clear entire cart” functionality

⚙️ Integrate GitHub Actions for CI

📊 Add Allure or HTML reports

🛠 Technologies:

-Playwright

-TypeScript

-Node.js

















