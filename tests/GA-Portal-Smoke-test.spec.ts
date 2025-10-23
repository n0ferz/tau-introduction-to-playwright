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

    // --- Disclaimer validation
    await expect(page.locator('.legalLabel')).toBeVisible();
    await expect(page.locator('[name="ctl00$mainContent$AgreeButton"]')).toBeVisible();
    await expect(page.locator('[name="ctl00$mainContent$DisagreeButton"]')).toBeVisible();

    // Decline disclaimer
   // await page.locator('[name="ctl00$mainContent$DisagreeButton"]').click();

    // Login again
    //await page.locator('#lnkOtherSignIn').click();
    //await page.locator('[name="txtUsername"]').fill('Brajim20@gmail.com');
    //await page.locator('[name="txtPassword"]').fill('P@ssw0rd!');
    //await page.locator('[name="loginButton"]').first().click();

    // Accept disclaimer
    await page.locator('[name="ctl00$mainContent$AgreeButton"]').click();

    // --- Welcome page validation
    await expect(page.locator('.welcome_title')).toBeVisible();
    await expect(page.locator('.welcome_letter > .content > :nth-child(1)')).toBeVisible();
    // Assert that the text is visible
await expect(page.getByText('Welcome To The General')).toBeVisible();

// Links in the main navigation
await expect(page.getByRole('link', { name: 'Welcome' })).toBeVisible();
await expect(page.getByRole('link', { name: 'My Alerts' })).toBeVisible();
await expect(page.getByRole('link', { name: 'Due Diligence' })).toBeVisible();
await expect(page.getByRole('link', { name: 'Research & Insights' })).toBeVisible();
await expect(page.getByRole('link', { name: 'Documents' })).toBeVisible();

  // Avatar image
await expect(page.locator('#AvatarImage')).toBeVisible();

// Tertiary navigation button
await expect(page.locator('#tertiaryNavButton')).toBeVisible();
//text elements
await expect(page.getByText('Alerts', { exact: true })).toBeVisible();
await expect(page.getByText('News')).toBeVisible();
await expect(page.getByText('Insights', { exact: true })).toBeVisible();
await expect(page.getByText('Contact Us Share Files')).toBeVisible();
// links
await expect(page.getByRole('link', { name: ' Legacy Portal' })).toBeVisible();
await expect(page.getByRole('link', { name: ' more' })).toBeVisible();
await expect(page.getByRole('link', { name: 'Contact Us' })).toBeVisible();


// Text element
await expect(page.getByText('Admin')).toBeVisible();

    // Example navigation clicks
    scrollToTop: await page.evaluate(() => window.scrollTo(0, 0));
    await expect(page.locator('#mainContent_LegacyLink')).toBeVisible();
 await page.locator('#mainContent_moreAnnoucementLink').click();

    // Alerts validate UI

    await expect(page.getByText('My Alerts').nth(2)).toBeVisible();
    await expect(page.getByTestId('mainContent_investorAnnouncements')).toBeVisible();;
   await expect(page.getByTestId('mainContent_AnnouncementFilter').getByText('view')).toBeVisible();
   await expect(page.getByTestId('mainContent_showallAnnouncement')).toBeVisible();
   await expect(page.getByTestId('mainContent_unreadAnnouncement')).toBeVisible();
 await expect(page.getByTestId('mainContent_accessedAnnouncement')).toBeVisible();
  await expect(page.getByText('Upcoming Events', { exact: true })).toBeVisible();
await expect(page.getByText('Current Tasks')).toBeVisible();



  // alerts page check functionality (the awaits are added to wait for the callback actions to complete)
   await page.getByTestId('mainContent_accessedAnnouncement').click();
   await page.waitForTimeout(500);
   await page.getByTestId('mainContent_showallAnnouncement').click();
await page.waitForTimeout(500);
   await page.getByTestId('mainContent_unreadAnnouncement').click();   
   await page.waitForTimeout(500);     
 
// investment alerts page validatio
await page. getByTestId('mainContent_investorAnnouncements').click();
 await expect(page.getByTestId('mainContent_investorAnnouncements')).toBeVisible();
  await expect(page.locator('.dropdown-select')).toBeVisible();
await expect(page.getByTestId('mainContent_showDisclaimerForMarkAllAsReadLink')).toBeVisible();
  await expect(page.getByTestId('mainContent_AnnouncementFilter').getByText('view')).toBeVisible();
  await expect(page.getByTestId('mainContent_unreadAnnouncement')).toBeVisible();
  await expect(page.getByTestId('mainContent_accessedAnnouncement')).toBeVisible();
  await expect(page.getByTestId('mainContent_showallAnnouncement')).toBeVisible();


