// example-applitools.spec.ts
import { test, expect } from '@playwright/test';
import {
  BatchInfo, Configuration, EyesRunner, ClassicRunner, VisualGridRunner,
  BrowserType, DeviceName, ScreenOrientation, Eyes, Target
} from '@applitools/eyes-playwright';

const USE_ULTRAFAST_GRID = true;

let Batch: BatchInfo;
let Config: Configuration;
let Runner: EyesRunner;
let eyes: Eyes;
const URL = 'https://demo.applitools.com';

test.describe('ACME Bank', () => {
  test.beforeAll(async () => {
    Runner = USE_ULTRAFAST_GRID
      ? new VisualGridRunner({ testConcurrency: 5 })
      : new ClassicRunner();

    const runnerName = USE_ULTRAFAST_GRID ? 'Ultrafast Grid' : 'Classic runner';
    Batch = new BatchInfo({ name: `ACME Project - ${runnerName}` });

    Config = new Configuration();
    Config.setBatch(Batch);

    if (USE_ULTRAFAST_GRID) {
      Config.addBrowser(800, 600, BrowserType.CHROME);
      Config.addBrowser(1600, 1200, BrowserType.FIREFOX);
      Config.addBrowser(1024, 768, BrowserType.SAFARI);
      Config.addDeviceEmulation(DeviceName.iPhone_11, ScreenOrientation.PORTRAIT);
      Config.addDeviceEmulation(DeviceName.Nexus_10, ScreenOrientation.LANDSCAPE);
    }
  });

  test.beforeEach(async ({ page }) => {
    eyes = new Eyes(Runner, Config);
    await eyes.open(page, 'ACME Bank', test.info().title, { width: 1024, height: 768 });
  });

  test.afterEach(async () => {
    await eyes.close();
  });

  test.afterAll(async () => {
    const results = await Runner.getAllTestResults();
    console.log('Visual test results', results);
  });

  test('log into a bank account', async ({ page }) => {
    await page.goto(URL);
    await eyes.check('Login page', Target.window().fully());
    await page.locator('id=username').fill('jedi');
    await page.locator('id=password').fill('happyTesting');
    await page.locator('id=log-in').click();
    await eyes.check('Main page', Target.window().fully().layout());
  });
});
