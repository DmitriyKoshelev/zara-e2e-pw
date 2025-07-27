import { Page } from '@playwright/test'

export async function acceptCookiesIfVisible(page: { locator: (arg0: string) => any; }) {
  const cookieButton = page.locator('[id="onetrust-accept-btn-handler"]');
  if (await cookieButton.isVisible()) {
    await cookieButton.click();
  }
};