///investment alerts page actions
await page.getByTestId('mainContent_investorAnnouncements').click();
   await page.getByTestId('mainContent_accessedAnnouncement').click();
   await page.getByTestId('mainContent_showallAnnouncement').click();
   await page.getByTestId('mainContent_unreadAnnouncement').click();
 await expect(page.getByTestId('mainContent_showDisclaimerForMarkAllAsReadLink')).toBeVisible();

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
await expect(page.getByText('Expand Categories')).toHaveText('Expand Categories'); 
await expect(page.locator('#mainContent_DocumentViewerControl_panelCallback_txtSearchDocuments_I')).toBeVisible();
await expect(page.getByRole('cell', { name: 'Search' })).toBeVisible();
await expect(page.getByTestId('mainContent_DocumentViewerControl_panelCallback_chkExpandToggle_S_D')).toBeVisible();
await expect(page.locator('#mainContent_DocumentViewerControl_panelCallback_chkExpandToggle_S_D')).toBeVisible();
await expect(page.getByText('0 File (0KB) Selected')).toBeVisible(); 
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
//list view
await page.locator('#mainContent_DocumentViewerControl_panelCallback_rbtnViewBy_RB1_I_D').click();
///list view searchfunctionality
await page.getByTestId('mainContent_DocumentViewerControl_panelCallback_txtSearchDocuments_I').click();
await page.getByTestId('mainContent_DocumentViewerControl_panelCallback_txtSearchDocuments_I').fill('lp testing prospect doc');
///wait for search results to load
await page.locator('#mainContent_DocumentViewerControl_panelCallback_txtSearchDocuments_I').clear();
//close the download popup
//download a document
await page.locator('#mainContent_DocumentViewerControl_panelCallback_dgvDocument_cell1_16_DownloadSingleBtn_1Img').click();
await page.locator('#mainContent_DocumentViewerControl_panelCallback_txtSearchDocuments_I').clear();
//close the download popup
await expect(page.locator('#customTooltip')).toBeVisible();
//switch email me the document/
await expect(page.getByTestId('mainContent_DocumentViewerControl_panelCallback_dgvDocument_cell1_16_EmailMeSingleBtn_1Img')).toBeVisible();
await page.getByTestId('mainContent_DocumentViewerControl_panelCallback_dgvDocument_cell1_16_EmailMeSingleBtn_1Img').click();
await page.getByRole('link', { name: 'Research & Insights' }).click();
await expect(page.getByText('News & Insights')).toBeVisible();
await expect(page.getByRole('link', { name: 'Filter' })).toBeVisible();
await expect(page.getByTestId('filteredAnnouncement')).toBeVisible();
await expect(page.getByTestId('filteredSpotlight')).toBeVisible();

//filter functionality
   await page.getByRole('link', { name: 'Filter' }).click();
await expect(page.getByText('Categories')).toBeVisible();
await expect(page.getByText('Category selection is required. Select All Insights Research')).toBeVisible();
await expect(page.getByText('Date', { exact: true })).toBeVisible();
await expect(page.getByTestId('pdaterange_container').getByText('From')).toBeVisible();
//filter functionality
   await page.getByRole('link', { name: 'Filter' }).click();
await expect(page.getByText('Categories')).toBeVisible();
await expect(page.getByText('Category selection is required. Select All Insights Research')).toBeVisible();
await expect(page.getByText('Date', { exact: true })).toBeVisible();
await expect(page.getByTestId('pdaterange_container').getByText('From')).toBeVisible();
await expect(page.getByTestId('maincontainer').getByText('To', { exact: true })).toBeVisible();
await expect(page.locator('#pdaterange_container div').nth(2)).toBeVisible();
await expect(page.getByRole('listitem').filter({ hasText: 'All Dates' }).getByRole('radio')).toBeVisible();
await expect(page.locator('#dd')).toBeVisible();
await expect(page.getByRole('link').filter({ hasText: /^$/ }).first()).toBeVisible();
await expect(page.getByRole('link', { name: 'Go', exact: true })).toBeVisible();
await page.getByRole('link', { name: 'Go', exact: true }).click();
  
// Document page validation 

