
import { test, expect } from '@playwright/test';
test.describe("GA  SMOKE Test", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://ga.qa-portal-investorflow.com/SAML2/Login.aspx?source=idp' , { timeout: 500000});
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test('Logs in without 2FA, handles AVG doc widget testing', async ({ page }) => {


        // --- Initial validation
        await expect(page.locator('#lnkOtherSignIn')).toBeVisible();
        await page.locator('#lnkOtherSignIn').click();
        await expect(page.locator('#imgLogo')).toBeVisible();
      await expect(page.getByText('Powering Visionary Growth')).toBeVisible();
    
        
    
        // --- Log in
        await page.locator('[name="txtUsername"]').fill('Brajim20@gmail.com');
        await page.locator('[name="txtPassword"]').fill('P@ssw0rd!');
        await page.locator('[name="loginButton"]').first().click();
    
        // --- Disclaimer validation
        await expect(page.locator('.legalLabel')).toBeVisible();
        await expect(page.locator('[name="ctl00$mainContent$AgreeButton"]')).toBeVisible();
        await expect(page.locator('[name="ctl00$mainContent$DisagreeButton"]')).toBeVisible();

    // Accept disclaimer
    await page.locator('[name="ctl00$mainContent$AgreeButton"]').click();

// Due Diligence
     await page.getByRole('link', { name: 'Due Diligence' }).click();
    await page.waitForTimeout(1000);
  await expect(page.getByText('AVG DOC WIDGET 2', { exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'AVG DOC WIDGET 2 is an' }).click();
  await page.waitForTimeout(1000);   

  //AVG Doc widget 2 page validation
  await expect(page.getByText('AVG DOC WIDGET 2 is an')).toBeVisible();
await expect(page.locator('#mainContent_vehicleDescription')).toBeVisible();
await expect(page.getByText('Indicate Interest').nth(1)).toBeVisible();
await expect(page.getByText('Show Interest')).toBeVisible();
await expect(page.getByRole('link', { name: 'Make Investment' })).toBeVisible();
await expect(page.getByText('Link to Subscription Documents Subscribe')).toBeVisible();
await expect(page.getByRole('link', { name: 'Subscribe' })).toBeVisible();
await expect(page.getByText('Key Diligence For Prospect AVG DOC WIDGET 2 View by: CategoriesList Show: All')).toBeVisible();
await expect(page.getByText('Key Diligence For Prospect')).toBeVisible();
await expect(page.getByText('View by:')).toBeVisible();
await expect(page.locator('#mainContent_DocumentViewerControl_panelCallback_rbtnViewBy_RB0_I_D')).toBeVisible();
await expect(page.getByText('Categories', { exact: true })).toBeVisible();
await expect(page.locator('#mainContent_DocumentViewerControl_panelCallback_rbtnViewBy_RB1_I_D')).toBeVisible();
await expect(page.getByText('List', { exact: true })).toBeVisible();
await expect(page.locator('#mainContent_DocumentViewerControl_panelCallback_btnFilterImg')).toBeVisible();
await expect(page.locator('span').filter({ hasText: 'Show: All' })).toBeVisible();
await expect(page.locator('#mainContent_DocumentViewerControl_panelCallback_btnFilter')).toBeVisible();
await expect(page.locator('#mainContent_DocumentViewerControl_panelCallback_txtSearchDocuments_I')).toBeVisible();
await expect(page.getByRole('cell', { name: 'Search' })).toBeVisible();
await expect(page.getByText('Expand Categories')).toBeVisible();
await expect(page.locator('#mainContent_DocumentViewerControl_panelCallback_chkExpandToggle_S_D')).toBeVisible();
await expect(page.getByText('File (0KB) Selected')).toBeVisible(); 
await expect(page.locator('#mainContent_DocumentViewerControl_panelCallback_ASPxButtonMultiDownload')).toBeVisible(); 
await expect(page.locator('#mainContent_DocumentViewerControl_panelCallback_ASPxButtonMultiDownloadImg')).toBeVisible();
await expect(page.locator('#mainContent_DocumentViewerControl_panelCallback_ASPxButtonMultiDownload_CD span')).toBeVisible();
await expect(page.locator('#mainContent_DocumentViewerControl_panelCallback_ASPxButtonMultiEmailImg')).toBeVisible();
await expect(page.locator('span').filter({ hasText: /^Email$/ })).toBeVisible();
await expect(page.locator('#mainContent_DocumentViewerControl_panelCallback_ASPxButtonMultiEmail')).toBeVisible();
await expect(page.locator('#mainContent_DocumentViewerControl_panelCallback_dgvDocument_header0_chkSelectAll_0_S_D')).toBeVisible();
await expect(page.locator('#mainContent_DocumentViewerControl_panelCallback_dgvDocument_header7_imgViewOnlyIcon_7')).toBeVisible();
await expect(page.locator('#mainContent_DocumentViewerControl_panelCallback_dgvDocument_col8').getByRole('cell', { name: 'Title' })).toBeVisible();
await expect(page.getByRole('cell', { name: 'Date', exact: true })).toBeVisible();
await expect(page.getByRole('img', { name: 'Descending' })).toBeVisible();
await expect(page.getByRole('cell', { name: 'U Capital Account Statement 4 Files', exact: true })).toBeVisible();
await expect(page.getByText('Capital Account Statement', { exact: true })).toBeVisible();
await expect(page.locator('#mainContent_DocumentViewerControl_panelCallback_dgvDocument_gr0_11_lblGroupSummaryCount_0')).toBeVisible();


//list view
await page.locator('#mainContent_DocumentViewerControl_panelCallback_rbtnViewBy_RB1_I_D').click();
await page.waitForTimeout(1000);
///list view searchfunctionality
await page.getByTestId('mainContent_DocumentViewerControl_panelCallback_txtSearchDocuments_I').click();
await page.getByTestId('mainContent_DocumentViewerControl_panelCallback_txtSearchDocuments_I').fill('lp testing prospect doc');
///wait for search results to load
await expect(page.getByRole('link', { name: 'lp testing prospect doc' })).toBeVisible();
//download a document
await page.locator('#mainContent_DocumentViewerControl_panelCallback_dgvDocument_cell1_16_DownloadSingleBtn_1Img').click();
await page.locator('#mainContent_DocumentViewerControl_panelCallback_txtSearchDocuments_I').clear();
//close the download popup
await expect(page.locator('#customTooltip')).toBeVisible();
await page.waitForTimeout(500);
//switch email me the document/
await expect(page.getByTestId('mainContent_DocumentViewerControl_panelCallback_dgvDocument_cell1_16_EmailMeSingleBtn_1Img')).toBeVisible();
await page.getByTestId('mainContent_DocumentViewerControl_panelCallback_dgvDocument_cell1_16_EmailMeSingleBtn_1Img').click();
await page.waitForTimeout(500);


//download multiple documents
await page.getByTestId('mainContent_DocumentViewerControl_panelCallback_txtSearchDocuments_I').fill('10-1-2025');
await page.getByTestId('mainContent_DocumentViewerControl_panelCallback_txtSearchDocuments_I').fill('10-1-2025 Emir');
await page.getByTestId('mainContent_DocumentViewerControl_panelCallback_txtSearchDocuments_I').press('Enter');
await page.getByTestId('mainContent_DocumentViewerControl_panelCallback_rbtnViewBy_RB0_I_D').click();
await expect(page.getByTestId('mainContent_DocumentViewerControl_panelCallback_dgvDocument_header0_chkSelectAll_0_S_D')).toBeVisible();
await page.getByTestId('mainContent_DocumentViewerControl_panelCallback_dgvDocument_header0_chkSelectAll_0_S_D').click();
await page.waitForTimeout(500);
await page.getByTestId('mainContent_DocumentViewerControl_panelCallback_dgvDocument_gr0_13_chkGroupRowSelectDoc_0_S_D').click();
await page.waitForTimeout(200);

// if want to validate download 
    const downloadPromise = page.waitForEvent('download');
  await page.getByTestId('mainContent_DocumentViewerControl_panelCallback_ASPxButtonMultiDownload_CD').locator('span').click();
 const download = await downloadPromise;


await expect(page.getByTestId('mainContent_DocumentViewerControl_panelCallback_dgvDocument_header0_chkSelectAll_0_S_D')).toBeVisible();
await page.getByTestId('mainContent_DocumentViewerControl_panelCallback_txtSearchDocuments_I').fill('10-1-2025 Emir');
await page.getByTestId('mainContent_DocumentViewerControl_panelCallback_txtSearchDocuments_I').press('Enter');

///email multiple documents
await expect(page.getByTestId('mainContent_DocumentViewerControl_panelCallback_rbtnViewBy_RB0_I_D')).toBeVisible();
await page.getByTestId('mainContent_DocumentViewerControl_panelCallback_rbtnViewBy_RB0_I_D').click();
await expect(page.getByTestId('mainContent_DocumentViewerControl_panelCallback_dgvDocument_header0_chkSelectAll_0_S_D')).toBeVisible();
await page.waitForTimeout(200);
await page.getByTestId('mainContent_DocumentViewerControl_panelCallback_dgvDocument_gr0_13_chkGroupRowSelectDoc_0_S_D').click();
 await expect(page.getByTestId('mainContent_DocumentViewerControl_panelCallback_ASPxButtonMultiEmail_CD')).toBeVisible();
await page.getByTestId('mainContent_DocumentViewerControl_panelCallback_ASPxButtonMultiEmail_CD').click();
await page.waitForTimeout(500);
await expect(page.getByTestId('customTooltip')).toBeVisible();
 await page.getByTestId('mainContent_DocumentViewerControl_panelCallback_txtSearchDocuments_I').clear(); 

//// Done until here 


// unselect all documents
await expect(page.getByTestId('mainContent_DocumentViewerControl_panelCallback_dgvDocument_gr0_11_chkGroupRowSelectDoc_0_S_D')).toBeVisible();
await expect(page.getByText('File (0KB) Selected')).toBeVisible();

// show Read/Unread/alla documents
await expect(page.getByTestId('mainContent_DocumentViewerControl_panelCallback_btnFilter')).toBeVisible();
await page.locator('#mainContent_DocumentViewerControl_panelCallback_btnFilter').click();
await page.waitForTimeout(200);
await page.getByTestId('mainContent_DocumentViewerControl_panelCallback_pcDocumentStatusFilter_btnShowAll').click();
await page.waitForTimeout(200);
await expect(page.getByTestId('mainContent_DocumentViewerControl_panelCallback_btnFilter')).toBeVisible();
await page.locator('#mainContent_DocumentViewerControl_panelCallback_btnFilter').click();
await page.getByTestId('mainContent_DocumentViewerControl_panelCallback_pcDocumentStatusFilter_btnUnread').click();
await page.waitForTimeout(200);
await expect(page.getByTestId('mainContent_DocumentViewerControl_panelCallback_btnFilter')).toBeVisible();
await page.locator('#mainContent_DocumentViewerControl_panelCallback_btnFilter').click();
await page.getByTestId('mainContent_DocumentViewerControl_panelCallback_pcDocumentStatusFilter_btnAccessed').click();
await page.waitForTimeout(200);


  });
    });