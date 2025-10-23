import { test, expect } from '@playwright/test';
test.describe("GA SMOKE Test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://ga.qa-portal-investorflow.com/SAML2/Login.aspx?source=idp' , { timeout: 500000});
    await page.setViewportSize({ width: 1920, height: 1080 });
  });
  test('Logs in without 2FA, handles disclaimers, and validates form', async ({ page }) => {
    test.setTimeout(1200000);
    // --- Initial validation
    await expect(page.locator('#lnkOtherSignIn')).toBeVisible();
    await page.locator('#lnkOtherSignIn').click();
    await expect(page.locator('#imgLogo')).toBeVisible();
  await expect(page.getByText('Powering Visionary Growth')).toBeVisible();
  //login step
  
await page.getByRole('textbox', { name: 'Username' }).click();

  });
  });