await expect(page.getByRole('link', { name: 'Documents' })).toBeVisible();
await page.getByRole('link', { name: 'Documents' }).click();
await page.getByTestId('fundsHeader').click();
await expect(page.getByTestId('filterFunds').getByText('Choose from')).toBeVisible();
await expect(page.getByTestId('filterFunds').getByText('Product')).toBeVisible();
await expect(page.getByRole('link', { name: 'Investments' })).toBeVisible();
await expect(page.getByRole('link', { name: 'Section/Category' })).toBeVisible();
await expect(page.getByTestId('tabs-filter').getByText('show')).toBeVisible();
await expect(page.getByTestId('showall')).toBeVisible();
await expect(page.getByTestId('accessed')).toBeVisible();
await expect(page.getByTestId('unread')).toBeVisible();
await expect(page.getByTestId('bydate_button')).toBeVisible();
await expect(page.getByTestId('search').locator('div').first()).toBeVisible();
await expect(page.getByTestId('searchInput')).toBeVisible();
await expect(page.getByText('show all unread Click for')).toBeVisible();
await expect(page.getByTestId('mainContent_viewByLabel')).toBeVisible();
await page.getByTestId('filterFunds').getByRole('link').first().click();
await expect(page.getByRole('link', { name: 'Product' })).toBeVisible();
await expect(page.getByRole('link', { name: 'Investments' })).toBeVisible();
await expect(page.getByRole('link', { name: 'Section/Category' })).toBeVisible();
await expect(page.getByText('Categories')).toBeVisible();
await expect(page.getByText('date title Investment Section')).toBeVisible();
await expect(page.getByTestId('selectAll')).toBeVisible();
await expect(page.getByText('date', { exact: true })).toBeVisible();
await expect(page.getByText('title')).toBeVisible();
await expect(page.locator('span').filter({ hasText: 'title' })).toBeVisible();
await expect(page.locator('.tableHeaderInvestorLabel')).toBeVisible();
await expect(page.getByText('Investment', { exact: true })).toBeVisible();
await expect(page.locator('div').filter({ hasText: /^Section\/Category$/ })).toBeVisible();
await expect(page.locator('.tableHeaderAction')).toBeVisible();
await expect(page.getByText('Expand', { exact: true })).toBeVisible();
await expect(page.locator('i').nth(1)).toBeVisible();
await expect(page.getByTestId('fh_18').getByTestId('tableFundInfoSecondaryFilter_18')).toBeVisible();
await expect(page.getByTestId('fh_18').getByRole('img')).toBeVisible();
await expect(page.getByTestId('fh_18').getByTestId('tableFundInfoSecondaryFilter_18')).toBeVisible();

// Show all 
 await expect(page.getByTestId('tabs-filter').getByText('show')).toBeVisible();
 await expect(page.getByTestId('showall')).toBeVisible()
// show unread 
await page.getByTestId('unread').click();
// show read 
await page.getByTestId('accessed').click();
// Show all
 await expect(page.getByTestId('tabs-filter').getByText('show')).toBeVisible();
 await expect(page.getByTestId('showall')).toBeVisible();
// show unread
await page.getByTestId('unread').click();

// show read
await page.getByTestId('unread').click();

// back to show all
await page.getByTestId('showall').click();

// select all product
await page.getByRole('link', { name: 'Product' }).click();

// validate product filter
 await expect(page.getByTestId('ft-id-4')).toBeVisible();

 // make the selection 
 await page.getByRole('link', { name: 'Select All' }).click();
  await page.getByRole('link', { name: 'Remove All' }).click();
   await page.getByRole('link', { name: 'Select All' }).click();
 await page.getByTestId('filterFunds').getByRole('link', { name: 'Go' }).click();


 // All/ Unread/ Read  Stiwch between tabs.

 await page.getByTestId('unread').click();
  await page.getByTestId('accessed').click();
   await page.getByTestId('showall').click();

   // Investment filter search/remove/ add all & Go 
   await page.getByTestId('investorsHeader').click();
 await expect(page.getByRole('link', { name: 'Remove All' })).toBeVisible();
 await page.getByRole('link', { name: 'Remove All' }).click();
await page.getByTestId('filterInvestor').getByRole('searchbox', { name: 'Search' }).click();;
await page.getByTestId('filterInvestor').getByRole('searchbox', { name: 'Search' }).fill('');
 await page.getByRole('link', { name: 'Select All' }).click();
