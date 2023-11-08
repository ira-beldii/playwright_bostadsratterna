const { test, expect } = require('@playwright/test');
test('archive', async ({ page }) => {
    await page.goto('https://ahlviken57.stage.br24.se/');
    const page1Promise = page.waitForEvent('popup');
    await page.locator('a').filter({ hasText: 'Bild' }).click();
    const page1 = await page1Promise;
    await page1.getByRole('link', { name: 'oktober 2023' }).click();
    await page1.getByRole('link', { name: 'september 2023' }).click();
    await page1.getByRole('link', { name: 'augusti 2023' }).click();
    await page1.getByRole('link', { name: 'juli 2023' }).click();
});
