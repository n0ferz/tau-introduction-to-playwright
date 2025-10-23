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

    

    // --- Log in
    await page.locator('[name="txtUsername"]').fill('Brajim20@gmail.com');
    await page.locator('[name="txtPassword"]').fill('P@ssw0rd!');
    await page.locator('[name="loginButton"]').first().click();




// multi download & email button fuction 
const headerAction = page.locator('.tableHeaderAction');

// Click the element
await headerAction.click();

// email multi button action 
await  page.getByTestId('searchInput').clear();
await page.waitForTimeout(2000);
await  page.getByTestId('searchInput').fill('Automation fund');
await page.getByRole('link', { name: 'Product' }).click();
await page.getByTestId('filterFunds').getByRole('link', { name: 'Go' }).click();
await page.getByRole('link', { name: 'Investments' }).click();
await page.getByTestId('filterInvestor').getByRole('link', { name: 'Go' }).click();
await page.getByRole('link', { name: 'Section/Category' }).click();
await page.getByTestId('filterCategories').getByRole('link', { name: 'Go' }).click();

await page.getByTestId('f_18').check();
await page.locator('.tableHeaderAction').click();
await page.getByTestId('toclick_reload').nth(1).click();



// multi doc donload with pop up validation

await page.waitForTimeout(1000); 
await page.getByTestId('f_18').click();
await page.locator('.tableHeaderAction').click();
await page.getByTestId('f_18').check();
await page.locator('.tableHeaderAction').click();
await page.locator('div').filter({ hasText: /^download download$/ }).locator('div').first().click();
const downloadPromise = page.waitForEvent('download');
  await page.locator('div').filter({ hasText: /^download download$/ }).locator('div').first().click();
  const download = await downloadPromise;

// multi email  with pop up validation

await page.getByTestId('f_18').check();
await page.locator('.tableHeaderAction').click();
await page.getByTestId('toclick_reload').nth(1).click();
await page.locator('.action.actionCheckDisclaimer.actionEmailCheckDisclaimer').click();
await page.locator('.actionEmailSent').click();

// Single download  with pop up validation


//  email with pop up validation

await page.getByRole('listitem').filter({ hasText: 'Sep 2025 New file loaded within last 30 daysvdsdsdAutomation Investment' }).getByTestId('fd_18_244479').check();
await page.getByTestId('accordion').getByRole('list').getByText('action').first().click();
const download1Promise = page.waitForEvent('download');
  await page.getByTestId('accordion').getByRole('list').getByText('download', { exact: true }).first().click();
  const download1 = await download1Promise;
await page.getByTestId('accordion').getByRole('list').getByText('They will be available in').first().click();
await page.getByTestId('accordion').getByRole('list').getByText('Your files are being').first().click();
await page.getByTestId('accordion').getByRole('link').filter({ hasText: /^$/ }).click();
await page.getByTestId('accordion').getByRole('list').getByText('action').nth(1).click();
await page.getByTestId('accordion').getByRole('list').getByText('email me').nth(2).click();
await page.getByText('Email successfully sent!').click();
await page.locator('.emailSuccessfulFooterFileInfo > .footerFileInfo').click();
await page.locator('.actionEmailSent').click();
await page.getByRole('link').filter({ hasText: /^$/ }).nth(2).click();

// document link are clickable 

const page1Promise = page.waitForEvent('popup');
  const download2Promise = page.waitForEvent('download');
  await page.getByRole('listitem').filter({ hasText: 'Sep 2025 New file loaded within last 30 daysvdsdsdAutomation Investment' }).getByRole('link').click();
  const page1 = await page1Promise;
  const download2 = await download2Promise;
const page2Promise = page.waitForEvent('popup');
  const download3Promise = page.waitForEvent('download');
  await page.getByRole('listitem').filter({ hasText: 'Sep 2025 New file loaded within last 30 daysvdsdsdtest duplicate 2Capital' }).getByRole('link').click();
  const page2 = await page2Promise;
  const download3 = await download3Promise;

    });
      });