await page.getByTestId('filterInvestor').getByRole('link', { name: 'Go' }).click();
 await page.getByTestId('investorsHeader').click();
 await  page.getByTestId('filterInvestor').getByRole('link').first().click();


 // Section-categories filter search/remove/ add all & Go 
 await page.getByRole('link', { name: 'Section/Category' }).click();

 await page.getByRole('link', { name: 'Remove All' }).click();
 await page.getByRole('link', { name: 'Select All' }).click();
 await page.getByTestId('filterCategories').getByRole('link', { name: 'Go' }).click();
  await page.getByRole('link', { name: 'Section/Category' }).click();
 await page.getByTestId('filterCategories').getByRole('link').first().click();//

//// Date filter 7 days to All dates.
 await page.getByTestId('bydate_button').click();
 await page.getByText('Last 7 days').click();
 await page.getByTestId('bydate_button').click();
 await expect(page.getByTestId('tabs-filter').getByText('Last 30 days')).toBeVisible();
 await page.getByTestId('tabs-filter').getByText('Last 30 days').click();
 await page.getByTestId('bydate_button').click();
 await page.getByText('Last 90 days').click();
  await page.getByTestId('bydate_button').click();
 await page.getByText('Last 6 months').click();
 await page.getByTestId('bydate_button').click();
 await page.getByText('Last 12 months').click();
 await page.getByTestId('bydate_button').click();
 await page.getByText('All Dates').click();

 // Custom Date Rante 

 await page.getByTestId('bydate_button').click();
 await page.getByTestId('from').click();
 await page.getByRole('combobox').nth(1).selectOption('2015');
 await page.getByRole('combobox').first().selectOption('0');
 await page.getByRole('link', { name: '1', exact: true }).click();
 await page.getByTestId('to').click();
 await page.getByRole('link', { name: '7', exact: true }).click();
 await page.getByTestId('submitCustomDateRange').click();

// View by Categories & Expand/Collapse 

await page.locator('i').nth(1).click();
await page.getByText('Categories', { exact: true }).click();
await page.locator('i').nth(1).click();
await page.locator('i').nth(1).click();
await page.locator('i').nth(1).click();
await page.locator('label').filter({ hasText: 'Product' }).click();


 // search box & Expand/Collapse 
