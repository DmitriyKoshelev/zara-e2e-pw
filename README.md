End-to-end UI automation tests for the ZARA online store using Playwright and TypeScript. 
This project follows the Page Object Model to keep test logic clean, reusable, and maintainable.





#  Final Project – Playwright + TypeScript E2E Test Suite

This is an end-to-end (E2E) UI automation testing project built with **Playwright** and **TypeScript**.  
It focuses on automated testing for an online store interface, including:

-  Negative registration scenarios
-  Cart interactions (adding and removing items)
-  Collecting available product sizes

---

##  Project Structure
.
├── pages/                  # Page Object classes

│   ├── CartAction.ts
│   ├── SearchComponent.ts
│   └── RegistrationPage.ts

├── tests/                  # Test files

│   └── zaraCart.test.ts
├── data/                   # Test data (e.g. registration form values)

│   └── registration.ts
├── cookies/                # Helper to accept cookies

│   └── acceptCookies.ts
├── fixtures.ts             # Custom Playwright fixtures

├── playwright.config.ts    # Playwright configuration

└── package.json


🚀 Running Tests:
npx playwright test
npx playwright test --ui

🧩 Page Objects Overview

//SearchPage:
Handles searching for products and selecting search results.

//CartAction:
Encapsulates all interactions related to the shopping cart, sizes, and item management.

//RegisterPage:
Handles user registration interactions.


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

-Playwright - https://playwright.dev/

-TypeScript - https://www.typescriptlang.org/

-Node.js - https://nodejs.org/en

