await page.getByTestId('searchInput').click();
await page.getByTestId('searchInput').click();
await page.getByTestId('searchInput').fill('test');
await page.locator('i').nth(1).click();
await page.locator('i').nth(1).click();


  // admin/ impersonate 

  await page.getByText('Admin').click();
  await page.getByRole('link', { name: 'Impersonate' }).click();
  await page.getByTestId('st').click();
  await page.getByTestId('st').fill('brayan');
  await page.getByTestId('st').press('Enter');
  await page.getByRole('link', { name: 'InvestorFlow BJ Team' }).click();
  await page.getByTestId('mainContent_impersonateUser').click();
  await page.getByRole('link', { name: 'Welcome' }).click();
  await page.getByRole('link', { name: 'My Alerts' }).click();
  await page.getByRole('link', { name: 'Due Diligence' }).click();
  await page.getByRole('link', { name: 'Research & Insights' }).click();
  await page.getByRole('link', { name: 'Documents' }).click();
  await page.locator('.content').click();
  await page.getByText('Contact Us Share Files').click();
  await page.getByRole('link', { name: 'Contact Us' }).click();
  await page.getByTestId('buttonsubmit').getByText('Submit').click();
  await page.getByTestId('mainContent_Phone').click();
  await page.getByTestId('mainContent_Phone').fill('52221');
  await page.getByText('Subject*Required').click();
  await page.getByTestId('mainContent_Subject').fill('af');
  await page.getByText('Subject*Required').click();
  await page.getByTestId('mainContent_Subject').fill('afasfas');
  await page.getByTestId('mainContent_Message').click();
  await page.getByTestId('mainContent_Message').click();
  await page.getByTestId('mainContent_Message').fill('afsafa');
  await page.getByTestId('buttonsubmit').getByText('Submit').click();
  await page.getByTestId('mainContent_messageDivID').click();
  await page.getByRole('link', { name: 'Share Files' }).click();
  await expect(page.getByRole('button', { name: 'Upload File' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Upload File' })).toBeVisible();
  await expect(page.getByTestId('mainContent_lblPageTitle')).toBeVisible();
  await expect(page.getByText('Viewing as: InvestorFlow BJ')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Share Files' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Contact Us' })).toBeVisible();


// impersonate validation 

await expect(page.getByRole('link', { name: 'Welcome' })).toBeVisible();
await expect(page.getByRole('link', { name: 'My Alerts' })).toBeVisible();
await expect(page.getByRole('link', { name: 'Due Diligence' })).toBeVisible();
await expect(page.getByRole('link', { name: 'Research & Insights' })).toBeVisible();
await expect(page.getByRole('link', { name: 'Documents' })).toBeVisible();
await expect(page.getByText('Admin')).toBeVisible();
await await page.getByText('Admin').hover();
await expect(page.getByRole('link', { name: 'Impersonate' })).toBeVisible();
await expect(page.getByTestId('landingPageURL')).toBeVisible();
  await page.getByTestId('TertiaryImpersonationLinkBtn').click();

  /// contact us 

  await page.getByRole('link', { name: 'Contact Us' }).click();
  await page.getByTestId('mainContent_Subject').click();
  await page.getByTestId('mainContent_Subject').fill('hi');
  await page.getByTestId('mainContent_Message').click();
  await page.getByTestId('mainContent_Message').fill('playwright test');
  await page.getByTestId('mainContent_Fund').selectOption('8');
  await page.getByTestId('mainContent_Investor').selectOption('183');
  await page.getByTestId('buttonsubmit').getByText('Submit').click();
  await expect(page.getByTestId('mainContent_messageDivID')).toBeVisible();

  // share file 

  await page.getByRole('link', { name: 'Share Files' }).click();

  await expect(page.getByRole('button', { name: 'Upload File' })).toBeVisible();
  await page.getByRole('button', { name: 'Upload File' }).click();
  await page.getByTestId('mainContent_DisplayName').click();
  await page.getByTestId('mainContent_DisplayName').fill('new test play');
  await page.getByTestId('mainContent_ddlCats').selectOption('31');
  await page.getByTestId('btn-showmore').click();
  await page.getByTestId('mainContent_fileUpload').click();
  try{
await page.getByTestId('mainContent_fileUpload').setInputFiles('C:/Repository/tau-introduction-to-playwright/utils/Screenshot 2024-06-19 102407.png');
console.log('File Uploaded')
  }catch (Error)
               {console.log('File Not Uploaded');}
  await page.getByTestId('mainContent_BtnSubmitClient').click();
await expect(page.locator('tr:nth-child(22) > td').first()).toBeVisible();
await expect(page.locator('tr:nth-child(22) > td:nth-child(4) > div:nth-child(2)')).toBeVisible();
await expect(page.locator('tr:nth-child(22) > td:nth-child(3)')).toBeVisible();

    // Logout flow
    await page.getByTestId('tertiaryNavArrow').click();
    await page.getByRole('button', { name: 'My Profile' }).click();
    await page.locator('#tertiaryNavButton').click();
    await page.locator('.tertiary-nav-dropdown-menu-options > :nth-child(3)').click();
    await page.getByTestId('mainContent_cancelButton').click();

    await page.getByTestId('mainContent_SubmitButton').click();
    await expect(page.getByTestId('mainContent_profileDiv')).toBeVisible();
    await expect(page.getByText('Update My Profile')).toBeVisible();
    await expect(page.getByTestId('AvatarImage')).toBeVisible();
    await page.getByTestId('tertiaryNavArrow').click();
    await page.getByRole('button', { name: 'Change Password' }).click();
    await expect(page.getByText('Change Password').nth(2)).toBeVisible();
    await expect(page.locator('.portal-form-row').first()).toBeVisible();
    await expect(page.getByTestId('mainContent_NewPW')).toBeVisible();
    await expect(page.getByTestId('mainContent_ConfirmPW')).toBeVisible();
    await expect(page.getByTestId('changePass').locator('div').filter({ hasText: 'Passwords are case-sensitive' }).nth(1)).toBeVisible();
    await expect(page.getByTestId('mainContent_SubmitButton')).toBeVisible();
    await expect(page.getByTestId('mainContent_lblOldPw')).toBeVisible();
    await expect(page.getByTestId('mainContent_lblNewPW')).toBeVisible();
    await expect(page.getByTestId('mainContent_lblConfirmPw')).toBeVisible();
    await expect(page.getByTestId('mainContent_SubmitButton')).toBeVisible();

/// log out 

await page.getByTestId('tertiaryNavArrow').click();
await page.getByRole('button', { name: 'Logout' }).click();


  });

function getByText(arg0: string): any {
  throw new Error('Function not implemented.');
}
});
